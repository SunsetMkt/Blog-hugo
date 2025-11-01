import type AVPacket from 'avutil/struct/avpacket';
import type { AVFramePool } from 'avutil/struct/avframe';
import type AVFrame from 'avutil/struct/avframe';
import type { WebAssemblyResource } from 'cheap/webassembly/compiler';
import type AVCodecParameters from 'avutil/struct/avcodecparameters';
import type { Data } from 'common/types/type';
export type WasmVideoDecoderOptions = {
    resource: WebAssemblyResource;
    onReceiveAVFrame: (frame: pointer<AVFrame>) => void;
    avframePool?: AVFramePool;
};
/**
 * We leave some space between them for extensions (drop some
 * keyframes for intra-only or drop just some bidir frames).
 */
export declare const enum AVDiscard {
    /**
     * discard nothing
     */
    AVDISCARD_NONE = -16,
    /**
     * discard useless packets like 0 size packets in avi
     */
    AVDISCARD_DEFAULT = 0,
    /**
     * discard all non reference
     */
    AVDISCARD_NONREF = 8,
    /**
     * discard all bidirectional frames
     */
    AVDISCARD_BIDIR = 16,
    /**
     * discard all non intra frames
     */
    AVDISCARD_NONINTRA = 24,
    /**
     * discard all frames except keyframes
     */
    AVDISCARD_NONKEY = 32,
    /**
     * discard all
     */
    AVDISCARD_ALL = 48
}
export default class WasmVideoDecoder {
    private options;
    private decoder;
    private frame;
    private parameters;
    private decoderOptions;
    private timeBase;
    private dtsQueue;
    constructor(options: WasmVideoDecoderOptions);
    private getAVFrame;
    private outputAVFrame;
    private receiveAVFrame;
    open(parameters: pointer<AVCodecParameters>, threadCount?: number, opts?: Data): Promise<int32>;
    decode(avpacket: pointer<AVPacket>): int32;
    flush(): Promise<int32>;
    close(): void;
    setSkipFrameDiscard(discard: AVDiscard): void;
    getChildThreadCount(): number;
}
