import AVPacket, { AVPacketPool } from 'avutil/struct/avpacket';
import AVCodecParameters from 'avutil/struct/avcodecparameters';
import AVFrame, { AVFramePool } from 'avutil/struct/avframe';
import { Rational } from 'avutil/struct/rational';
export type WebVideoEncoderOptions = {
    onReceiveAVPacket: (avpacket: pointer<AVPacket>) => void;
    onError: (error?: Error) => void;
    enableHardwareAcceleration?: boolean;
    avpacketPool?: AVPacketPool;
    avframePool?: AVFramePool;
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
