import { type AVCodecParameters, type AVPacket, type AVFramePool, type AVFrame } from '@libmedia/avutil';
import { type WebAssemblyResource } from '@libmedia/cheap';
import { type Data } from '@libmedia/common';
export type WasmAudioDecoderOptions = {
    resource: WebAssemblyResource;
    onReceiveAVFrame: (frame: pointer<AVFrame>) => void;
    avframePool?: AVFramePool;
};
export default class WasmAudioDecoder {
    private options;
    private decoder;
    private frame;
    private decoderOptions;
    private timeBase;
    constructor(options: WasmAudioDecoderOptions);
    private getAVFrame;
    private outputAVFrame;
    private receiveAVFrame;
    open(parameters: pointer<AVCodecParameters>, opts?: Data): Promise<int32>;
    decode(avpacket: pointer<AVPacket>): int32;
    flush(): Promise<int32>;
    close(): void;
}
