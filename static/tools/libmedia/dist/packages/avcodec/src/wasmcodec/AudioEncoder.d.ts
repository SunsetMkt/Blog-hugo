import { type AVCodecParameters, type AVPacket, type AVPacketPool, type AVFrame, AVRational } from '@libmedia/avutil';
import { type WebAssemblyResource } from '@libmedia/cheap';
import { type Data } from '@libmedia/common';
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
    open(parameters: pointer<AVCodecParameters>, timeBase: AVRational, opts?: Data): Promise<int32>;
    private encode_;
    encode(avframe: pointer<AVFrame> | AudioData): int32;
    flush(): Promise<int32>;
    getExtraData(): Uint8Array<ArrayBuffer>;
    close(): void;
}
