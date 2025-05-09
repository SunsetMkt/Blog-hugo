/**
 * 基于 https://github.com/codemix/malloc 修改
 * 一个基于跳表的 malloc 算法
 * 添加支持自动扩堆，支持多线程和 alignedAlloc
 */
import Allocator from './Allocator';
type pointer<T = void> = bigint;
type size = bigint;
type ListNode = {
    type: string;
    offset: int64;
    size: int64;
    height: int64;
    pointers: int64[];
    block: int64;
};
type InspectionResult = {
    header: ListNode;
    blocks: Array<{
        type: string;
        size: int64;
        node?: ListNode;
    }>;
    total: int64;
    used: int64;
};
export type AllocatorJSOptions = {
    memory: WebAssembly.Memory;
    byteOffset?: int64;
    growAllowed?: boolean;
    growSize?: int64;
    maxHeapSize?: int64;
    operator: MemoryOperator;
};
export interface MemoryOperator {
    read64: (p: int64) => int64;
    write64: (p: int64, value: int64) => void;
    fill: (p: int64, value: int32, size: bigint) => void;
    copy: (dst: int64, src: int64, size: bigint) => void;
}
export default class AllocatorJS64 implements Allocator {
    private byteOffset;
    private blockArray;
    private updates;
    private options;
    private shared;
    private handles;
    constructor(options: AllocatorJSOptions, init?: boolean);
    get heapOffset(): bigint;
    get heapLength(): int64;
    addUpdateHandle(handle: (buffer: ArrayBufferLike) => void): void;
    removeUpdateHandle(handle: (buffer: ArrayBufferLike) => void): void;
    private malloc_;
    malloc(size: size): pointer<void>;
    private calloc_;
    calloc(num: size, size: size): pointer<void>;
    private realloc_;
    realloc(address: pointer<void>, size: size): pointer<void>;
    private alignedAlloc_;
    alignedAlloc(alignment: size, size: size): pointer<void>;
    private free_;
    free(address: pointer<void>): void;
    sizeof(address: pointer<void>): size;
    /**
     * 获取堆分配信息
     *
     * @returns
     */
    inspect(): InspectionResult;
    private findFreeBlock;
    getBuffer(): ArrayBufferLike;
    isAlloc(pointer: pointer<void>): boolean;
}
export {};
