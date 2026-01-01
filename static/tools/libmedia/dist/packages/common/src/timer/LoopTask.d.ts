/**
 * @file 可伸缩循环任务队列
 */
export default class LoopTask {
    private task;
    private count;
    private emptyCount;
    private started;
    private clock;
    private timestamp;
    private timeout;
    private interval;
    private startTimer;
    private autoInterval;
    private sync;
    private tickAfter;
    private processing;
    constructor(task: () => any, timeout?: number, interval?: number, autoInterval?: boolean, sync?: boolean);
    private next;
    start(): void;
    stop(): void;
    stopBeforeNextTick(): Promise<void>;
    isStarted(): boolean;
    emptyTask(): void;
    isZeroTimeout(): boolean;
    restart(): void;
    resetInterval(): void;
    destroy(): void;
}
