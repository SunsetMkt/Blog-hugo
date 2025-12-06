# Development Guide

## 项目结构 (Project Structure)

```
workers-lite/
├── src/
│   ├── index.js          # Main entry point and exports
│   ├── handler.js        # WebSocket connection handler (LITE over WebSocket)
│   ├── grpc-handler.js   # HTTP POST connection handler (LITE over gRPC)
│   ├── protocol.js       # LITE protocol parser (core, shared by both transports)
│   ├── grpc.js           # Stream adapter for gRPC transport (reuses protocol.js)
│   ├── auth.js           # UUID validation and authentication
│   ├── socks5.js         # SOCKS5 protocol implementation
│   ├── connection.js     # Connection management (direct/SOCKS5/proxy) - shared
│   └── dns.js            # DNS over HTTPS handler - shared
├── wrangler.toml         # Wrangler configuration
├── package.json          # Project dependencies
└── example-usage.js      # Usage examples for importing modules
```

## 模块说明 (Module Documentation)

### auth.js - Authentication Module

**Functions:**

- `validateUUID(data, expectedUUID)`: Validates incoming LITE UUID
- `processEarlyData(headerValue)`: Decodes early data from WebSocket handshake

### socks5.js - SOCKS5 Protocol Module

**Functions:**

- `parseSocks5Config(connectionString)`: Parses SOCKS5 connection string
- `connectViaSocks5(config, targetHost, targetPort)`: Establishes SOCKS5 connection

**Configuration Format:**

- With auth: `user:pass@host:port`
- Without auth: `@host:port`

### connection.js - Connection Management Module

**Functions:**

- `getConnectionOrder(url)`: Determines connection method priority from URL
- `connectWithMethod(method, host, port, socks5Config, proxyIP)`: Connects using specified method
- `connectWithFallback(methods, host, port, socks5Config, proxyIP)`: Tries multiple methods with fallback

**Connection Modes:**

- `direct`: Direct connection to target
- `s5`: SOCKS5 proxy connection
- `proxy`: Proxy IP connection
- `auto`: Automatic fallback between methods

### dns.js - DNS over HTTPS Module

**Functions:**

- `createDNSHandler(ws, header)`: Creates a DNS query handler using DoH

### protocol.js - LITE Protocol Module

**Functions:**

- `parseLiteHeader(data)`: Parses LITE protocol header

**Constants:**

- `LiteCommand`: TCP (1), UDP (2)
- `AddressType`: IPV4 (1), DOMAIN (2), IPV6 (3)

### handler.js - WebSocket Handler Module

**Functions:**

- `handleWebSocket(request, uuid)`: Main WebSocket connection handler (LITE over WebSocket)

### grpc-handler.js - gRPC Transport Handler Module

**Functions:**

- `handleGrpcPost(request, uuid)`: Handles POST requests for gRPC transport

**Usage:**

The gRPC transport is activated only when the `?grpc` query parameter is present in the request URL. See API.md for examples of using gRPC bindings with this handler.

### grpc.js - Stream Adapter Module

**Functions:**

- `parseLiteHeaderStream(bodyStream, expectedUUID)`: Parses LITE protocol header from HTTP POST stream

**Implementation:**

This module reuses the existing LITE protocol parser from `protocol.js` and adapts it to work with ReadableStream (HTTP POST body) instead of ArrayBuffer (WebSocket messages).

**Constants:**

- `AddressType`: Re-exported from `protocol.js` - IPV4 (1), DOMAIN (2), IPV6 (3)

## 开发工作流 (Development Workflow)

### 本地开发 (Local Development)

1. Install dependencies:

```bash
npm install
```

2. Create `.dev.vars` file for local environment variables:

```
UUID=your-uuid-here
```

3. Start local development server:

```bash
npm run dev
```

4. Test WebSocket connection:

```bash
# Use your LITE client to connect to http://localhost:8787
```

### 部署 (Deployment)

1. Configure UUID in Cloudflare Dashboard or via wrangler:

```bash
# Set secret (recommended for production)
npx wrangler secret put UUID

# Or set in wrangler.toml [vars] section (not recommended for sensitive data)
```

2. Deploy to Cloudflare Workers:

```bash
npm run deploy
```

### 代码检查 (Code Validation)

Dry-run deployment to check for errors:

```bash
npx wrangler deploy --dry-run
```

### 测试 (Testing)

The project includes a comprehensive test suite with 90 tests covering all modules.

Run all tests:

```bash
npm test
```

Run tests in watch mode (for development):

```bash
npm run test:watch
```

Run tests with coverage report:

```bash
npm run test:coverage
```

Run specific test file:

```bash
npm test -- tests/auth.test.js
```

#### Test Coverage

- **auth.test.js** (15 tests) - UUID validation and early data processing
- **protocol.test.js** (13 tests) - LITE protocol header parsing (core, shared)
- **grpc.test.js** (3 tests) - gRPC transport module integration
- **socks5.test.js** (17 tests) - SOCKS5 configuration parsing
- **connection.test.js** (26 tests) - Connection mode handling
- **dns.test.js** (14 tests) - DNS over HTTPS handler
- **integration.test.js** (5 tests) - Module exports validation

See [tests/README.md](../tests/README.md) for more details.

## 作为模块使用 (Using as a Module)

### 方式 1: 直接导入完整处理器 (Import Complete Handler)

```javascript
import { handleWebSocket } from "./src/index.js";

export default {
    async fetch(request, env) {
        if (request.headers.get("Upgrade")?.toLowerCase() === "websocket") {
            return await handleWebSocket(request, env.UUID);
        }
        return new Response("Hello");
    },
};
```

### 方式 2: 导入特定模块 (Import Specific Modules)

```javascript
import {
    validateUUID,
    parseLiteHeader,
    parseSocks5Config,
} from "./src/index.js";

// Use individual functions in your custom logic
```

### 方式 3: 扩展现有功能 (Extend Existing Functionality)

See `example-usage.js` for detailed examples.

## 配置选项 (Configuration Options)

### URL Parameters

- `mode`: Connection mode (`direct`, `s5`, `proxy`, `auto`)
- `s5`: SOCKS5 configuration string
- `proxyip`: Proxy IP configuration
- `direct`: Flag for direct connection in auto mode

### Environment Variables

- `UUID`: Authentication UUID (required)

## 测试连接模式 (Testing Connection Modes)

### 直连模式 (Direct Mode)

```
wss://your-worker.workers.dev/?mode=direct
```

### SOCKS5 模式 (SOCKS5 Mode)

```
wss://your-worker.workers.dev/?mode=s5&s5=user:pass@socks5-host:1080
```

### 自动回退模式 (Auto Fallback Mode)

```
wss://your-worker.workers.dev/?mode=auto&direct&s5=user:pass@host:port
```

## 故障排除 (Troubleshooting)

### Common Issues

1. **UUID validation fails**: Ensure UUID is properly configured in environment
2. **SOCKS5 connection fails**: Check SOCKS5 server credentials and connectivity
3. **Build errors**: Run `npm install` to ensure all dependencies are installed

### Debug Mode

Enable verbose logging by checking Wrangler tail logs:

```bash
npx wrangler tail
```

## 贡献 (Contributing)

1. Fork the repository
2. Create a feature branch
3. Make your changes following the modular structure
4. Run tests: `npm test`
5. Test thoroughly with `npm run dev`
6. Ensure all tests pass before submitting
7. Submit a pull request

## 许可证 (License)

MIT
