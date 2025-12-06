import { describe, it, expect } from "vitest";
import { parseLiteHeader, LiteCommand, AddressType } from "../src/protocol.js";

describe("protocol.js", () => {
    describe("LiteCommand constants", () => {
        it("should have correct command values", () => {
            expect(LiteCommand.TCP).toBe(1);
            expect(LiteCommand.UDP).toBe(2);
        });
    });

    describe("AddressType constants", () => {
        it("should have correct address type values", () => {
            expect(AddressType.IPV4).toBe(1);
            expect(AddressType.DOMAIN).toBe(2);
            expect(AddressType.IPV6).toBe(3);
        });
    });

    describe("parseLiteHeader", () => {
        it("should return null for buffer that is too short", () => {
            const buffer = new ArrayBuffer(20); // Less than required 24 bytes
            const result = parseLiteHeader(buffer);
            expect(result).toBeNull();
        });

        it("should parse TCP command with IPv4 address", () => {
            const buffer = new ArrayBuffer(40);
            const view = new DataView(buffer);

            view.setUint8(0, 0x01); // Version
            view.setUint8(17, 0); // optLength
            view.setUint8(18, LiteCommand.TCP); // command
            view.setUint16(19, 443); // port
            view.setUint8(21, AddressType.IPV4); // address type

            // IPv4: 192.168.1.1
            view.setUint8(22, 192);
            view.setUint8(23, 168);
            view.setUint8(24, 1);
            view.setUint8(25, 1);

            const result = parseLiteHeader(buffer);

            expect(result).not.toBeNull();
            expect(result.command).toBe(LiteCommand.TCP);
            expect(result.port).toBe(443);
            expect(result.address).toBe("192.168.1.1");
            expect(result.headerLength).toBe(26);
            expect(result.responseHeader).toEqual(new Uint8Array([0x01, 0]));
        });

        it("should parse UDP command with IPv4 address", () => {
            const buffer = new ArrayBuffer(40);
            const view = new DataView(buffer);

            view.setUint8(0, 0x02); // Version
            view.setUint8(17, 0); // optLength
            view.setUint8(18, LiteCommand.UDP); // command
            view.setUint16(19, 53); // port (DNS)
            view.setUint8(21, AddressType.IPV4); // address type

            // IPv4: 8.8.8.8
            view.setUint8(22, 8);
            view.setUint8(23, 8);
            view.setUint8(24, 8);
            view.setUint8(25, 8);

            const result = parseLiteHeader(buffer);

            expect(result).not.toBeNull();
            expect(result.command).toBe(LiteCommand.UDP);
            expect(result.port).toBe(53);
            expect(result.address).toBe("8.8.8.8");
        });

        it("should parse TCP command with domain name", () => {
            const buffer = new ArrayBuffer(50);
            const view = new DataView(buffer);

            view.setUint8(0, 0x01); // Version
            view.setUint8(17, 0); // optLength
            view.setUint8(18, LiteCommand.TCP); // command
            view.setUint16(19, 80); // port
            view.setUint8(21, AddressType.DOMAIN); // address type

            // Domain: "example.com" (11 characters)
            const domain = "example.com";
            view.setUint8(22, domain.length);
            const encoder = new TextEncoder();
            const domainBytes = encoder.encode(domain);
            new Uint8Array(buffer).set(domainBytes, 23);

            const result = parseLiteHeader(buffer);

            expect(result).not.toBeNull();
            expect(result.command).toBe(LiteCommand.TCP);
            expect(result.port).toBe(80);
            expect(result.address).toBe("example.com");
            expect(result.headerLength).toBe(23 + domain.length);
        });

        it("should parse TCP command with IPv6 address", () => {
            const buffer = new ArrayBuffer(60);
            const view = new DataView(buffer);

            view.setUint8(0, 0x01); // Version
            view.setUint8(17, 0); // optLength
            view.setUint8(18, LiteCommand.TCP); // command
            view.setUint16(19, 443); // port
            view.setUint8(21, AddressType.IPV6); // address type

            // IPv6: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
            view.setUint16(22, 0x2001);
            view.setUint16(24, 0x0db8);
            view.setUint16(26, 0x85a3);
            view.setUint16(28, 0x0000);
            view.setUint16(30, 0x0000);
            view.setUint16(32, 0x8a2e);
            view.setUint16(34, 0x0370);
            view.setUint16(36, 0x7334);

            const result = parseLiteHeader(buffer);

            expect(result).not.toBeNull();
            expect(result.command).toBe(LiteCommand.TCP);
            expect(result.port).toBe(443);
            expect(result.address).toBe("2001:db8:85a3:0:0:8a2e:370:7334");
            expect(result.headerLength).toBe(38);
        });

        it("should parse header with non-zero optLength", () => {
            const buffer = new ArrayBuffer(50);
            const view = new DataView(buffer);

            view.setUint8(0, 0x01); // Version
            view.setUint8(17, 5); // optLength = 5
            // Add 5 bytes of options
            view.setUint8(18, 0x00);
            view.setUint8(19, 0x00);
            view.setUint8(20, 0x00);
            view.setUint8(21, 0x00);
            view.setUint8(22, 0x00);
            view.setUint8(23, LiteCommand.TCP); // command (offset by 5)
            view.setUint16(24, 8080); // port
            view.setUint8(26, AddressType.IPV4); // address type

            // IPv4: 127.0.0.1
            view.setUint8(27, 127);
            view.setUint8(28, 0);
            view.setUint8(29, 0);
            view.setUint8(30, 1);

            const result = parseLiteHeader(buffer);

            expect(result).not.toBeNull();
            expect(result.command).toBe(LiteCommand.TCP);
            expect(result.port).toBe(8080);
            expect(result.address).toBe("127.0.0.1");
        });

        it("should return null for invalid command", () => {
            const buffer = new ArrayBuffer(40);
            const view = new DataView(buffer);

            view.setUint8(0, 0x01);
            view.setUint8(17, 0);
            view.setUint8(18, 99); // Invalid command
            view.setUint16(19, 443);
            view.setUint8(21, AddressType.IPV4);

            const result = parseLiteHeader(buffer);
            expect(result).toBeNull();
        });

        it("should return null for invalid address type", () => {
            const buffer = new ArrayBuffer(40);
            const view = new DataView(buffer);

            view.setUint8(0, 0x01);
            view.setUint8(17, 0);
            view.setUint8(18, LiteCommand.TCP);
            view.setUint16(19, 443);
            view.setUint8(21, 99); // Invalid address type

            const result = parseLiteHeader(buffer);
            expect(result).toBeNull();
        });

        it("should handle different port numbers", () => {
            const testPorts = [80, 443, 8080, 3000, 65535];

            testPorts.forEach((port) => {
                const buffer = new ArrayBuffer(40);
                const view = new DataView(buffer);

                view.setUint8(0, 0x01);
                view.setUint8(17, 0);
                view.setUint8(18, LiteCommand.TCP);
                view.setUint16(19, port);
                view.setUint8(21, AddressType.IPV4);
                view.setUint8(22, 192);
                view.setUint8(23, 168);
                view.setUint8(24, 1);
                view.setUint8(25, 1);

                const result = parseLiteHeader(buffer);
                expect(result).not.toBeNull();
                expect(result.port).toBe(port);
            });
        });

        it("should handle long domain names", () => {
            const buffer = new ArrayBuffer(100);
            const view = new DataView(buffer);

            view.setUint8(0, 0x01);
            view.setUint8(17, 0);
            view.setUint8(18, LiteCommand.TCP);
            view.setUint16(19, 443);
            view.setUint8(21, AddressType.DOMAIN);

            // Long domain name
            const domain = "very.long.subdomain.example.com";
            view.setUint8(22, domain.length);
            const encoder = new TextEncoder();
            const domainBytes = encoder.encode(domain);
            new Uint8Array(buffer).set(domainBytes, 23);

            const result = parseLiteHeader(buffer);

            expect(result).not.toBeNull();
            expect(result.address).toBe(domain);
            expect(result.headerLength).toBe(23 + domain.length);
        });

        it("should parse IPv6 loopback address", () => {
            const buffer = new ArrayBuffer(60);
            const view = new DataView(buffer);

            view.setUint8(0, 0x01);
            view.setUint8(17, 0);
            view.setUint8(18, LiteCommand.TCP);
            view.setUint16(19, 443);
            view.setUint8(21, AddressType.IPV6);

            // IPv6: ::1 (loopback)
            view.setUint16(22, 0);
            view.setUint16(24, 0);
            view.setUint16(26, 0);
            view.setUint16(28, 0);
            view.setUint16(30, 0);
            view.setUint16(32, 0);
            view.setUint16(34, 0);
            view.setUint16(36, 1);

            const result = parseLiteHeader(buffer);

            expect(result).not.toBeNull();
            expect(result.address).toBe("0:0:0:0:0:0:0:1");
        });
    });
});
