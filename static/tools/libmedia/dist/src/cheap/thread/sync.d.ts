/**
 * 同一个线程内异步方法串行执行
 */
export declare class Sync {
    list: (() => void)[];
}
export declare function lock(sync: Sync): Promise<void>;
export declare function unlock(sync: Sync): void;
