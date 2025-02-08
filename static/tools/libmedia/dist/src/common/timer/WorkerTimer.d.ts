/**
 * @file worker 定时任务，规避后台 settimeout 最小间隔 1s 的问题
 */
export default class WorkerTimer {
    private task;
    private timeout;
    private interval;
    private clock;
    private started;
    private timer;
    constructor(task: Function, timeout: number, interval: number);
    start(): void;
    stop(): void;
    isStarted(): boolean;
    updateInterval(interval: number): void;
    destroy(): void;
}
