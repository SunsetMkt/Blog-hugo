import { type AVCodecParameters, type AVPacket, type AVFramePool, type AVFrame } from '@libmedia/avutil';
import { type WebAssemblyResource } from '@libmedia/cheap';
import { type Data } from '@libmedia/common';
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
    private receiveAVFrameAsync;
    /**
     * 打开解码器
     *
     * @param parameters
     * @param threadCount
     * @param opts
     * @returns
     */
    open(parameters: pointer<AVCodecParameters>, threadCount?: number, opts?: Data): Promise<int32>;
    /**
     * 同步解码
     *
     * 多线程解码时可能会阻塞当前线程，若在浏览器环境请保证在 worker 中调用
     *
     * @param avpacket
     * @returns
     */
    decode(avpacket: pointer<AVPacket>): int32;
    /**
     * 异步解码
     *
     * 支持在浏览器主线程中进行多线程解码，需要支持 JSPI 和 Atomics.waitAsync
     *
     * @param avpacket
     * @returns
     */
    decodeAsync(avpacket: pointer<AVPacket>): Promise<int32>;
    /**
     * 刷出解码队列中所有缓存的帧
     *
     * @returns
     */
    flush(): Promise<int32>;
    /**
     * 刷出解码队列中所有缓存的帧
     *
     * 在浏览器环境主线程做多线程解码使用此方法，需要支持 JSPI 和 Atomics.waitAsync
     *
     * @returns
     */
    flushAsync(): Promise<int32>;
    /**
     * 关闭解码器
     */
    close(): void;
    /**
     * 设置忽略解码帧类型
     *
     * @param discard
     */
    setSkipFrameDiscard(discard: AVDiscard): void;
    /**
     * 获取子线程数量
     *
     * @returns
     */
    getChildThreadCount(): number;
}
