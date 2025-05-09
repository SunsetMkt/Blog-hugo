/**
 * 基于 https://github.com/codemix/malloc 修改
 * 一个基于跳表的 malloc 算法
 * 添加支持自动扩堆，支持多线程和 alignedAlloc
 */
import Allocator from './Allocator';
type ListNode = {
    type: string;
    offset: int32;
    size: int32;
    height: int32;
    pointers: int32[];
    block: number;
};
type InspectionResult = {
    header: ListNode;
    blocks: Array<{
        type: string;
        size: int32;
        node?: ListNode;
    }>;
    total: number;
    used: number;
};
export type AllocatorJSOptions = {
    memory?: WebAssembly.Memory;
    buffer: ArrayBuffer | SharedArrayBuffer;
    byteOffset?: int32;
    byteLength?: int32;
    growAllowed?: boolean;
    growSize?: number;
    maxHeapSize?: number;
    onResize?: (old: Int32Array, need: number) => {
        buffer: ArrayBuffer;
        byteOffset?: number;
        byteLength?: number;
    };
};
export default class AllocatorJS implements Allocator {
    private buffer;
    private byteOffset;
    private heapOffset;
    private heapLength;
    private int32Array;
    private updates;
    private options;
    private shared;
    private handles;
    constructor(options: AllocatorJSOptions, init?: boolean);
    addUpdateHandle(handle: (buffer: ArrayBuffer) => void): void;
    removeUpdateHandle(handle: (buffer: ArrayBuffer) => void): void;
    private malloc_;
    /**
     * Allocate a given number of bytes and return the offset.
     * If allocation fails, returns 0.
     */
    malloc(size: size): pointer<void>;
    private calloc_;
    calloc(num: size, size: size): pointer<void>;
    private realloc_;
    realloc(address: pointer<void>, size: size): pointer<void>;
    private alignedAlloc_;
    alignedAlloc(alignment: size, size: size): pointer<void>;
    private free_;
    /**
     * Free a number of bytes from the given address.
     */
    free(address: pointer<void>): void;
    /**
     * Return the size of the block at the given address.
     */
    sizeof(address: int32): size;
    /**
     * 获取堆分配信息
     *
     * @returns
     */
    inspect(): InspectionResult;
    private findFreeBlock;
    getBuffer(): ArrayBufferLike;
    isAlloc(pointer: pointer<void>): boolean;
    private checkBuffer;
}
export {};
