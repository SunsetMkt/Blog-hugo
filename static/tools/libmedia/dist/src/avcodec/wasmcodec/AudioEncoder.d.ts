import type AVCodecParameters from 'avutil/struct/avcodecparameters';
import type AVFrame from 'avutil/struct/avframe';
import type { WebAssemblyResource } from 'cheap/webassembly/compiler';
import type { AVPacketPool } from 'avutil/struct/avpacket';
import type AVPacket from 'avutil/struct/avpacket';
import { Rational } from 'avutil/struct/rational';
import type { Data } from 'common/types/type';
export type WasmAudioEncoderOptions = {
    resource: WebAssemblyResource;
    onReceiveAVPacket: (avpacket: pointer<AVPacket>) => void;
    avpacketPool?: AVPacketPool;
    copyTs?: boolean;
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
