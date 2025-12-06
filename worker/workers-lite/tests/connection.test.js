import { describe, it, expect } from "vitest";
import { getConnectionOrder, ConnectionMode } from "../src/connection.js";

describe("connection.js", () => {
    describe("ConnectionMode constants", () => {
        it("should have correct connection mode values", () => {
            expect(ConnectionMode.DIRECT).toBe("direct");
            expect(ConnectionMode.SOCKS5).toBe("s5");
            expect(ConnectionMode.PROXY).toBe("proxy");
            expect(ConnectionMode.AUTO).toBe("auto");
        });
    });

    describe("getConnectionOrder", () => {
        it("should return direct for direct mode", () => {
            const url = new URL("http://example.com/?mode=direct");
            const result = getConnectionOrder(url);

            expect(result).toEqual(["direct"]);
        });

        it("should return s5 for SOCKS5 mode", () => {
            const url = new URL("http://example.com/?mode=s5");
            const result = getConnectionOrder(url);

            expect(result).toEqual(["s5"]);
        });

        it("should return direct and proxy for proxy mode (legacy)", () => {
            const url = new URL("http://example.com/?mode=proxy");
            const result = getConnectionOrder(url);

            expect(result).toEqual(["direct", "proxy"]);
        });

        it("should return direct for auto mode with only direct parameter", () => {
            const url = new URL("http://example.com/?mode=auto&direct");
            const result = getConnectionOrder(url);

            expect(result).toEqual(["direct"]);
        });

        it("should return s5 for auto mode with only s5 parameter", () => {
            const url = new URL(
                "http://example.com/?mode=auto&s5=user:pass@host:port",
            );
            const result = getConnectionOrder(url);

            expect(result).toEqual(["s5"]);
        });

        it("should return proxy for auto mode with only proxyip parameter", () => {
            const url = new URL(
                "http://example.com/?mode=auto&proxyip=host:port",
            );
            const result = getConnectionOrder(url);

            expect(result).toEqual(["proxy"]);
        });

        it("should return [direct, s5] for auto mode with direct first", () => {
            const url = new URL(
                "http://example.com/?mode=auto&direct&s5=host:port",
            );
            const result = getConnectionOrder(url);

            expect(result).toEqual(["direct", "s5"]);
        });

        it("should return [s5, direct] for auto mode with s5 first", () => {
            const url = new URL(
                "http://example.com/?mode=auto&s5=host:port&direct",
            );
            const result = getConnectionOrder(url);

            expect(result).toEqual(["s5", "direct"]);
        });

        it("should return [direct, proxy] for auto mode with direct and proxyip", () => {
            const url = new URL(
                "http://example.com/?mode=auto&direct&proxyip=host:port",
            );
            const result = getConnectionOrder(url);

            expect(result).toEqual(["direct", "proxy"]);
        });

        it("should return [proxy, direct] for auto mode with proxyip first", () => {
            const url = new URL(
                "http://example.com/?mode=auto&proxyip=host:port&direct",
            );
            const result = getConnectionOrder(url);

            expect(result).toEqual(["proxy", "direct"]);
        });

        it("should return [s5, proxy] for auto mode with s5 and proxyip", () => {
            const url = new URL(
                "http://example.com/?mode=auto&s5=host:port&proxyip=host:port",
            );
            const result = getConnectionOrder(url);

            expect(result).toEqual(["s5", "proxy"]);
        });

        it("should return [proxy, s5] for auto mode with proxyip and s5", () => {
            const url = new URL(
                "http://example.com/?mode=auto&proxyip=host:port&s5=host:port",
            );
            const result = getConnectionOrder(url);

            expect(result).toEqual(["proxy", "s5"]);
        });

        it("should return [direct, s5, proxy] for auto mode with all three in order", () => {
            const url = new URL(
                "http://example.com/?mode=auto&direct&s5=host:port&proxyip=host:port",
            );
            const result = getConnectionOrder(url);

            expect(result).toEqual(["direct", "s5", "proxy"]);
        });

        it("should return [s5, proxy, direct] for auto mode with different order", () => {
            const url = new URL(
                "http://example.com/?mode=auto&s5=host:port&proxyip=host:port&direct",
            );
            const result = getConnectionOrder(url);

            expect(result).toEqual(["s5", "proxy", "direct"]);
        });

        it("should return [proxy, s5, direct] for auto mode with proxy first", () => {
            const url = new URL(
                "http://example.com/?mode=auto&proxyip=host:port&s5=host:port&direct",
            );
            const result = getConnectionOrder(url);

            expect(result).toEqual(["proxy", "s5", "direct"]);
        });

        it("should default to direct when no mode is specified", () => {
            const url = new URL("http://example.com/");
            const result = getConnectionOrder(url);

            expect(result).toEqual(["direct"]);
        });

        it("should default to direct when auto mode has no connection parameters", () => {
            const url = new URL("http://example.com/?mode=auto");
            const result = getConnectionOrder(url);

            expect(result).toEqual(["direct"]);
        });

        it("should ignore unrelated query parameters", () => {
            const url = new URL(
                "http://example.com/?mode=direct&foo=bar&baz=qux",
            );
            const result = getConnectionOrder(url);

            expect(result).toEqual(["direct"]);
        });

        it("should handle auto mode with unrelated parameters mixed in", () => {
            const url = new URL(
                "http://example.com/?mode=auto&foo=bar&direct&baz=qux&s5=host:port",
            );
            const result = getConnectionOrder(url);

            expect(result).toEqual(["direct", "s5"]);
        });

        it("should preserve parameter order in auto mode", () => {
            const url = new URL(
                "http://example.com/?mode=auto&proxyip=1&direct&s5=2&proxyip=3",
            );
            const result = getConnectionOrder(url);

            // Should include first occurrence of each
            expect(result).toEqual(["proxy", "direct", "s5", "proxy"]);
        });

        it("should handle URL with path", () => {
            const url = new URL("http://example.com/some/path?mode=direct");
            const result = getConnectionOrder(url);

            expect(result).toEqual(["direct"]);
        });

        it("should handle URL with fragment", () => {
            const url = new URL("http://example.com/?mode=s5#fragment");
            const result = getConnectionOrder(url);

            expect(result).toEqual(["s5"]);
        });

        it("should handle case sensitivity in mode parameter", () => {
            // Mode values should be case-sensitive
            const url = new URL("http://example.com/?mode=DIRECT");
            const result = getConnectionOrder(url);

            // Since DIRECT is not a valid mode (only lowercase modes are valid),
            // it should be treated as-is (unknown mode returns single-element array)
            expect(result).toEqual(["DIRECT"]);
        });

        it("should handle empty mode parameter", () => {
            const url = new URL("http://example.com/?mode=");
            const result = getConnectionOrder(url);

            expect(result).toEqual(["direct"]);
        });

        it("should handle multiple mode parameters (use first one)", () => {
            const url = new URL("http://example.com/?mode=direct&mode=s5");
            const result = getConnectionOrder(url);

            // URL searchParams.get returns the first value
            expect(result).toEqual(["direct"]);
        });
    });
});
