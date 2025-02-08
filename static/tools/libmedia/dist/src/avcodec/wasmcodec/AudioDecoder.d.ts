import AVCodecParameters from 'avutil/struct/avcodecparameters';
import AVPacket from 'avutil/struct/avpacket';
import AVFrame, { AVFramePool } from 'avutil/struct/avframe';
import { WebAssemblyResource } from 'cheap/webassembly/compiler';
import { Data } from 'common/types/type';
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
