import { type AVCodecParameters, type AVPacket, type AVPacketPool, type AVFrame, type AVRational, type AVFramePool } from '@libmedia/avutil';
export type WebVideoEncoderOptions = {
    onReceiveAVPacket: (avpacket: pointer<AVPacket>) => void;
    onError: (error?: Error) => void;
    avpacketPool?: AVPacketPool;
    avframePool?: AVFramePool;
    enableHardwareAcceleration?: boolean;
    bitrateMode?: BitrateMode;
    scalabilityMode?: string;
    contentHint?: string;
    latencyMode?: LatencyMode;
    copyTs?: boolean;
};
export default class WebVideoEncoder {
    private encoder;
    private options;
    private parameters;
    private timeBase;
    private currentError;
    private avframeMap;
    private framerateTimebase;
    private inputCounter;
    private outputCounter;
    private extradata;
    private ptsQueue;
    constructor(options: WebVideoEncoderOptions);
    private output;
    private error;
    open(parameters: pointer<AVCodecParameters>, timeBase: AVRational): Promise<int32>;
    encode(frame: VideoFrame | pointer<AVFrame>, key: boolean): int32;
    flush(): Promise<int32>;
    close(): void;
    getExtraData(): Uint8Array<ArrayBufferLike>;
    getColorSpace(): {
        colorSpace: import("@libmedia/avutil").AVColorSpace;
        colorPrimaries: import("@libmedia/avutil").AVColorPrimaries;
        colorTrc: import("@libmedia/avutil").AVColorTransferCharacteristic;
    };
    getQueueLength(): number;
    static isSupported(parameters: pointer<AVCodecParameters>, enableHardwareAcceleration: boolean): Promise<boolean>;
}
