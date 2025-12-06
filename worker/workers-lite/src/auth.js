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
    if (data.byteLength < 24) return false;

    const uuidBytes = new Uint8Array(data.slice(1, 17));
    const normalizedExpectedUUID = expectedUUID.replace(/-/g, "");

    // Compare each byte of the UUID
    for (let byteIndex = 0; byteIndex < 16; byteIndex++) {
        const expectedByteValue = parseInt(
            normalizedExpectedUUID.substring(byteIndex * 2, byteIndex * 2 + 2),
            16,
        );
        if (uuidBytes[byteIndex] !== expectedByteValue) {
            return false;
        }
    }

    return true;
}

/**
 * Processes early data from WebSocket handshake header
 * @param {string} headerValue - The sec-websocket-protocol header value
 * @returns {ArrayBuffer|null} Decoded early data or null if invalid
 */
export function processEarlyData(headerValue) {
    if (!headerValue) return null;

    try {
        return Uint8Array.from(
            atob(headerValue.replace(/-/g, "+").replace(/_/g, "/")),
            (c) => c.charCodeAt(0),
        ).buffer;
    } catch (error) {
        console.debug("Error processing early data:", error);
        return null;
    }
}
