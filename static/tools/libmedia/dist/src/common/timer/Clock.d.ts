export default class Clock {
    private messageChannel;
    private interval;
    private started;
    private timer;
    private workerTimer;
    private workerSetTimeout;
    onClock: (next: () => void) => void;
    private nextTick;
    /**
     * messageChannel 执行间隔，默认 0.2
     */
    private a;
    /**
     * setTimeout 最小执行间隔，默认 4
     */
    private b;
    /**
     * 50 毫秒内  messageChannel 执行次数
     */
    private beta;
    /**
     * 50 毫秒内  setTimeout 执行次数
     */
    private alpha;
    private count;
    /**
     * 等效时间
     */
    private equivalent;
    private timestamp;
    private onVisibilityChange;
    private timeoutNext;
    private running;
    private highPerformance;
    constructor(interval: number, highPerformance?: boolean);
    private compute;
    private timeoutTick;
    start(): void;
    stop(): void;
    isStarted(): boolean;
    setInterval(interval: number): void;
    getInterval(): number;
    isZeroTimeout(): boolean;
    destroy(): void;
    private handleEvent;
}
