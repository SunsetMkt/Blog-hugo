import type { AVSampleFormat } from '../audiosamplefmt';
export default class AVPCMBuffer {
    /**
     * pcm 数据
     * 可同时存放多个 channel 数据
     */
    data: pointer<pointer<uint8>>;
    /**
     * data 每一个 channel 的缓冲区大小
     */
    linesize: int32;
    /**
     * 当前存放了多少个采样点
     */
    nbSamples: int32;
    /**
     * 当前 data 每个 channel 能存放的最大采样点数
     */
    maxnbSamples: int32;
    /**
     * 声道数
     */
    channels: int32;
    /**
     * 采样率
     */
    sampleRate: int32;
    /**
     * pcm 格式
     */
    format: AVSampleFormat;
    /**
     * pts
     */
    timestamp: int64;
    /**
     * 时长
     */
    duration: double;
}
export declare class AVPCMBufferRef extends AVPCMBuffer {
    refCount: atomic_int32;
}
export interface AVPCMBufferPool {
    alloc: () => pointer<AVPCMBufferRef>;
    release: (buffer: pointer<AVPCMBufferRef>) => void;
}
