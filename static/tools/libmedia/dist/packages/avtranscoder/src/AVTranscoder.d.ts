import { Emitter, type Data } from '@libmedia/common';
import { type WebAssemblyResource, compileResource as compile } from '@libmedia/cheap';
import { AVCodecID, AVMediaType } from '@libmedia/avutil';
import { type AVChapter } from '@libmedia/avformat';
import { FetchIOLoader, FileIOLoader, CustomIOLoader } from '@libmedia/avnetwork';
import { AudioCodecString2CodecId, Format2AVFormat, PixfmtString2AVPixelFormat, SampleFmtString2SampleFormat, VideoCodecString2CodecId } from '@libmedia/avutil/internal';
import * as eventType from './eventType';
import type { ControllerObserver } from './Controller';
export declare const Events: typeof eventType;
export interface AVTranscoderOptions {
    /**
     * 自定义 wasm 请求 base url
     *
     *  `${wasmBaseUrl}/decode/aac.wasm`
     */
    wasmBaseUrl?: string;
    getWasm?: (type: 'decoder' | 'resampler' | 'scaler' | 'encoder', codec?: AVCodecID, mediaType?: AVMediaType) => string | ArrayBuffer | WebAssemblyResource;
    onprogress?: (taskId: string, progress: number) => void;
}
export interface TaskOptions {
    input: {
        file: string | File | CustomIOLoader;
        format?: keyof (typeof Format2AVFormat);
        formatOptions?: Data;
        /**
         * 源扩展名
         * 强制指定扩展名，对没有扩展名的 url 链接使用
         */
        ext?: string;
        /**
         * http 请求配置
         */
        http?: {
            /**
             * http 请求需要添加的 header
             */
            headers?: Data;
            /**
             * http 请求的 credentials 配置
             */
            credentials?: RequestCredentials;
            /**
             * http 请求的 referrerPolicy 配置
             */
            referrerPolicy?: ReferrerPolicy;
        };
        /**
         * webtransport 配置
         */
        webtransport?: WebTransportOptions;
        /**
         * 是否启用 WebCodecs 解码
         */
        enableWebCodecs?: boolean;
        /**
         * 是否启用硬件解码
         */
        enableHardware?: boolean;
    };
    /**
     * 输出的帧在原始文件中的开始时间（毫秒）
     */
    start?: number;
    /**
     * 输出的帧在原始文件中的开始时间之后的持续时间（毫秒）
     */
    duration?: number;
    /**
     * 指定输出帧的数量
     */
    nbFrame?: number;
    /**
     * 使用输入的 pts dts 作为输出
     */
    copyTs?: boolean;
    /**
     * pts dts 强制从 0 开始
     */
    startAtZero?: boolean;
    /**
     * pts dts 强制为非负数
     */
    nonnegative?: boolean;
    output: {
        file: FileSystemFileHandle | {
            write: (buffer: Uint8Array<ArrayBuffer>) => void;
            appendBufferByPosition: (buffer: Uint8Array<ArrayBuffer>, pos: number) => void;
            seek: (pos: number) => void;
            close: () => void | Promise<void>;
        };
        format?: keyof (typeof Format2AVFormat);
        formatOptions?: Data;
        metadata?: Data;
        chapters?: AVChapter[];
        video?: {
            /**
             * 输出编码类型
             */
            codec?: keyof (typeof VideoCodecString2CodecId);
            /**
             * 是否不输出
             */
            disable?: boolean;
            /**
             * 输出宽度
             */
            width?: number;
            /**
             * 输出高度
             */
            height?: number;
            /**
             * 输出帧率
             */
            framerate?: number;
            /**
             * 输出码率
             */
            bitrate?: number;
            /**
             * 输出视频高宽比
             */
            aspect?: {
                den: number;
                num: number;
            };
            /**
             * 输出像素格式
             */
            pixfmt?: keyof (typeof PixfmtString2AVPixelFormat);
            /**
             * 输出关键帧间隔（毫秒）
             */
            keyFrameInterval?: number;
            /**
             * 是否启用 WebCodecs 编码
             */
            enableWebCodecs?: boolean;
            /**
             * 是否启用硬件编码
             */
            enableHardware?: boolean;
            /**
             * 配置编码器 profile
             */
            profile?: number;
            /**
             * 配置编码器 level
             */
            level?: number;
            /**
             * 配置最大 b 帧长度（默认 4）
             * 只有 wasm 的 h264/h265 编码器支持
             */
            delay?: number;
            /**
             * 编码器的参数设置 wasm 编码器生效
             *
             * 详情参考 ffmpeg 的编码器 options 配置
             */
            encoderOptions?: Data;
        };
        audio?: {
            /**
             * 输出编码类型
             */
            codec?: keyof (typeof AudioCodecString2CodecId);
            /**
             * 是否不输出
             */
            disable?: boolean;
            /**
             * 输出声道数
             */
            channels?: number;
            /**
             * 输出采样率
             */
            sampleRate?: number;
            /**
             * 输出码率
             */
            bitrate?: number;
            /**
             * 输出采样格式
             */
            sampleFmt?: keyof (typeof SampleFmtString2SampleFormat);
            /**
             * 配置编码器 profile
             */
            profile?: number;
        };
    };
}
export default class AVTranscoder extends Emitter implements ControllerObserver {
    static Events: typeof eventType;
    static Util: {
        compile: typeof compile;
        browser: import("@libmedia/common").Browser;
        os: import("@libmedia/common").OS;
    };
    static IOLoader: {
        CustomIOLoader: typeof CustomIOLoader;
        FetchIOLoader: typeof FetchIOLoader;
        FileIOLoader: typeof FileIOLoader;
    };
    /**
     * @hidden
     */
    static Resource: Map<string, WebAssemblyResource | ArrayBuffer>;
    private level;
    private DemuxThreadReady;
    private AudioThreadReady;
    private VideoThreadReady;
    private MuxThreadReady;
    private IOThread;
    private DemuxerThread;
    private MuxThread;
    private AudioDecoderThread;
    private AudioFilterThread;
    private AudioEncoderThread;
    private VideoDecoderThread;
    private VideoFilterThread;
    private VideoEncoderThread;
    private GlobalData;
    private tasks;
    private options;
    private reportTimer;
    constructor(options: AVTranscoderOptions);
    /**
     * @hidden
     */
    private getResource;
    /**
     * @hidden
     */
    private report;
    /**
     * @hidden
     */
    private startDemuxPipeline;
    /**
     * @hidden
     */
    private startVideoPipeline;
    /**
     * @hidden
     */
    private startAudioPipeline;
    /**
     * @hidden
     */
    private startMuxPipeline;
    /**
     * @hidden
     */
    private isHls;
    /**
     * @hidden
     */
    private isDash;
    ready(): Promise<void>;
    /**
     * @hidden
     */
    private changeAVStreamTimebase;
    /**
     * @hidden
     */
    private copyAVStreamInterface;
    /**
     * @hidden
     */
    private freeAVStreamInterface;
    /**
     * @hidden
     */
    private setTaskInput;
    /**
     * @hidden
     */
    private setTaskOutput;
    /**
     * @hidden
     */
    private analyzeInputStreams;
    /**
     * @hidden
     */
    private handleAudioStream;
    /**
     * @hidden
     */
    private handleVideoStream;
    /**
     * @hidden
     */
    private handleCopyStream;
    /**
     * @hidden
     */
    private clearTask;
    addTask(taskOptions: TaskOptions): Promise<string>;
    startTask(taskId: string): Promise<void>;
    pauseTask(taskId: string): Promise<void>;
    unpauseTask(taskId: string): Promise<void>;
    cancelTask(taskId: string): Promise<void>;
    destroy(): Promise<void>;
    setLogLevel(level: number): void;
    /**
     * @hidden
     */
    onGetDecoderResource(mediaType: AVMediaType, codecId: AVCodecID): Promise<WebAssemblyResource | ArrayBuffer>;
}
