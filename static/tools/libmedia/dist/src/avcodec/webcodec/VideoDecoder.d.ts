import AVPacket from 'avutil/struct/avpacket';
import AVCodecParameters from 'avutil/struct/avcodecparameters';
export type WebVideoDecoderOptions = {
    onReceiveVideoFrame: (frame: VideoFrame) => void;
    enableHardwareAcceleration?: boolean;
    onError: (error?: Error) => void;
};
export default class WebVideoDecoder {
    private decoder;
    private options;
    private parameters;
    private extradata;
    private currentError;
    private inputQueue;
    private outputQueue;
    private dtsQueue;
    private sort;
    private keyframeRequire;
    private extradataRequire;
    constructor(options: WebVideoDecoderOptions);
    private output;
    private error;
    private changeExtraData;
    open(parameters: pointer<AVCodecParameters>): Promise<int32>;
    decode(avpacket: pointer<AVPacket>): int32;
    flush(): Promise<int32>;
    close(): void;
    getQueueLength(): number;
    setSkipFrameDiscard(discard: number): void;
    static isSupported(parameters: pointer<AVCodecParameters>, enableHardwareAcceleration: boolean): Promise<boolean>;
}
