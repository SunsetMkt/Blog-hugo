import AVCodecParameters from 'avutil/struct/avcodecparameters';
import AVPacket, { AVPacketPool } from 'avutil/struct/avpacket';
import AVFrame, { AVFramePool } from 'avutil/struct/avframe';
import { Rational } from 'avutil/struct/rational';
export type WebAudioEncoderOptions = {
    onReceiveAVPacket: (avpacket: pointer<AVPacket>) => void;
    onError: (error?: Error) => void;
    avpacketPool?: AVPacketPool;
    avframePool?: AVFramePool;
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
    open(parameters: pointer<AVCodecParameters>, timeBase: Rational): Promise<int32>;
    encode(frame: AudioData | pointer<AVFrame>): int32;
    flush(): Promise<int32>;
    close(): void;
    getExtraData(): Uint8Array<ArrayBufferLike>;
    getQueueLength(): number;
    static isSupported(parameters: pointer<AVCodecParameters>): Promise<boolean>;
}
