/**
 * Authentication module for LITE protocol
 * Handles UUID validation and early data processing
 */

/**
 * Validates UUID from the incoming data stream
 * @param {ArrayBuffer} data - The incoming data containing UUID
 * @param {string} expectedUUID - The expected UUID string (with or without dashes)
 * @returns {boolean} True if UUID matches, false otherwise
 */
export function validateUUID(data, expectedUUID) {
    console.debug("[Auth] Validating UUID...");

    if (data.byteLength < 24) {
        console.warn("[Auth] UUID validation failed: data too short", {
            byteLength: data.byteLength,
            required: 24,
        });
        return false;
    }

    const uuidBytes = new Uint8Array(data.slice(1, 17));
    const normalizedExpectedUUID = expectedUUID.replace(/-/g, "");

    // Compare each byte of the UUID
    for (let byteIndex = 0; byteIndex < 16; byteIndex++) {
        const expectedByteValue = parseInt(
            normalizedExpectedUUID.substring(byteIndex * 2, byteIndex * 2 + 2),
            16,
        );
        if (uuidBytes[byteIndex] !== expectedByteValue) {
            console.warn("[Auth] UUID validation failed: mismatch at byte", {
                byteIndex,
                expected: expectedByteValue,
                actual: uuidBytes[byteIndex],
            });
            return false;
        }
    }

    console.info("[Auth] UUID validation successful");
    return true;
}

/**
 * Processes early data from WebSocket handshake header
 * @param {string} headerValue - The sec-websocket-protocol header value
 * @returns {ArrayBuffer|null} Decoded early data or null if invalid
 */
export function processEarlyData(headerValue) {
    console.debug("[Auth] Processing early data from handshake");

    if (!headerValue) {
        console.debug("[Auth] No early data header present");
        return null;
    }

    try {
        const decoded = Uint8Array.from(
            atob(headerValue.replace(/-/g, "+").replace(/_/g, "/")),
            (c) => c.charCodeAt(0),
        ).buffer;
        console.info("[Auth] Early data decoded successfully", {
            byteLength: decoded.byteLength,
        });
        return decoded;
    } catch (error) {
        console.warn("[Auth] Error processing early data:", error);
        return null;
    }
}
