/**
 * gRPC transport protocol parsing module
 * Handles parsing of LITE protocol headers used in gRPC transport (HTTP POST)
 * This module reuses LITE protocol definitions and adds stream reading capabilities
 */

import { parseLiteHeader, AddressType } from "./protocol.js";
import { validateUUID } from "./auth.js";

// Re-export AddressType for convenience
export { AddressType };

/**
 * Helper to concatenate typed arrays
 * @param {Uint8Array} a - First array
 * @param {Uint8Array} b - Second array
 * @returns {Uint8Array} Concatenated array
 */
function concatTypedArrays(a, b) {
    const result = new Uint8Array(a.length + b.length);
    result.set(a, 0);
    result.set(b, a.length);
    return result;
}

/**
 * Parse LITE protocol header from stream (for gRPC transport)
 * This reuses the existing LITE protocol parser and adapts it for HTTP POST streams
 * @param {ReadableStream} bodyStream - Request body stream
 * @param {string} expectedUUID - Expected UUID for validation
 * @returns {Promise<Object|string>} Parsed header object or error string
 */
export async function parseLiteHeaderStream(bodyStream, expectedUUID) {
    const reader = bodyStream.getReader();

    // Read initial chunk to get the header
    let r = await reader.read();
    if (r.done) {
        return "connection closed before header";
    }

    let cache = new Uint8Array(r.value);
    let rlen = cache.length;

    // Ensure we have at least the minimum header size (24 bytes for LITE)
    const minHeaderSize = 24;
    while (rlen < minHeaderSize && !r.done) {
        r = await reader.read();
        if (r.done) break;
        cache = concatTypedArrays(cache, new Uint8Array(r.value));
        rlen = cache.length;
    }

    if (rlen < minHeaderSize) {
        return "header too short";
    }

    // Validate UUID using existing auth.js function
    // Convert current cache to ArrayBuffer for validation
    const headerBuffer = cache.buffer.slice(
        cache.byteOffset,
        cache.byteOffset + cache.byteLength,
    );

    if (!validateUUID(headerBuffer, expectedUUID)) {
        return "invalid UUID";
    }

    // Calculate expected header length based on LITE protocol structure
    const optionLength = cache[17];
    const commandPos = 18 + optionLength;

    // Ensure we have enough data for command, port, and address type
    const minForAddressType = commandPos + 1 + 2 + 1;
    while (rlen < minForAddressType && !r.done) {
        r = await reader.read();
        if (r.done) break;
        cache = concatTypedArrays(cache, new Uint8Array(r.value));
        rlen = cache.length;
    }

    if (rlen < minForAddressType) {
        return "header incomplete";
    }

    const command = cache[commandPos];
    if (command !== 1 && command !== 2) {
        return `unsupported command: ${command}`;
    }

    // eslint-disable-next-line no-unused-vars
    const port = (cache[commandPos + 1] << 8) + cache[commandPos + 2];
    const addressType = cache[commandPos + 3];

    // Calculate full header length based on address type
    let fullHeaderLength;
    const addressStart = commandPos + 4;

    if (addressType === AddressType.IPV4) {
        fullHeaderLength = addressStart + 4;
    } else if (addressType === AddressType.IPV6) {
        fullHeaderLength = addressStart + 16;
    } else if (addressType === AddressType.DOMAIN) {
        // Need to read domain length first
        while (rlen < addressStart + 1 && !r.done) {
            r = await reader.read();
            if (r.done) break;
            cache = concatTypedArrays(cache, new Uint8Array(r.value));
            rlen = cache.length;
        }
        if (rlen < addressStart + 1) {
            return "cannot read domain length";
        }
        const domainLength = cache[addressStart];
        fullHeaderLength = addressStart + 1 + domainLength;
    } else {
        return "invalid address type";
    }

    // Read until we have the full header
    while (rlen < fullHeaderLength && !r.done) {
        r = await reader.read();
        if (r.done) break;
        cache = concatTypedArrays(cache, new Uint8Array(r.value));
        rlen = cache.length;
    }

    if (rlen < fullHeaderLength) {
        return "incomplete address data";
    }

    // Now use the existing parseLiteHeader to parse the complete header
    const headerBufferComplete = cache.buffer.slice(
        cache.byteOffset,
        cache.byteOffset + fullHeaderLength,
    );

    const parsed = parseLiteHeader(headerBufferComplete);
    if (!parsed) {
        return "failed to parse LITE header";
    }

    // Extract remaining data after header
    const remainingData = cache.slice(fullHeaderLength);

    return {
        hostname: parsed.address,
        port: parsed.port,
        data: remainingData,
        resp: parsed.responseHeader,
        reader,
        done: r.done,
    };
}
