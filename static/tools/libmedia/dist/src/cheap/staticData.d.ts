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
