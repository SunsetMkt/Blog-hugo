import { Mutex } from './mutex';
export declare class Sem {
    atomic: atomic_int32;
    mutex: Mutex;
}
/**
 * 初始化信号量
 *
 * @param sem
 * @param value 信号量初始值
 */
export declare function init(sem: pointer<Sem>, value: uint32): int32;
export declare function destroy(sem: pointer<Sem>): int32;
/**
 * 生产信号量
 *
 * @param sem
 */
export declare function post(sem: pointer<Sem>): int32;
/**
 * 消费信号量
 *
 * @param sem
 */
export declare function wait(sem: pointer<Sem>): int32;
/**
 * 消费信号量
 *
 * @param sem
 */
export declare function tryWait(sem: pointer<Sem>): int32;
/**
 * 消费信号量，并设置一个超时
 *
 * @param sem
 * @param timeout 毫秒
 * @returns
 */
export declare function timedWait(sem: pointer<Sem>, timeout: int32): int32;
/**
 * 异步消费信号量
 *
 * @param sem
 */
export declare function waitAsync(sem: pointer<Sem>): Promise<int32>;
/**
 * 异步消费信号量，并设置一个超时
 *
 * @param sem
 * @param timeout 毫秒
 */
export declare function timedWaitAsync(sem: pointer<Sem>, timeout: int32): Promise<int32>;
export declare function set(sem: pointer<Sem>, value: int32): int32;
export declare function get(sem: pointer<Sem>): int32;
