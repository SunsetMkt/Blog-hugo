import Stats, { JitterBuffer } from 'avpipeline/struct/stats';
export interface ControllerObserver {
    onSetPlayRate: (rate: number) => void;
    onCroppingBuffer: (max: int32) => void;
}
export interface JitterBufferControllerOptions {
    stats: pointer<Stats>;
    jitterBuffer: pointer<JitterBuffer>;
    lowLatencyStart: boolean;
    lowLatency: boolean;
    useMse: boolean;
    max: float;
    min: float;
    observer: ControllerObserver;
}
export default class JitterBufferController {
    private timer;
    private interval;
    private data;
    private lastIncomingPacketCount;
    private shutterCount;
    private lastShutterCount;
    private isFirst;
    private max;
    private min;
    private targetPlaybackRate;
    private currentPlaybackRate;
    private playbackRateTimer;
    private options;
    constructor(options: JitterBufferControllerOptions);
    start(): void;
    stop(): void;
    reset(): void;
    private setPlayRate;
    private computePlayRate;
    private process;
    private onTimer;
}
