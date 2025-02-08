import { Pthread } from './thread';
interface TheadPoolEntryOptions {
    tableSize: number;
    module: WebAssembly.Module;
    initFuncs: string[];
    memoryBase: number;
    tableBase: number;
    childImports: string;
}
export default class ThreadPool {
    private count;
    private url;
    private childThreads;
    constructor(count: number, url: string);
    private createTheadPoolEntry;
    ready(options: TheadPoolEntryOptions): Promise<void>;
    hasFree(): boolean;
    isPoolThread(thread: pointer<Pthread>): boolean;
    createThread(thread: pointer<Pthread>, attr: pointer<void>, func: pointer<((args: pointer<void>) => void)>, args: pointer<void>): void;
    joinThread(thread: pointer<Pthread>, retval: pointer<pointer<void>>): 0 | -1;
    detachThread(thread: pointer<Pthread>): 0 | -1;
    destroy(): void;
}
export {};
