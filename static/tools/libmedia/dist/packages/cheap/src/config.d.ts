/**
 * 是否使用多线程
 */
export declare const USE_THREADS: boolean;
/**
 * 栈地址对齐
 * 栈地址至少是 16 字节对齐，因为 wasm 的基本类型中最大是 v128 16 字节
 */
export declare let STACK_ALIGNMENT: number;
/**
 * 栈大小，应为 STACK_ALIGNMENT 的整数倍
 */
export declare let STACK_SIZE: number;
/**
 * 堆保留段，可用于静态数据区分配
 */
export declare const HEAP_OFFSET = 1024;
/**
 * 堆初始大小
 */
export declare const HEAP_INITIAL: uint32;
/**
 * 堆最大大小
 * ios safari 16 以下 对最大值有限制，太大分配不出来
 */
export declare const HEAP_MAXIMUM: uint32;
