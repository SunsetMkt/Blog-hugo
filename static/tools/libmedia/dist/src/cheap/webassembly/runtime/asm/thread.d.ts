import { Mutex } from '../../../thread/mutex';
import { Cond } from '../../../thread/cond';
import { Timespec } from '../semaphore';
/**
 * WebAssembly runtime 实例
 */
export declare let wasmThreadProxy: WebAssembly.Instance;
export declare function isSupport(): boolean;
export declare function init(memory: WebAssembly.Memory, initial: uint32, maximum: uint32, override: (data: {
    wasm_pthread_mutex_lock: (mutex: pointer<Mutex>) => int32;
    wasm_pthread_mutex_trylock: (mutex: pointer<Mutex>) => int32;
    wasm_pthread_mutex_unlock: (mutex: pointer<Mutex>) => int32;
    wasm_pthread_cond_wait: (cond: pointer<Cond>, mutex: pointer<Mutex>) => int32;
    wasm_pthread_cond_timedwait: (cond: pointer<Cond>, mutex: pointer<Mutex>, abstime: pointer<Timespec>) => int32;
    wasm_pthread_cond_signal: (cond: pointer<Cond>) => int32;
    wasm_pthread_cond_broadcast: (cond: pointer<Cond>) => int32;
}) => void): void;
