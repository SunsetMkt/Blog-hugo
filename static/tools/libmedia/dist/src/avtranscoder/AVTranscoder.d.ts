import { AVCodecID, AVMediaType } from 'avutil/codec';
import compile, { WebAssemblyResource } from 'cheap/webassembly/compiler';
import { AudioCodecString2CodecId, Format2AVFormat, PixfmtString2AVPixelFormat, SampleFmtString2SampleFormat, VideoCodecString2CodecId } from 'avutil/stringEnum';
import IOWriterSync from 'common/io/IOWriterSync';
import Emitter from 'common/event/Emitter';
import { ControllerObserver } from './Controller';
import { Data } from 'common/types/type';
import CustomIOLoader from 'avnetwork/ioLoader/CustomIOLoader';
import FetchIOLoader from 'avnetwork/ioLoader/FetchIOLoader';
import FileIOLoader from 'avnetwork/ioLoader/FileIOLoader';
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
    start?: number;
    duration?: number;
    nbFrame?: number;
    output: {
        file: FileSystemFileHandle | IOWriterSync;
        format?: keyof (typeof Format2AVFormat);
        formatOptions?: Data;
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
    static Util: {
        compile: typeof compile;
        browser: import("common/types/type").Browser;
        os: import("common/types/type").OS;
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
    private getResource;
    private report;
    private startDemuxPipeline;
    private startVideoPipeline;
    private startAudioPipeline;
    private startMuxPipeline;
    private isHls;
    private isDash;
    ready(): Promise<void>;
    private changeAVStreamTimebase;
    private copyAVStreamInterface;
    private setTaskInput;
    private setTaskOutput;
    private analyzeInputStreams;
    private handleAudioStream;
    private handleVideoStream;
    private handleCopyStream;
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
