export default class AnimationFrameLoop {
    private task;
    private timer;
    private started;
    /**
     *
     * @param task 定时任务
     * @param timeout 多久之后开始
     * @param interval 执行间隔
     */
    constructor(task: Function);
    /**
     * 开始执行
     */
    start(): void;
    /**
     * 停止执行
     */
    stop(): void;
    /**
     * 是否正在执行
     */
    isStarted(): boolean;
    /**
     * 销毁定时任务
     */
    destroy(): void;
}
