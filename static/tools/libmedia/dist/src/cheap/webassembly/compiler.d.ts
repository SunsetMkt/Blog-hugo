export interface WebAssemblyResource {
    tableSize?: number;
    tableAlign?: number;
    dataSize?: number;
    dataAlign?: number;
    bssSize?: number;
    initFuncs?: string[];
    module: WebAssembly.Module;
    buffer?: ArrayBuffer;
    threadModule?: {
        module: WebAssembly.Module;
        initFuncs?: string[];
    };
    /**
     * 提前创建好的 worker pool
     * 某些 wasm 创建线程之后需要马上挂起线程，这种情况需要提前将线程准备好
     */
    enableThreadPool?: boolean;
    enableThreadCountRate?: number;
}
export interface WebAssemblySource {
    source: Uint8Array<ArrayBuffer> | ArrayBuffer | string;
    tableSize?: number;
    tableAlign?: number;
    dataSize?: number;
    dataAlign?: number;
    bssSize?: number;
}
interface CompilerOptions {
    enableThread?: boolean;
    child?: boolean;
    initFuncs?: string[];
}
export default function compile(source: WebAssemblySource, options?: CompilerOptions): Promise<WebAssemblyResource>;
export {};
