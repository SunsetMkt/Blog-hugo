import type { AVPacketPool } from 'avutil/struct/avpacket';
import type AVPacket from 'avutil/struct/avpacket';
import type AVCodecParameters from 'avutil/struct/avcodecparameters';
import type { AVFramePool } from 'avutil/struct/avframe';
import type AVFrame from 'avutil/struct/avframe';
import type { Rational } from 'avutil/struct/rational';
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
    open(parameters: pointer<AVCodecParameters>, timeBase: Rational): Promise<int32>;
    encode(frame: VideoFrame | pointer<AVFrame>, key: boolean): int32;
    flush(): Promise<int32>;
    close(): void;
    getExtraData(): Uint8Array<ArrayBufferLike>;
    getColorSpace(): {
        colorSpace: import("avutil/pixfmt").AVColorSpace;
        colorPrimaries: import("avutil/pixfmt").AVColorPrimaries;
        colorTrc: import("avutil/pixfmt").AVColorTransferCharacteristic;
    };
    getQueueLength(): number;
    static isSupported(parameters: pointer<AVCodecParameters>, enableHardwareAcceleration: boolean): Promise<boolean>;
}
