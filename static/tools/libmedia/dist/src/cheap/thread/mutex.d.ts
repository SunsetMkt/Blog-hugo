/**
 * 参考 https://github.com/mozilla-spidermonkey/js-lock-and-condition
 */
export declare class Mutex {
    atomic: atomic_int32;
}
/**
 * 初始化锁
 *
 * @param mutex
 * @returns
 */
export declare function init(mutex: pointer<Mutex>): int32;
/**
 * 加锁
 *
 * @param mutex
 * @param spin 是否自旋
 */
export declare function lock(mutex: pointer<Mutex>, spin?: boolean): int32;
/**
 * 尝试加锁
 *
 * @param mutex
 */
export declare function tryLock(mutex: pointer<Mutex>): int32;
/**
 * 异步加锁
 *
 * @param mutex
 */
export declare function lockAsync(mutex: pointer<Mutex>): Promise<int32>;
/**
 * 释放锁
 *
 * @param mutex
 */
export declare function unlock(mutex: pointer<Mutex>): int32;
/**
 * 销毁锁
 *
 * @param mutex
 * @returns
 */
export declare function destroy(mutex: pointer<Mutex>): int32;
