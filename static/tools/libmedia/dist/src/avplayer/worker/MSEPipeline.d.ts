export default class MSEPipelineWorker {
    private mse;
    private globalDataMap;
    private controlPort;
    private timer;
    constructor();
    private createGlobalData;
    private releaseGlobalData;
    init(controlPort: MessagePort): Promise<void>;
    invoke(method: string, args: any[]): Promise<any>;
    setLogLevel(level: number): Promise<void>;
}
