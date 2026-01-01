import type { Uint8ArrayInterface } from '@libmedia/common/io';
import type { Data, Timeout, Range } from '@libmedia/common';
export declare const enum IOLoaderStatus {
    IDLE = 0,
    CONNECTING = 1,
    BUFFERING = 2,
    ERROR = 3,
    COMPLETE = 4
}
export interface IOLoaderVideoStreamInfo {
    list: {
        width: number;
        height: number;
        frameRate: number;
        codec: string;
        bandwidth?: number;
    }[];
    selectedIndex: number;
}
export interface IOLoaderAudioStreamInfo {
    list: {
        lang: string;
        codec: string;
        bandwidth?: number;
    }[];
    selectedIndex: number;
}
export interface IOLoaderSubtitleStreamInfo {
    list: {
        lang: string;
        codec: string;
    }[];
    selectedIndex: number;
}
export type IOLoaderOptions = {
    /**
     * 是否是直播
     */
    isLive?: boolean;
    /**
     * 预加载 chunk 大小
     */
    preload?: number;
    /**
     * 最大重试次数
     */
    retryCount?: number;
    /**
     * 重试间隔
     */
    retryInterval?: number;
    /**
     * 音频优先 codec（dash 或 hls 选择优先 codec）
     */
    preferAudioCodec?: string;
    /**
     * 视频优先 codec（dash 或 hls 选择优先 codec）
     */
    preferVideoCodec?: string;
    /**
     * 字幕优先 codec（dash 或 hls 选择优先 codec）
     */
    preferSubtitleCodec?: string;
    /**
     * 优先分辨率（dash 或 hls 选择优先分辨率）
     *
     * 设置宽度和高度 1920*720
     *
     * 设置宽度 1920
     *
     * 设置高度 *720
     */
    preferResolution?: string;
    /**
     * 音频优先 lang（dash 或 hls 选择优先 lang）
     */
    preferAudioLang?: string;
    /**
     * 字幕优先 lang（dash 或 hls 选择优先 lang）
     */
    preferSubtitleLang?: string;
};
export default abstract class IOLoader {
    options: IOLoaderOptions;
    protected status: IOLoaderStatus;
    protected retryCount: number;
    protected retryTimeout: Timeout;
    constructor(options?: IOLoaderOptions);
    /**
     * 打开 ioloader
     *
     * @param info
     * @param range
     *
     * @returns 成功返回 0, 失败返回错误码（负值）
     */
    abstract open(info: Data, range?: Range): Promise<int32>;
    /**
     * 读取数据到缓冲区
     *
     * @param buffer 可以放置数据的缓冲区，类 Uint8Array 结构
     * @param options 一些配置（比如 hls 和 dash 有相关配置项）
     *
     * @returns 返回写入的数据长度，失败返回错误码（负值）
     */
    abstract read(buffer: Uint8ArrayInterface, options?: Data): Promise<int32>;
    /**
     * 写出数据，一些协议如 rtmp、rtsp 需要与服务器交互数据
     *
     * @param buffer 要写出的数据，类 Uint8Array 结构
     *
     * @returns 成功返回 0，失败返回错误码（负值）
     */
    write(buffer: Uint8ArrayInterface): Promise<int32>;
    /**
     * seek 到指定位置
     *
     * @param pos 位置
     * @param options 一些配置（比如 hls 和 dash 有相关配置项）
     *
     * @returns 成功返回 0, 否则失败，可以返回错误码（负值）
     */
    abstract seek(pos: int64, options?: Data): Promise<int32>;
    /**
     * 数据总字节大小
     *
     * 没有返回 0n
     */
    abstract size(): Promise<int64>;
    /**
     * 停止 ioloader
     */
    abstract stop(): Promise<void>;
}
