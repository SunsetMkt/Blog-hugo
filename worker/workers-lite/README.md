# Workers-Lite

## 📖 文档导航 (Documentation)

- **[API.md](./API.md)** - Complete API documentation and usage guide
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - 开发者指南
- **[example-usage.js](./example-usage.js)** - 使用示例

## 部署 (Deployment)

### 使用 Wrangler 部署 (Deploy with Wrangler)

1. 安装依赖 (Install dependencies):

```bash
npm install
```

2. 配置 UUID (Configure UUID):
    - 方法 1: 在 `wrangler.toml` 中设置 `[vars]` 部分
    - 方法 2: 使用 Cloudflare Dashboard 设置环境变量
    - 方法 3: 本地开发时创建 `.dev.vars` 文件

3. 部署到 Cloudflare Workers (Deploy to Cloudflare Workers):

```bash
npm run deploy
```

4. 本地开发 (Local development):

```bash
npm run dev
```

### 作为模块使用 (Use as Module)

本项目已模块化，可以被其他 Worker 引用：

```javascript
import {
    handleWebSocket,
    parseLiteHeader,
    ConnectionMode,
} from "./src/index.js";

// 在你的 Worker 中使用
export default {
    async fetch(request, env) {
        if (request.headers.get("Upgrade")?.toLowerCase() === "websocket") {
            return await handleWebSocket(request, env.UUID);
        }
        // ... 其他路由处理
    },
};
```

更多使用示例请查看 [example-usage.js](./example-usage.js) 和 [开发文档](./DEVELOPMENT.md)。

## 项目结构 (Project Structure)

```
workers-lite/
├── src/
│   ├── index.js          # 主入口和导出
│   ├── handler.js        # WebSocket 处理逻辑 (LITE over WebSocket)
│   ├── grpc-handler.js   # HTTP POST 处理逻辑 (LITE over gRPC)
│   ├── protocol.js       # LITE 协议解析 (核心，被两种传输共享)
│   ├── grpc.js           # gRPC 传输的流式读取适配器
│   ├── auth.js           # UUID 验证和认证 (LITE)
│   ├── socks5.js         # SOCKS5 协议实现
│   ├── connection.js     # 连接管理 (共享)
│   └── dns.js            # DNS over HTTPS 处理 (共享)
├── wrangler.toml         # Wrangler 配置
└── package.json          # 项目配置
```

## Transport Protocols (传输协议)

This worker supports two transport protocols using the LITE protocol:

### 1. WebSocket Transport - Default

- Uses WebSocket upgrade for persistent connections
- LITE protocol for data framing
- Access via: `wss://your-worker.workers.dev/`

### 2. gRPC Transport - For specific use cases

- Uses HTTP POST with streaming body
- Same LITE protocol, different transport layer
- **Only activated with `?grpc` query parameter**
- Access via: `https://your-worker.workers.dev/?grpc`
- See API.md for gRPC binding examples and configuration

Both transports support the same connection modes (direct, SOCKS5, proxy, auto) and URL parameters.

## Update history

- **20251205**：添加 gRPC 传输协议支持（需使用 `?grpc` 参数启用）。复用现有 LITE 协议代码
- **20251205**：项目模块化重构，支持 Wrangler 部署，添加详细注释，可作为模块被其他 Worker 引用
- **20250906**：废弃`仅ProxyIP`模式，无用
- **20250905**：代理模式配置：
    - `/?mode=direct`（仅直连）
    - `/?mode=s5&s5=user:pass@host:port`（仅SOCKS5）
    - ~~`/?mode=proxy&proxyip=host:port`（仅ProxyIP）~~
    - `/?mode=auto&direct&s5=user:pass@host:port`（直连优先，回退SOCKS5）
    - `/?mode=auto&direct&proxyip=host:port`（直连优先，回退ProxyIP）
    - `/?mode=auto&s5=user:pass@host:port&proxyip=host:port`（SOCKS5优先，回退ProxyIP）
    - `/?mode=auto&proxyip=host:port&s5=user:pass@host:port`（ProxyIP优先，回退SOCKS5）
    - `/?mode=auto&direct&s5=user:pass@host:port&proxyip=host:port`（三者都有：直连→SOCKS5→ProxyIP）
    - `/?mode=auto&s5=user:pass@host:port&proxyip=host:port&direct`（三者都有：SOCKS5→ProxyIP→直连）
    - `/?mode=auto&proxyip=host:port&s5=user:pass@host:port&direct`（三者都有：ProxyIP→SOCKS5→直连）
    - **上面只是示例，可自由搭配参数以满足不同场景需求**

- **20250718**：删掉 NAT64，添加SOCKS5：`/user:pass@host:port` 或 `/@host:port`。
- **20250527**：添加 NAT64。
- **20240417**：修复了报错问题（错误代码：1101）。
