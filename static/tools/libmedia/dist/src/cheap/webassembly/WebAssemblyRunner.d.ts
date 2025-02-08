import { WebAssemblyResource } from './compiler';
import { Pthread } from './thread';
import { ThreadDescriptor } from './thread';
import * as cond from '../thread/cond';
import * as mutex from '../thread/mutex';
export type WebAssemblyRunnerOptions = {
    imports?: Record<string, Record<string, WebAssembly.ImportValue>>;
    exportMap?: Record<string, string>;
    importMap?: Record<string, string>;
    envKey?: string;
    childImports?: string | Blob;
    memoryBase?: number;
    tableBase?: number;
    thread?: pointer<Pthread>;
    threadDescriptor?: pointer<ThreadDescriptor>;
};
export default class WebAssemblyRunner {
    static getTable(): import("../allocator/Table").WebassemblyTable;
    static mutexLock(mux: pointer<mutex.Mutex>): void;
    static mutexUnlock(mux: pointer<mutex.Mutex>): void;
    static condWait(cnd: pointer<cond.Cond>, mux: pointer<mutex.Mutex>): void;
    static readPointer(p: pointer<pointer<void>>): pointer<void>;
    static writePointer(p: pointer<pointer<void>>, v: pointer<void>): void;
    private resource;
    /**
     * WebAssembly runtime 实例
     */
    private instance;
    /**
     * 配置项
     */
    protected options: WebAssemblyRunnerOptions;
    private builtinMalloc;
    private memoryBase;
    private tableBase;
    private childImports;
    private childUrl;
    private childBlob;
    private childThreads;
    private imports;
    private childReadyPromises;
    private threadPool;
    private initCalling;
    private promisingMap;
    constructor(resource: WebAssemblyResource, options?: WebAssemblyRunnerOptions);
    private createChildUrl;
    private overrideAtomic;
    /**
     * 运行 wasm 实例
     */
    run(imports?: Record<string, any>, threadPoolCount?: number): Promise<void>;
    runAsChild(imports?: Record<string, any>): void;
    childThreadsReady(): Promise<void>;
    private initRunTime;
    /**
     * 调用 wasm 模块暴露的方法
     *
     * @param func 方法名
     * @param args 参数，只能是 number 和 bigint( 有浏览器版本要求， 建议 64 位数据使用指针传递） 类型，如果是其他类型参数使用指针传递
     */
    invoke<T extends number | bigint | void = void>(func: string, ...args: (number | bigint)[]): T;
    /**
     * 异步调用 wasm 模块暴露的方法
     *
     * 适用于 wasm 内部会调用异步 js 函数的情况
     *
     * 需要支持 JSPI
     *
     * @param func 方法名
     * @param args 参数，只能是 number 和 bigint( 有浏览器版本要求， 建议 64 位数据使用指针传递） 类型，如果是其他类型参数使用指针传递
     */
    invokeAsync<T extends number | bigint | void = void>(func: string, ...args: (number | bigint)[]): Promise<T>;
    get asm(): Object;
    getInstance(): WebAssembly.Instance;
    getChildThreadCount(): number;
    destroy(): void;
}
