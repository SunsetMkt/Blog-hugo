import { type AVCodecParameters, type AVPacket, type AVPacketPool, type AVFrame, type AVFramePool, type AVRational } from '@libmedia/avutil';
export type WebAudioEncoderOptions = {
    onReceiveAVPacket: (avpacket: pointer<AVPacket>) => void;
    onError: (error?: Error) => void;
    avpacketPool?: AVPacketPool;
    avframePool?: AVFramePool;
    bitrateMode?: BitrateMode;
    opus?: OpusEncoderConfig;
    copyTs?: boolean;
};
export default class WebAudioEncoder {
    private encoder;
    private options;
    private parameters;
    private timeBase;
    private currentError;
    private pts;
    private ptsQueue;
    private avframeCache;
    private extradata;
    constructor(options: WebAudioEncoderOptions);
    private output;
    private error;
    open(parameters: pointer<AVCodecParameters>, timeBase: AVRational): Promise<int32>;
    encode(frame: AudioData | pointer<AVFrame>): int32;
    flush(): Promise<int32>;
    close(): void;
    getExtraData(): Uint8Array<ArrayBufferLike>;
    getQueueLength(): number;
    static isSupported(parameters: pointer<AVCodecParameters>): Promise<boolean>;
}
