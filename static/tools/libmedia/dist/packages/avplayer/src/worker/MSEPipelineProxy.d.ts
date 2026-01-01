export default class MSEPipelineProxy {
    private thread;
    private controlMessageChannel;
    private controlPort;
    private statsMap;
    constructor();
    run(): Promise<void>;
    setLogLevel(level: number): void;
    destroy(): Promise<void>;
    private transformResult;
    get MSEPipeline(): {};
}
