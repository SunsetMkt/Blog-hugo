export default class IODemuxPipelineProxy {
    private thread;
    private codecparMap;
    private controlMessageChannel;
    private controlPort;
    private statsMap;
    constructor();
    run(): Promise<void>;
    setLogLevel(level: number): void;
    destroy(): Promise<void>;
    get IOPipeline(): {};
    get DemuxPipeline(): {};
}
