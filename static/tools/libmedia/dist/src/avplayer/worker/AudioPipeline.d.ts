export default class AudioPipeline {
    private decoder;
    private render;
    private globalDataMap;
    private controlPort;
    private timer;
    constructor();
    private createGlobalData;
    private releaseGlobalData;
    init(controlPort: MessagePort): Promise<void>;
    invoke(type: 'decoder' | 'render', method: string, args: any[]): Promise<any>;
    setLogLevel(level: number): Promise<void>;
}
