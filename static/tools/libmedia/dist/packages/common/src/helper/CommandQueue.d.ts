/**
 * 顺序执行异步任务，用于有顺序依赖的信令交互
 */
export default class CommandQueue {
    private queue;
    constructor();
    private execute;
    private next;
    push<T extends () => Promise<any>>(task: T): Promise<ReturnType<T>>;
    clear(error?: Error): void;
    clearPadding(): void;
    get length(): number;
}
