import Stats from './struct/stats';
export interface TaskOptions {
    leftPort?: MessagePort;
    rightPort?: MessagePort;
    controlPort?: MessagePort;
    taskId: string;
    stats: pointer<Stats>;
}
export default abstract class Pipeline {
    protected tasks: Map<string, TaskOptions>;
    abstract registerTask(options: TaskOptions): Promise<number>;
    abstract unregisterTask(id: string): Promise<void>;
    constructor();
    clear(): Promise<void>;
    setLogLevel(level: number): Promise<void>;
    getTaskCount(): Promise<number>;
}
