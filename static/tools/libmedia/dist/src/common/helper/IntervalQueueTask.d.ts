/**
 * 以一定间隔执行任务
 */
export default class IntervalQueueTask {
    private queue;
    private timer;
    private ended;
    onEnd: () => void;
    private lastTime;
    private interval;
    constructor(interval: number, timeout?: number);
    push<T extends (() => void)>(task: T): void;
    end(): void;
    reset(): void;
}
