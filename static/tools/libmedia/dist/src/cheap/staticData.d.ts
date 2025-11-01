/**
 * 静态分配区只能在此文件分配
 * 导出在其他地方使用
 */
import { Mutex } from './thread/mutex';
export declare function malloc(length: size, algin?: size): pointer<void>;
/**
 * 线程计数器地址
 */
export declare const threadCounter: pointer<uint32>;
/**
 * 堆分配锁地址
 */
export declare const heapMutex: pointer<Mutex>;
/**
 * 32 位唯一 id 生成地址
 */
export declare const uniqueCounter32: pointer<atomic_uint32>;
/**
 * 64 位唯一 id 生成地址
 */
export declare const uniqueCounter64: pointer<atomic_uint64>;
