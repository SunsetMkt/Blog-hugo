export default class IODemuxPipeline {
    private ioThread;
    private demuxPipeline;
    private globalDataMap;
    private controlPort;
    private timer;
    constructor();
    private createGlobalData;
    private releaseGlobalData;
    init(controlPort: MessagePort): Promise<void>;
    invoke(type: 'io' | 'demux', method: string, args: any[]): Promise<any>;
    setLogLevel(level: number): Promise<void>;
}
