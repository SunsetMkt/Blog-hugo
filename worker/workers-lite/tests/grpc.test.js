import { describe, it, expect } from "vitest";
import { AddressType } from "../src/grpc.js";

describe("grpc.js - LITE protocol parsing for gRPC transport", () => {
    describe("AddressType constants", () => {
        it("should have correct address type values (reused from protocol.js)", () => {
            expect(AddressType.IPV4).toBe(1);
            expect(AddressType.DOMAIN).toBe(2);
            expect(AddressType.IPV6).toBe(3);
        });
    });

    describe("Module integration", () => {
        it("should reuse LITE protocol definitions", () => {
            // This module imports and re-exports AddressType from protocol.js
            // This test verifies the re-export works correctly
            expect(AddressType).toBeDefined();
            expect(typeof AddressType.IPV4).toBe("number");
            expect(typeof AddressType.DOMAIN).toBe("number");
            expect(typeof AddressType.IPV6).toBe("number");
        });
    });

    describe("parseLiteHeaderStream", () => {
        it("should be exported and available for use", async () => {
            const { parseLiteHeaderStream } = await import("../src/grpc.js");
            expect(parseLiteHeaderStream).toBeDefined();
            expect(typeof parseLiteHeaderStream).toBe("function");
        });
    });
});
