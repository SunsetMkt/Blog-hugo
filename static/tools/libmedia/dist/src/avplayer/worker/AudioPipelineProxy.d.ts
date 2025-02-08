export default class AudioPipelineProxy {
    private thread;
    private controlMessageChannel;
    private controlPort;
    private statsMap;
    constructor();
    run(): Promise<void>;
    destroy(): Promise<void>;
    setLogLevel(level: number): void;
    private transformResult;
    get AudioDecodePipeline(): {};
    get AudioRenderPipeline(): {};
}
