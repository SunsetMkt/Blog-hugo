/**
 * 参考 https://github.com/mozilla-spidermonkey/js-lock-and-condition
 */
import { Mutex } from './mutex';
export declare class Cond {
    atomic: atomic_int32;
}
/**
 * 初始化条件变量
 */
export declare function init(cond: pointer<Cond>, attr?: pointer<void>): int32;
/**
 * 销毁条件变量
 */
export declare function destroy(cond: pointer<Cond>): int32;
/**
 * 唤醒条件变量上的一个等待线程
 *
 * @param cond
 */
export declare function signal(cond: pointer<Cond>): int32;
/**
 * 唤醒条件变量上的所有等待线程
 *
 * @param cond
 */
export declare function broadcast(cond: pointer<Cond>): int32;
/**
 * 线程在条件变量处等待
 *
 * @param cond
 * @param mutex
 * @returns
 */
export declare function wait(cond: pointer<Cond>, mutex: pointer<Mutex>): int32;
/**
 * 线程在条件变量处异步等待
 *
 * @param cond
 * @param mutex
 */
export declare function waitAsync(cond: pointer<Cond>, mutex: pointer<Mutex>): Promise<int32>;
/**
 * 线程在条件变量处超时等待
 *
 * @param cond
 * @param mutex
 * @param timeout 毫秒
 */
export declare function timedWait(cond: pointer<Cond>, mutex: pointer<Mutex>, timeout: int32): int32;
/**
 * 线程在条件变量处超时异步等待
 *
 * @param cond
 * @param mutex
 * @param timeout 毫秒
 */
export declare function timedwaitAsync(cond: pointer<Cond>, mutex: pointer<Mutex>, timeout: int32): Promise<int32>;
