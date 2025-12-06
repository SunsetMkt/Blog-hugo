# Workers LITE - API Documentation

A lightweight LITE proxy implementation for Cloudflare Workers that provides WebSocket-based proxy functionality with support for multiple connection modes including direct connections, SOCKS5 proxies, and proxy IP forwarding.

## Table of Contents

- [Installation & Setup](#installation--setup)
- [Basic Usage](#basic-usage)
- [Connection Modes](#connection-modes)
- [Exported Modules](#exported-modules)
- [LITE Protocol Specification](#lite-protocol-specification)
- [Advanced Usage Examples](#advanced-usage-examples)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Project Structure](#project-structure)
- [References](#references)

## Installation & Setup

1. Install dependencies:

    ```bash
    npm install
    ```

2. Configure UUID for authentication:
    - Option A: Set in wrangler.toml [vars] section
    - Option B: Use Cloudflare Dashboard to set environment variable
    - Option C: Create .dev.vars file for local development

3. Deploy to Cloudflare Workers:

    ```bash
    npm run deploy
    ```

4. Local development:
    ```bash
    npm run dev
    ```

## Basic Usage

### Example 1: Using the complete default export

```javascript
import workerLite from "./src/index.js";
export default workerLite;
```

### Example 2: Using only the WebSocket handler

```javascript
import { handleWebSocket } from "./src/index.js";

export default {
    async fetch(request, env) {
        if (request.headers.get("Upgrade")?.toLowerCase() === "websocket") {
            return await handleWebSocket(request, env.UUID || "default-uuid");
        }
        return new Response("Hello World!");
    },
};
```

### Example 3: Using individual modules for custom logic

```javascript
import {
    validateUUID,
    parseLiteHeader,
    parseSocks5Config,
    ConnectionMode,
    connectWithFallback,
} from "./src/index.js";

// Implement custom WebSocket handling with low-level access
// See example-usage.js for detailed examples
```

## Connection Modes

The worker supports multiple connection modes via URL parameters:

### 1. Direct Mode (default)

```
wss://your-worker.workers.dev/?mode=direct
```

- Connects directly to the target host

### 2. SOCKS5 Mode

```
wss://your-worker.workers.dev/?mode=s5&s5=user:pass@host:port
```

- Routes through a SOCKS5 proxy
- Format: user:pass@host:port or @host:port (no auth)

### 3. Proxy IP Mode

```
wss://your-worker.workers.dev/?mode=proxy&proxyip=host:port
```

- Forwards to a specific proxy IP

### 4. Auto Mode with Fallback

```
wss://your-worker.workers.dev/?mode=auto&direct&s5=user:pass@host:port
```

- Tries methods in order specified in URL parameters
- Falls back to next method if connection fails
- Examples:
    - `?mode=auto&direct&s5=...` (Direct first, then SOCKS5)
    - `?mode=auto&s5=...&proxyip=...` (SOCKS5 first, then Proxy)
    - `?mode=auto&direct&s5=...&proxyip=...` (Try all three in order)

## Exported Modules

### Authentication & Validation

#### validateUUID(data, expectedUUID)

Validates the UUID from incoming LITE protocol data

**Parameters:**

- `data` (ArrayBuffer) - Raw data containing UUID (min 24 bytes)
- `expectedUUID` (string) - Expected UUID (with or without dashes)

**Returns:** `boolean` - True if UUID matches

#### processEarlyData(headerValue)

Decodes early data from WebSocket sec-websocket-protocol header

**Parameters:**

- `headerValue` (string) - The header value to decode

**Returns:** `ArrayBuffer|null` - Decoded data or null

### SOCKS5 Support

#### parseSocks5Config(connectionString)

Parses SOCKS5 configuration string

**Parameters:**

- `connectionString` (string) - Format: "user:pass@host:port"

**Returns:** `Object|null` - Config object {user, pass, host, port}

#### connectViaSocks5(config, targetHost, targetPort)

Establishes SOCKS5 proxy connection

**Parameters:**

- `config` (Object) - SOCKS5 configuration
- `targetHost` (string) - Target hostname
- `targetPort` (number) - Target port

**Returns:** `Promise<Socket>` - Connected socket

### Connection Management

#### ConnectionMode

Enum of connection modes: `{ DIRECT, SOCKS5, PROXY, AUTO }`

#### getConnectionOrder(url)

Determines connection method priority from URL parameters

**Parameters:**

- `url` (URL) - Request URL with query parameters

**Returns:** `Array<string>` - Ordered array of methods to try

#### connectWithFallback(methods, host, port, socks5Config, proxyIP)

Attempts multiple connection methods with fallback

**Parameters:**

- `methods` (Array<string>) - Ordered array of methods
- `host` (string) - Target host
- `port` (number) - Target port
- `socks5Config` (Object|null) - SOCKS5 config (if using s5)
- `proxyIP` (string|null) - Proxy IP (if using proxy mode)

**Returns:** `Promise<Socket|null>` - Connected socket or null

### DNS Over HTTPS

#### createDNSHandler(ws, header)

Creates DNS query handler using DoH (Cloudflare 1.1.1.1)

**Parameters:**

- `ws` (WebSocket) - WebSocket connection
- `header` (Uint8Array) - Response header to prepend

**Returns:** `Object` - Handler with readable/writable streams

### LITE Protocol

#### parseLiteHeader(data)

Parses LITE protocol header from raw data

**Parameters:**

- `data` (ArrayBuffer) - Raw header data (min 24 bytes)

**Returns:** `Object|null` - Parsed header {command, port, address, ...}

#### LiteCommand

Command types: `{ TCP: 1, UDP: 2 }`

#### AddressType

Address types: `{ IPV4: 1, DOMAIN: 2, IPV6: 3 }`

### WebSocket Handler

#### handleWebSocket(request, expectedUUID)

Main handler for LITE WebSocket connections

**Parameters:**

- `request` (Request) - Incoming HTTP request
- `expectedUUID` (string) - UUID for authentication

**Returns:** `Promise<Response>` - WebSocket response (status 101)

### gRPC Transport

#### handleGrpcPost(request, expectedUUID)

Handles POST requests for gRPC transport

**Parameters:**

- `request` (Request) - Incoming HTTP POST request
- `expectedUUID` (string) - UUID for authentication

**Returns:** `Promise<Response|null>` - Response or null on error

## LITE Protocol Specification

The LITE protocol uses a binary format for communication:

### Header Structure

- Byte 0: Protocol version
- Bytes 1-16: UUID (16 bytes)
- Byte 17: Option length
- Byte 18+optLen: Command (1=TCP, 2=UDP)
- Bytes 19-20+optLen: Port (2 bytes, big-endian)
- Byte 21+optLen: Address type (1=IPv4, 2=Domain, 3=IPv6)
- Remaining bytes: Address data (varies by type)

### Supported Commands

- TCP (1): Standard TCP connection
- UDP (2): UDP packets (currently only DNS on port 53)

### Address Types

- IPv4 (1): 4-byte IPv4 address
- Domain (2): Length-prefixed domain name
- IPv6 (3): 16-byte IPv6 address

## Advanced Usage Examples

### Example: Multi-route worker with LITE on specific path

```javascript
import { handleWebSocket } from "./src/index.js";

export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        // LITE proxy on /proxy path
        if (url.pathname.startsWith("/proxy")) {
            if (request.headers.get("Upgrade")?.toLowerCase() === "websocket") {
                return await handleWebSocket(request, env.UUID);
            }
        }

        // Other routes
        if (url.pathname === "/api") {
            return new Response(JSON.stringify({ status: "ok" }));
        }

        return new Response("Welcome!");
    },
};
```

### Example: Custom authentication logic

```javascript
import { validateUUID, parseLiteHeader } from "./src/index.js";

export default {
    async fetch(request, env) {
        const [client, ws] = Object.values(new WebSocketPair());
        ws.accept();

        ws.addEventListener("message", async (event) => {
            // Validate UUID
            if (!validateUUID(event.data, env.UUID)) {
                ws.close(1008, "Invalid UUID");
                return;
            }

            // Parse header and implement custom logic
            const header = parseLiteHeader(event.data);
            console.log(`Connection to ${header.address}:${header.port}`);
            // ... your custom connection handling
        });

        return new Response(null, { status: 101, webSocket: client });
    },
};
```

### Example: Using gRPC Binding

To use the gRPC transport with bindings, you need to configure your worker with the gRPC service binding:

```javascript
import { handleGrpcPost } from "./src/index.js";

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        // Handle gRPC transport
        if (request.method === "POST" && url.searchParams.has("grpc")) {
            // Use gRPC service binding if available
            if (env.GRPC_SERVICE) {
                // Forward to gRPC service binding
                return env.GRPC_SERVICE.fetch(request);
            }

            // Otherwise use built-in handler
            return await handleGrpcPost(request, env.UUID);
        }

        // Handle WebSocket connections
        if (request.headers.get("Upgrade")?.toLowerCase() === "websocket") {
            return await handleWebSocket(request, env.UUID);
        }

        return new Response("Worker ready");
    },
};
```

In your `wrangler.toml`, configure the gRPC service binding:

```toml
[[services]]
binding = "GRPC_SERVICE"
service = "your-grpc-service-name"
```

This allows your worker to communicate with other Cloudflare Workers services using gRPC over HTTP/2.

## Environment Variables

### Required

- **UUID**: Authentication UUID for LITE protocol
    - Format: Standard UUID (with or without dashes)
    - Example: "b02e0d4b-caaf-4ce3-bf03-d116265bbb0a"

### Setting UUID

1. **Production (wrangler secret - recommended):**

    ```bash
    npx wrangler secret put UUID
    ```

2. **Development (.dev.vars file):**
   Create .dev.vars with:

    ```
    UUID=your-uuid-here
    ```

3. **wrangler.toml (not recommended for sensitive data):**
    ```toml
    [vars]
    UUID = "your-uuid-here"
    ```

## Testing

Run tests:

```bash
npm test                  # Run all tests
npm run test:watch        # Watch mode
npm run test:coverage     # With coverage
```

The project includes comprehensive test coverage:

- auth.test.js (15 tests) - UUID validation
- protocol.test.js (13 tests) - LITE protocol parsing
- socks5.test.js (17 tests) - SOCKS5 configuration
- connection.test.js (26 tests) - Connection modes
- dns.test.js (14 tests) - DNS over HTTPS
- integration.test.js (5 tests) - Module exports

## Troubleshooting

### Common Issues

1. **UUID validation fails:**
    - Ensure UUID is properly set in environment
    - Check UUID format (standard UUID with/without dashes)
    - Verify client is sending correct UUID in LITE header

2. **SOCKS5 connection fails:**
    - Verify SOCKS5 server is accessible from Cloudflare network
    - Check credentials format: user:pass@host:port
    - Ensure SOCKS5 server supports username/password auth

3. **WebSocket connection drops:**
    - Check target host connectivity
    - Review Cloudflare Workers logs (npx wrangler tail)
    - Verify connection mode parameters are correct

4. **DNS queries fail (UDP mode):**
    - Only port 53 (DNS) is supported for UDP
    - Ensure Cloudflare DoH (1.1.1.1) is accessible

### Debug Mode

Use wrangler tail to view live logs:

```bash
npx wrangler tail
```

## Project Structure

```
src/
  ├── index.js        - Main entry point and exports (this file)
  ├── handler.js      - WebSocket connection handler
  ├── auth.js         - UUID validation and authentication
  ├── socks5.js       - SOCKS5 protocol implementation
  ├── connection.js   - Connection management (direct/SOCKS5/proxy)
  ├── dns.js          - DNS over HTTPS handler
  └── protocol.js     - LITE protocol parser
```

## References

- [DEVELOPMENT.md](./DEVELOPMENT.md): Detailed development guide
- [example-usage.js](./example-usage.js): Comprehensive usage examples
- [tests/](./tests/): Test suite with 93 tests
- [README.md](./README.md): Quick start guide

## License

MIT License - See LICENSE file for details
