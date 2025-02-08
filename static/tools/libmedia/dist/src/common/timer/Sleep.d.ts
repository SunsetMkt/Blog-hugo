/**
 * @file sleep
 */
export default class Sleep {
    private timeout;
    private timer;
    private resolve;
    private reject;
    private startTime;
    /**
     *
     * @param timeout 时间（秒）
     */
    constructor(timeout: number);
    then(res: (value?: number) => void, rej?: (value?: number) => void): void;
    stop(resolve?: boolean): void;
    reset(timeout?: number): void;
}
