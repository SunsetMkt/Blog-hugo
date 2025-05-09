import AVCodecParameters from 'avutil/struct/avcodecparameters';
import AVFrame from 'avutil/struct/avframe';
import { WebAssemblyResource } from 'cheap/webassembly/compiler';
import AVPacket, { AVPacketPool } from 'avutil/struct/avpacket';
import { Rational } from 'avutil/struct/rational';
import { Data } from 'common/types/type';
export type WasmAudioEncoderOptions = {
    resource: WebAssemblyResource;
    onReceiveAVPacket: (avpacket: pointer<AVPacket>) => void;
    avpacketPool?: AVPacketPool;
};
export default class WasmAudioEncoder {
    private options;
    private encoder;
    private parameters;
    private timeBase;
    private avpacket;
    private avframe;
    private pts;
    private frameSize;
    private audioFrameResizer;
    private encoderOptions;
    private ptsQueue;
    constructor(options: WasmAudioEncoderOptions);
    private getAVPacket;
    private outputAVPacket;
    private receiveAVPacket;
    open(parameters: pointer<AVCodecParameters>, timeBase: Rational, opts?: Data): Promise<int32>;
    private encode_;
    encode(avframe: pointer<AVFrame> | AudioData): int32;
    flush(): Promise<int32>;
    getExtraData(): Uint8Array<ArrayBuffer>;
    close(): void;
}
