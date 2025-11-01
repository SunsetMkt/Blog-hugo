import type AVCodecParameters from 'avutil/struct/avcodecparameters';
import type AVPacket from 'avutil/struct/avpacket';
import type { AVFramePool } from 'avutil/struct/avframe';
import type AVFrame from 'avutil/struct/avframe';
import type { WebAssemblyResource } from 'cheap/webassembly/compiler';
import type { Data } from 'common/types/type';
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
