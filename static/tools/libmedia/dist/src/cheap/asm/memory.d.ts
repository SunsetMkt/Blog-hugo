/**
 * WebAssembly runtime 实例
 */
export declare let instance: WebAssembly.Instance;
export declare function support(): boolean;
export declare function init(memory: WebAssembly.Memory, initial: uint32, maximum: uint32): void;
