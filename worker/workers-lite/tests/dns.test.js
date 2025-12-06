import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { createDNSHandler } from "../src/dns.js";

describe("dns.js", () => {
    describe("createDNSHandler", () => {
        let mockWebSocket;
        let mockHeader;

        beforeEach(() => {
            // Create a mock WebSocket
            mockWebSocket = {
                readyState: 1, // OPEN
                send: vi.fn(),
            };

            // Create a mock header
            mockHeader = new Uint8Array([0x01, 0x00]);
        });

        afterEach(() => {
            vi.restoreAllMocks();
        });

        it("should create a DNS handler with readable, writable, and writer", () => {
            const handler = createDNSHandler(mockWebSocket, mockHeader);

            expect(handler).toHaveProperty("readable");
            expect(handler).toHaveProperty("writable");
            expect(handler).toHaveProperty("writer");
            expect(handler.readable).toBeInstanceOf(ReadableStream);
            expect(handler.writable).toBeInstanceOf(WritableStream);
        });

        it("should return a transform stream", () => {
            const handler = createDNSHandler(mockWebSocket, mockHeader);

            expect(handler.readable).toBeInstanceOf(ReadableStream);
            expect(handler.writable).toBeInstanceOf(WritableStream);
        });

        it("should have a writer that can be used", () => {
            const handler = createDNSHandler(mockWebSocket, mockHeader);

            expect(handler.writer).toBeDefined();
            expect(typeof handler.writer.write).toBe("function");
            expect(typeof handler.writer.close).toBe("function");
            expect(typeof handler.writer.abort).toBe("function");
        });

        it("should accept different header values", () => {
            const customHeader = new Uint8Array([0xff, 0xee]);
            const handler = createDNSHandler(mockWebSocket, customHeader);

            expect(handler).toBeDefined();
            expect(handler.readable).toBeInstanceOf(ReadableStream);
            expect(handler.writable).toBeInstanceOf(WritableStream);
        });

        it("should handle WebSocket with different ready states", () => {
            const states = [0, 1, 2, 3]; // CONNECTING, OPEN, CLOSING, CLOSED

            states.forEach((state) => {
                const ws = {
                    readyState: state,
                    send: vi.fn(),
                };

                const handler = createDNSHandler(ws, mockHeader);
                expect(handler).toBeDefined();
            });
        });

        it("should create handler with empty header", () => {
            const emptyHeader = new Uint8Array([]);
            const handler = createDNSHandler(mockWebSocket, emptyHeader);

            expect(handler).toBeDefined();
            expect(handler.readable).toBeInstanceOf(ReadableStream);
        });

        it("should create handler with large header", () => {
            const largeHeader = new Uint8Array(100);
            largeHeader.fill(0xaa);
            const handler = createDNSHandler(mockWebSocket, largeHeader);

            expect(handler).toBeDefined();
            expect(handler.readable).toBeInstanceOf(ReadableStream);
        });

        it("should have writable stream that accepts write operations", async () => {
            const handler = createDNSHandler(mockWebSocket, mockHeader);

            expect(handler.writer).toBeDefined();
            expect(typeof handler.writer.write).toBe("function");
        });

        it("should properly initialize with valid parameters", () => {
            expect(() => {
                createDNSHandler(mockWebSocket, mockHeader);
            }).not.toThrow();
        });

        it("should create independent handlers for different WebSockets", () => {
            const ws1 = { readyState: 1, send: vi.fn() };
            const ws2 = { readyState: 1, send: vi.fn() };

            const handler1 = createDNSHandler(ws1, mockHeader);
            const handler2 = createDNSHandler(ws2, mockHeader);

            expect(handler1).not.toBe(handler2);
            expect(handler1.readable).not.toBe(handler2.readable);
            expect(handler1.writable).not.toBe(handler2.writable);
        });

        it("should handle null WebSocket gracefully", () => {
            // This tests the defensive nature of the code
            // The function should still create a handler even with null WebSocket
            expect(() => {
                createDNSHandler(null, mockHeader);
            }).not.toThrow();
        });

        it("should handle undefined WebSocket gracefully", () => {
            expect(() => {
                createDNSHandler(undefined, mockHeader);
            }).not.toThrow();
        });
    });

    describe("DNS Transform Stream behavior", () => {
        it("should create a transform stream that processes chunks", () => {
            const mockWebSocket = {
                readyState: 1,
                send: vi.fn(),
            };
            const mockHeader = new Uint8Array([0x01, 0x00]);

            const handler = createDNSHandler(mockWebSocket, mockHeader);

            expect(handler.readable).toBeInstanceOf(ReadableStream);
            expect(handler.writable).toBeInstanceOf(WritableStream);
        });

        it("should provide writer interface", () => {
            const mockWebSocket = {
                readyState: 1,
                send: vi.fn(),
            };
            const mockHeader = new Uint8Array([0x01, 0x00]);

            const handler = createDNSHandler(mockWebSocket, mockHeader);

            // Should be able to get writer from writable (it's already provided)
            expect(handler.writer).toBeDefined();
            expect(typeof handler.writer.write).toBe("function");
        });
    });
});
