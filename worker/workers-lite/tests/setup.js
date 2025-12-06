import { vi } from "vitest";

// Mock cloudflare:sockets module
vi.mock("cloudflare:sockets", () => ({
    connect: vi.fn(() => ({
        opened: Promise.resolve(),
        writable: {
            getWriter: vi.fn(() => ({
                write: vi.fn(),
                releaseLock: vi.fn(),
            })),
        },
        readable: {
            getReader: vi.fn(() => ({
                read: vi.fn(),
                releaseLock: vi.fn(),
            })),
        },
        close: vi.fn(),
    })),
}));

// Mock WebSocketPair global
global.WebSocketPair = class WebSocketPair {
    constructor() {
        const createMockWebSocket = () => ({
            accept: vi.fn(),
            send: vi.fn(),
            close: vi.fn(),
            readyState: 1,
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        });

        return {
            0: createMockWebSocket(),
            1: createMockWebSocket(),
        };
    }
};

// Mock Request.headers to support Map and Headers interface
if (typeof Request !== "undefined") {
    const OriginalRequest = Request;
    global.Request = class extends OriginalRequest {
        constructor(input, init) {
            super(input, init);
            if (init?.headers instanceof Map) {
                const headers = new Headers();
                for (const [key, value] of init.headers) {
                    headers.set(key, value);
                }
                Object.defineProperty(this, "headers", { value: headers });
            }
        }
    };
}
