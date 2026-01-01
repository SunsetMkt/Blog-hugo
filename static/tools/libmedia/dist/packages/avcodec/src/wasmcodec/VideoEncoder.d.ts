import { type AVCodecParameters, type AVPacket, type AVPacketPool, type AVFrame, AVRational } from '@libmedia/avutil';
import { type WebAssemblyResource } from '@libmedia/cheap';
import { type Data } from '@libmedia/common';
export type WasmVideoEncoderOptions = {
    resource: WebAssemblyResource;
    onReceiveAVPacket: (avpacket: pointer<AVPacket>) => void;
    avpacketPool?: AVPacketPool;
    copyTs?: boolean;
};
export default class WasmVideoEncoder {
    private options;
    private encoder;
    private parameters;
    private timeBase;
    private framerateTimebase;
    private inputCounter;
    private avpacket;
    private avframe;
    private encodeQueueSize;
    private bitrateFilter;
    private extradata;
    private encoderOptions;
    constructor(options: WasmVideoEncoderOptions);
    private getAVPacket;
    private outputAVPacket;
    private receiveAVPacket;
    private receiveAVPacketAsync;
    /**
     * 打开编码器
     *
     * @param parameters
     * @param timeBase
     * @param threadCount
     * @param opts
     * @returns
     */
    open(parameters: pointer<AVCodecParameters>, timeBase: AVRational, threadCount?: number, opts?: Data): Promise<int32>;
    private preEncode;
    /**
     * 同步编码
     *
     * 多线程解码时可能会阻塞当前线程，若在浏览器环境请保证在 worker 中调用
     *
     * @param frame
     * @param key
     * @returns
     */
    encode(frame: pointer<AVFrame>, key: boolean): int32;
    /**
     * 异步编码
     *
     * 支持在浏览器主线程中进行多线程编码，需要支持 JSPI 和 Atomics.waitAsync
     *
     * @param frame
     * @param key
     * @returns
     */
    encodeAsync(frame: pointer<AVFrame>, key: boolean): Promise<int32>;
    /**
     * 刷出编码队列中所有缓存的包
     *
     * @returns
     */
    flush(): Promise<int32>;
    /**
     * 刷出编码队列中所有缓存的包
     *
     * 在浏览器环境主线程做多线程编码使用此方法，需要支持 JSPI 和 Atomics.waitAsync
     *
     * @returns
     */
    flushAsync(): Promise<int32>;
    getExtraData(): Uint8Array<ArrayBufferLike>;
    getColorSpace(): {
        colorSpace: int32;
        colorPrimaries: int32;
        colorTrc: int32;
    };
    close(): void;
    getQueueLength(): number;
    getChildThreadCount(): number;
}
