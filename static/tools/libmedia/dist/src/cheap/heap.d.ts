import AllocatorInterface from './allocator/Allocator';
import { WebassemblyTable } from './allocator/Table';
import { AtomicsBuffer } from './typedef';
/**
 * 线程 id
 */
export declare let ThreadId: number;
export declare let isMainThread: boolean;
/**
 * 线程名
 */
export declare let ThreadName: string;
/**
 * 当前线程的栈顶指针
 */
export declare let StackPointer: WebAssembly.Global;
/**
 * 栈结束位置
 */
export declare let StackTop: pointer<void>;
/**
 * 当前线程栈大小
 */
export declare let StackSize: int32;
/**
 * 当前线程的 Table
 */
export declare let Table: WebassemblyTable;
/**
 * 堆分配器
 */
export declare let Allocator: AllocatorInterface;
/**
 * 堆
 */
export declare let Memory: WebAssembly.Memory;
export declare function getHeap(): ArrayBuffer;
export declare let getHeapU8: () => Uint8Array;
export declare let getView: () => DataView;
export declare let getAtomicsBuffer: (type: atomictype) => AtomicsBuffer;
export declare function getView_(): DataView<ArrayBufferLike>;
export declare function getAtomicsBuffer_(type: atomictype): AtomicsBuffer;
export declare function allocThreadId(): any;
/**
 * 子线程初始化
 *
 * @param options
 */
export declare function initThread(options: {
    memory: WebAssembly.Memory;
    stackPointer?: pointer<void>;
    stackSize?: int32;
    name?: string;
    disableAsm?: boolean;
    id?: int32;
}): Promise<void>;
/**
 * 主线程初始化
 */
export declare function initMain(): void;
