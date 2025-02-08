import { Sem } from '../../thread/semaphore';
export declare class Timespec {
    tvSec: int64;
    tvNSec: int32;
}
export declare function wasm_sem_init(sem: pointer<Sem>, pshared: int32, value: uint32): int32;
export declare function wasm_sem_destroy(sem: pointer<Sem>): int32;
export declare function wasm_sem_wait(sem: pointer<Sem>): int32;
export declare function wasm_sem_trywait(sem: pointer<Sem>): int32;
export declare function wasm_sem_timedwait(sem: pointer<Sem>, abstime: pointer<Timespec>): int32;
export declare function wasm_sem_post(sem: pointer<Sem>): int32;
