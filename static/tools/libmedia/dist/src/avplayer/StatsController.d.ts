import Stats from 'avpipeline/struct/stats';
export interface StatsControllerObserver {
    onVideoStutter: () => void;
    onVideoDiscard: () => void;
    onMasterTimerUpdate: (time: int64) => void;
}
export default class StatsController {
    private stats;
    private timer;
    private videoFrameRenderCount;
    private videoFrameDecodeCount;
    private audioFrameRenderCount;
    private audioFrameDecodeCount;
    private videoPacketBytes;
    private audioPacketBytes;
    private bufferReceiveBytes;
    private observer;
    private isWorkerMain;
    private videoDecodeMaxIntervalCounter;
    private lastAudioStutterCount;
    private lastAVDelta;
    constructor(stats: pointer<Stats>, isWorkerMain: boolean, observer: StatsControllerObserver);
    private reset;
    start(): void;
    stop(): void;
    private onTimer;
}
