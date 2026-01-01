/**
 * @file 定时任务
 */
export default class Timer {
    private task;
    private timeout;
    private interval;
    private timer;
    /**
     *
     * @param task 定时任务
     * @param timeout 多久之后开始
     * @param interval 执行间隔
     */
    constructor(task: Function, timeout: number, interval: number);
    /**
     * 开始执行
     */
    start(): void;
    /**
     * 停止执行
     */
    stop(): void;
    updateInterval(interval: number): void;
    /**
     * 是否正在执行
     */
    isStarted(): boolean;
    /**
     * 销毁定时任务
     */
    destroy(): void;
}
