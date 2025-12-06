import { describe, it, expect } from "vitest";

describe("integration tests", () => {
    describe("module exports integration", () => {
        it("should export all required functions from index.js", async () => {
            const index = await import("../src/index.js");

            expect(index.validateUUID).toBeDefined();
            expect(index.processEarlyData).toBeDefined();
            expect(index.parseSocks5Config).toBeDefined();
            expect(index.connectViaSocks5).toBeDefined();
            expect(index.getConnectionOrder).toBeDefined();
            expect(index.connectWithFallback).toBeDefined();
            expect(index.ConnectionMode).toBeDefined();
            expect(index.createDNSHandler).toBeDefined();
            expect(index.parseLiteHeader).toBeDefined();
            expect(index.LiteCommand).toBeDefined();
            expect(index.AddressType).toBeDefined();
            expect(index.handleWebSocket).toBeDefined();
        });

        it("should export default worker", async () => {
            const index = await import("../src/index.js");

            expect(index.default).toBeDefined();
            expect(index.default.fetch).toBeDefined();
            expect(typeof index.default.fetch).toBe("function");
        });

        it("should have ConnectionMode constants", async () => {
            const { ConnectionMode } = await import("../src/index.js");

            expect(ConnectionMode.DIRECT).toBe("direct");
            expect(ConnectionMode.SOCKS5).toBe("s5");
            expect(ConnectionMode.PROXY).toBe("proxy");
            expect(ConnectionMode.AUTO).toBe("auto");
        });

        it("should have LiteCommand constants", async () => {
            const { LiteCommand } = await import("../src/index.js");

            expect(LiteCommand.TCP).toBe(1);
            expect(LiteCommand.UDP).toBe(2);
        });

        it("should have AddressType constants", async () => {
            const { AddressType } = await import("../src/index.js");

            expect(AddressType.IPV4).toBe(1);
            expect(AddressType.DOMAIN).toBe(2);
            expect(AddressType.IPV6).toBe(3);
        });
    });
});
