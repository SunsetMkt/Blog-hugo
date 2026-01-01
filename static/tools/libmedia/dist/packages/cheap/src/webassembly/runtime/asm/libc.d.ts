/**
 * WebAssembly runtime 实例
 */
export declare let wasmThreadProxy: WebAssembly.Instance;
export declare function isSupport(): boolean;
export declare function init(memory: WebAssembly.Memory, initial: uint32, maximum: uint32): void;
