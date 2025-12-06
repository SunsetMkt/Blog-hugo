import { describe, it, expect } from "vitest";
import { validateUUID, processEarlyData } from "../src/auth.js";

describe("auth.js", () => {
    describe("validateUUID", () => {
        const validUUID = "b02e0d4b-caaf-4ce3-bf03-d116265bbb0a";
        const validUUIDWithoutDashes = "b02e0d4bcaaf4ce3bf03d116265bbb0a";

        it("should validate correct UUID with dashes", () => {
            // Create a buffer with version byte (0x00), UUID bytes, and some padding
            const buffer = new ArrayBuffer(24);
            const view = new Uint8Array(buffer);
            view[0] = 0x00; // version byte

            // Parse UUID and write bytes
            const normalizedUUID = validUUID.replace(/-/g, "");
            for (let i = 0; i < 16; i++) {
                view[i + 1] = parseInt(
                    normalizedUUID.substring(i * 2, i * 2 + 2),
                    16,
                );
            }

            expect(validateUUID(buffer, validUUID)).toBe(true);
        });

        it("should validate correct UUID without dashes", () => {
            const buffer = new ArrayBuffer(24);
            const view = new Uint8Array(buffer);
            view[0] = 0x00;

            const normalizedUUID = validUUIDWithoutDashes;
            for (let i = 0; i < 16; i++) {
                view[i + 1] = parseInt(
                    normalizedUUID.substring(i * 2, i * 2 + 2),
                    16,
                );
            }

            expect(validateUUID(buffer, validUUIDWithoutDashes)).toBe(true);
        });

        it("should accept UUID with or without dashes in expected UUID", () => {
            const buffer = new ArrayBuffer(24);
            const view = new Uint8Array(buffer);
            view[0] = 0x00;

            const normalizedUUID = validUUID.replace(/-/g, "");
            for (let i = 0; i < 16; i++) {
                view[i + 1] = parseInt(
                    normalizedUUID.substring(i * 2, i * 2 + 2),
                    16,
                );
            }

            // Should work with both formats
            expect(validateUUID(buffer, validUUID)).toBe(true);
            expect(validateUUID(buffer, validUUIDWithoutDashes)).toBe(true);
        });

        it("should reject incorrect UUID", () => {
            const buffer = new ArrayBuffer(24);
            const view = new Uint8Array(buffer);
            view[0] = 0x00;

            // Different UUID
            const wrongUUID = "00000000-0000-0000-0000-000000000000";
            const normalizedUUID = wrongUUID.replace(/-/g, "");
            for (let i = 0; i < 16; i++) {
                view[i + 1] = parseInt(
                    normalizedUUID.substring(i * 2, i * 2 + 2),
                    16,
                );
            }

            expect(validateUUID(buffer, validUUID)).toBe(false);
        });

        it("should reject buffer that is too short", () => {
            const buffer = new ArrayBuffer(16); // Less than required 24 bytes
            expect(validateUUID(buffer, validUUID)).toBe(false);
        });

        it("should reject buffer with exact minimum size but wrong UUID", () => {
            const buffer = new ArrayBuffer(24);
            const view = new Uint8Array(buffer);
            view.fill(0); // Fill with zeros (wrong UUID)

            expect(validateUUID(buffer, validUUID)).toBe(false);
        });

        it("should validate UUID with different byte values", () => {
            const testUUID = "12345678-90ab-cdef-1234-567890abcdef";
            const buffer = new ArrayBuffer(24);
            const view = new Uint8Array(buffer);
            view[0] = 0x00;

            const normalizedUUID = testUUID.replace(/-/g, "");
            for (let i = 0; i < 16; i++) {
                view[i + 1] = parseInt(
                    normalizedUUID.substring(i * 2, i * 2 + 2),
                    16,
                );
            }

            expect(validateUUID(buffer, testUUID)).toBe(true);
        });
    });

    describe("processEarlyData", () => {
        it("should decode valid base64url encoded data", () => {
            // Base64url encoding of "Hello World"
            const input = "SGVsbG8gV29ybGQ";
            const result = processEarlyData(input);

            expect(result).not.toBeNull();
            expect(result).toBeInstanceOf(ArrayBuffer);

            const decoded = new TextDecoder().decode(result);
            expect(decoded).toBe("Hello World");
        });

        it("should handle base64url with URL-safe characters", () => {
            // Test with - and _ characters (base64url safe chars)
            const input = "VGVzdC1fZGF0YQ"; // "Test-_data" in base64url
            const result = processEarlyData(input);

            expect(result).not.toBeNull();
            expect(result).toBeInstanceOf(ArrayBuffer);
        });

        it("should convert base64url to base64 (- to +, _ to /)", () => {
            // Base64url with - and _ should be converted to + and /
            const base64url = "YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXo-_w";
            const result = processEarlyData(base64url);

            expect(result).not.toBeNull();
            expect(result).toBeInstanceOf(ArrayBuffer);
        });

        it("should return null for null input", () => {
            const result = processEarlyData(null);
            expect(result).toBeNull();
        });

        it("should return null for undefined input", () => {
            const result = processEarlyData(undefined);
            expect(result).toBeNull();
        });

        it("should return null for empty string", () => {
            const result = processEarlyData("");
            expect(result).toBeNull();
        });

        it("should return null for invalid base64 data", () => {
            const result = processEarlyData("invalid!@#$%");
            expect(result).toBeNull();
        });

        it("should handle binary data encoding", () => {
            // Create some binary data and encode it
            const binaryData = new Uint8Array([0, 1, 2, 3, 255, 254, 253]);
            const base64 = btoa(String.fromCharCode(...binaryData));
            const base64url = base64.replace(/\+/g, "-").replace(/\//g, "_");

            const result = processEarlyData(base64url);
            expect(result).not.toBeNull();

            const decoded = new Uint8Array(result);
            expect(decoded).toEqual(binaryData);
        });
    });
});
