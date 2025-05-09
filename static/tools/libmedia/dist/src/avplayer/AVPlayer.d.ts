import { AVCodecID, AVMediaType } from 'avutil/codec';
import IOPipeline from 'avpipeline/IOPipeline';
import DemuxPipeline from 'avpipeline/DemuxPipeline';
import AudioDecodePipeline from 'avpipeline/AudioDecodePipeline';
import { Thread } from 'cheap/thread/thread';
import Emitter, { EmitterOptions } from 'common/event/Emitter';
import compile, { WebAssemblyResource } from 'cheap/webassembly/compiler';
import AudioRenderPipeline from 'avpipeline/AudioRenderPipeline';
import VideoRenderPipeline from 'avpipeline/VideoRenderPipeline';
import { RenderMode } from 'avrender/image/ImageRender';
import { ControllerObserver } from './Controller';
import * as eventType from './eventType';
import Stats from 'avpipeline/struct/stats';
import MSEPipeline from './mse/MSEPipeline';
import { AVStreamInterface } from 'avutil/AVStream';
import { AVFormatContextInterface } from 'avformat/AVFormatContext';
import { Data, Fn } from 'common/types/type';
import { playerEventChanged, playerEventChanging, playerEventError, playerEventNoParam, playerEventProgress, playerEventSubtitleDelayChange, playerEventTime, playerEventVolumeChange } from './type';
import FetchIOLoader from 'avnetwork/ioLoader/FetchIOLoader';
import FileIOLoader from 'avnetwork/ioLoader/FileIOLoader';
import CustomIOLoader from 'avnetwork/ioLoader/CustomIOLoader';
import IODemuxPipelineProxy from './worker/IODemuxPipelineProxy';
import AudioPipelineProxy from './worker/AudioPipelineProxy';
import MSEPipelineProxy from './worker/MSEPipelineProxy';
import WebSocketIOLoader, { WebSocketOptions } from 'avnetwork/ioLoader/WebSocketIOLoader';
import SocketIOLoader from 'avnetwork/ioLoader/SocketIOLoader';
import WebTransportIOLoader from 'avnetwork/ioLoader/WebTransportIOLoader';
export interface ExternalSubtitle {
    /**
     * 字幕源，支持 url 和 文件
     */
    source: string | File;
    /**
     * 字幕语言
     */
    lang?: string;
    /**
     * 字幕标题
     */
    title?: string;
}
export interface AVPlayerOptions {
    /**
     * dom 挂载元素
     *
     * 也可以传一个 MediaStream 容器，AVPlayer 会将音视频写入 MediaStreamTrack 放入 MediaStream 可用于 webrtc 等应用
     */
    container: HTMLDivElement | MediaStream;
    /**
     * 自定义 wasm 请求 base url
     *
     *  `${wasmBaseUrl}/decode/aac.wasm`
     */
    wasmBaseUrl?: string;
    /**
     * 获取 wasm 回调
     *
     * @param type
     * @param codecId
     * @param mediaType
     * @returns
     */
    getWasm?: (type: 'decoder' | 'resampler' | 'stretchpitcher', codecId?: AVCodecID, mediaType?: AVMediaType) => string | ArrayBuffer | WebAssemblyResource;
    /**
     * 是否是直播
     */
    isLive?: boolean;
    /**
     * 自定义检查是否使用 mse 模式
     */
    checkUseMES?: (streams: AVStreamInterface[]) => boolean;
    /**
     * 是否启用硬件加速
     */
    enableHardware?: boolean;
    /**
     * 是否启用 WebGPU 渲染
     */
    enableWebGPU?: boolean;
    /**
     * 是否启用 WebCodecs 编解码
     */
    enableWebCodecs?: boolean;
    /**
     * 是否启用 worker，非多线程环境下使用
     *
     * 启用之后在非多线程下，io 和 demux 一个 worker；音频解码渲染一个 worker；视频解码渲染一个 worker
     */
    enableWorker?: boolean;
    /**
     * 是否循环播放
     */
    loop?: boolean;
    /**
     * 是否开启低延时模式（直播）开启之后会根据网络情况自动调整 buffer，尽量在不卡顿的情况下降低延时
     */
    lowLatency?: boolean;
    /**
     * jitter buffer 最大值 lowLatency 模式下影响最高延时（秒）
     */
    jitterBufferMax?: float;
    /**
     * jitter buffer 最小值 lowLatency 模式下影响最低延时（秒）
     */
    jitterBufferMin?: float;
    /**
     * 预加载 buffer 时长，点播使用（秒）
     */
    preLoadTime?: float;
    /**
     * 自定义查找播放流回调
     */
    findBestStream?: (streams: AVStreamInterface[], mediaType: AVMediaType) => AVStreamInterface;
    /**
     * 配置 audioWorklet 的缓冲区大小，以 128 采样为单位
     * 某些机器上 audioWorklet 线程与其他线程通信延迟较大会导致音频播放卡顿，此时可以调大这个
     *
     * 默认 桌面端 10 移动端 20
     */
    audioWorkletBufferLength?: int32;
}
export interface AVPlayerLoadOptions {
    /**
     * 源扩展名
     * 强制指定扩展名，对没有扩展名的 url 链接使用
     */
    ext?: string;
    /**
     * 需要一起加载的外挂字幕
     */
    externalSubtitles?: ExternalSubtitle[];
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
     * websocket 配置
     */
    websocket?: WebSocketOptions;
    /**
     * webtransport 配置
     */
    webtransport?: WebTransportOptions;
    /**
     * 如果 source 是被 Websocket 或者 WebTransport 代理的，这里传源地址
     * 像 rtmp 需要使用到这个源地址
     */
    uri?: string;
    /**
     * 透传给 format 的参数
     */
    formatOptions?: Data;
    /**
     * 设置源是否是直播，覆盖 AVPlayerOptions 里面的配置
     */
    isLive?: boolean;
}
export interface AVPlayerPlayOptions {
    /**
     * 是否播放音频
     */
    audio?: boolean;
    /**
     * 是否播放视频
     */
    video?: boolean;
    /**
     * 是否播放字幕
     */
    subtitle?: boolean;
}
export declare const AVPlayerSupportedCodecs: AVCodecID[];
export declare const enum AVPlayerStatus {
    STOPPED = 0,
    DESTROYING = 1,
    DESTROYED = 2,
    LOADING = 3,
    LOADED = 4,
    PLAYING = 5,
    PLAYED = 6,
    PAUSED = 7,
    SEEKING = 8,
    CHANGING = 9
}
export declare const enum AVPlayerProgress {
    OPEN_FILE = 0,
    ANALYZE_FILE = 1,
    LOAD_AUDIO_DECODER = 2,
    LOAD_VIDEO_DECODER = 3
}
export default class AVPlayer extends Emitter implements ControllerObserver {
    /**
     * @hidden
     */
    static Instances: AVPlayer[];
    static Util: {
        compile: typeof compile;
        browser: import("common/types/type").Browser;
        os: import("common/types/type").OS;
    };
    static IOLoader: {
        CustomIOLoader: typeof CustomIOLoader;
        FetchIOLoader: typeof FetchIOLoader;
        FileIOLoader: typeof FileIOLoader;
        WebSocketIOLoader: typeof WebSocketIOLoader;
        SocketIOLoader: typeof SocketIOLoader;
        WebTransportIOLoader: typeof WebTransportIOLoader;
    };
    static level: number;
    /**
     * @hidden
     */
    static DemuxThreadReady: Promise<void>;
    /**
     * @hidden
     */
    static AudioThreadReady: Promise<void>;
    /**
     * @hidden
     */
    static VideoThreadReady: Promise<void>;
    /**
     * @hidden
     */
    static MSEThreadReady: Promise<void>;
    /**
     * @hidden
     */
    static IODemuxProxy: IODemuxPipelineProxy;
    /**
     * @hidden
     */
    static AudioPipelineProxy: AudioPipelineProxy;
    /**
     * @hidden
     */
    static MSEPipelineProxy: MSEPipelineProxy;
    /**
     * @hidden
     * 下面的线程所有 AVPlayer 实例共享
     */
    static IOThread: Thread<IOPipeline>;
    /**
     * @hidden
     */
    static DemuxerThread: Thread<DemuxPipeline>;
    /**
     * @hidden
     */
    static AudioDecoderThread: Thread<AudioDecodePipeline>;
    /**
     * @hidden
     */
    static AudioRenderThread: Thread<AudioRenderPipeline>;
    /**
     * @hidden
     */
    static VideoRenderThread: Thread<VideoRenderPipeline>;
    /**
     * @hidden
     */
    static MSEThread: Thread<MSEPipeline>;
    static audioContext: AudioContext;
    /**
     * @hidden
     */
    static Resource: Map<string, WebAssemblyResource | ArrayBuffer>;
    private VideoDecoderThread;
    private VideoRenderThread;
    private VideoPipelineProxy;
    private GlobalData;
    taskId: string;
    subTaskId: string;
    subtitleTaskId: string;
    private ext;
    private source;
    private ioIPCPort;
    private options;
    private ioloader2DemuxerChannel;
    private demuxer2VideoDecoderChannel;
    private demuxer2AudioDecoderChannel;
    private videoDecoder2VideoRenderChannel;
    private audioDecoder2AudioRenderChannel;
    private audioRender2AudioWorkletChannel;
    private audioSourceNode;
    private gainNode;
    private formatContext;
    private canvas;
    private updateCanvas;
    private video;
    private audio;
    private controller;
    private volume;
    private playRate;
    private renderMode;
    private renderRotate;
    private flipHorizontal;
    private flipVertical;
    private useMSE;
    private audioEnded;
    private videoEnded;
    private status;
    private lastStatus;
    private playChannels;
    private seekedTimestamp;
    private isLive_;
    private statsController;
    private jitterBufferController;
    private selectedVideoStream;
    private selectedAudioStream;
    private selectedSubtitleStream;
    private lastSelectedInnerSubtitleStreamIndex;
    private subtitleRender;
    private externalSubtitleTasks;
    constructor(options: AVPlayerOptions);
    /**
     * 当前播放时间戳（毫秒）
     */
    get currentTime(): int64;
    /**
     * @hidden
     */
    private isCodecIdSupported;
    /**
     * @hidden
     */
    private findBestStream;
    private checkUseMSE;
    private createCanvas;
    private createVideo;
    private createAudio;
    private handleTimeupdate;
    private handleEnded;
    /**
     * 当前播放的源是否是 hls
     *
     * @returns
     */
    isHls(): boolean;
    /**
     * 当前播放的源是否是 dash
     *
     * @returns
     */
    isDash(): boolean;
    private getMinStartPTS;
    private getResource;
    private createSubtitleRender;
    /**
     * 加载外挂字幕
     *
     * @param externalSubtitle
     * @returns
     */
    loadExternalSubtitle(externalSubtitle: ExternalSubtitle): Promise<number>;
    /**
     * 加载媒体源，分析流信息
     *
     * @param source 媒体源，支持 url、File 和自定义 CustomIOLoader
     * @param options 配置项
     */
    load(source: string | File | CustomIOLoader, options?: AVPlayerLoadOptions): Promise<void>;
    private playUseMSE;
    private playUseDecoder;
    /**
     * 播放
     *
     * @param options
     * @returns
     */
    play(options?: AVPlayerPlayOptions): Promise<void>;
    /**
     * 暂停播放
     */
    pause(): Promise<void>;
    private doSeek;
    /**
     * 跳转到指定时间戳位置播放（只支持点播）
     * 某些文件可能不会 seek 成功
     *
     * @param timestamp 毫秒
     */
    seek(timestamp: int64): Promise<void>;
    /**
     * 获取流信息
     *
     * @returns
     */
    getStreams(): {
        /**
         * 媒体类型
         */
        mediaType: string;
        codecparProxy: import("@libmedia/avutil/struct/avcodecparameters").default;
        index: number;
        id: number;
        codecpar: pointer<import("@libmedia/avutil/struct/avcodecparameters").default>;
        nbFrames: int64;
        metadata: Data;
        duration: int64;
        startTime: int64;
        disposition: int32;
        timeBase: import("@libmedia/avutil/struct/rational").Rational;
    }[];
    /**
     * 获取当前选择播放的视频流 id
     *
     * @returns
     */
    getSelectedVideoStreamId(): number;
    /**
     * 获取当前选择播放的音频流 id
     *
     * @returns
     */
    getSelectedAudioStreamId(): number;
    /**
     * 获取当前选择播放的字幕流 id
     *
     * @returns
     */
    getSelectedSubtitleStreamId(): number;
    /**
     * 获取章节信息
     *
     * @returns
     */
    getChapters(): import("avformat/AVFormatContext").AVChapter[];
    /**
     * 获取总时长（毫秒）
     *
     * @returns
     */
    getDuration(): bigint;
    /**
     * 停止播放
     *
     * @returns
     */
    stop(): Promise<void>;
    setPlaybackRate(rate: number): void;
    /**
     * 获取倍数值
     *
     * @returns
     */
    getPlaybackRate(): double;
    /**
     * resume 音频
     */
    resume(): Promise<void>;
    /**
     * audioContext 是否是 suspended 状态
     */
    isSuspended(): boolean;
    /**
     * 获取播放音量
     *
     * @returns
     */
    getVolume(): double;
    /**
     * 设置播放音量
     *
     * @param volume [0, 3]
     *
     */
    setVolume(volume: number, force?: boolean): void;
    /**
     *
     * 获取渲染模式
     *
     * @param mode
     * @returns
     */
    getRenderMode(): RenderMode;
    /**
     * 设置画面填充模式
     *
     * - 0 自适应
     * - 1 填充
     *
     * @param mode
     */
    setRenderMode(mode: RenderMode): void;
    private getVideoTransformContext;
    /**
     * 设置视频渲染旋转角度
     *
     * @param angle
     */
    setRotate(angle: double): void;
    enableHorizontalFlip(enable: boolean): void;
    enableVerticalFlip(enable: boolean): void;
    /**
     * 设置是否循环播放
     *
     * @param enable
     */
    setLoop(enable: boolean): void;
    /**
     *
     * 设置字幕延时（毫秒）
     *
     * @param delay
     */
    setSubtitleDelay(delay: int32): void;
    /**
     * 获取字幕延时（毫秒）
     *
     * @returns
     */
    getSubtitleDelay(): 0 | int32;
    /**
     * 设置是否开启字幕显示
     *
     * @param enable
     */
    setSubtitleEnable(enable: boolean): void;
    /**
     * 重置渲染视图大小
     *
     * @param width
     * @param height
     */
    resize(width: number, height: number): void;
    /**
     * 当前是否是 mse 播放模式
     *
     * @returns
     */
    isMSE(): boolean;
    /**
     * 是否是 MediaStream 模式
     */
    isMediaStreamMode(): boolean;
    /**
     * 当前是否是 live 模式
     *
     * @returns
     */
    isLive(): boolean;
    /**
     * 获取视频列表（ dash 使用）
     *
     * @returns
     */
    getVideoList(): Promise<import("@libmedia/avnetwork/ioLoader/IOLoader").IOLoaderVideoStreamInfo>;
    /**
     * 获取音频列表（ dash 使用）
     *
     * @returns
     */
    getAudioList(): Promise<import("@libmedia/avnetwork/ioLoader/IOLoader").IOLoaderAudioStreamInfo>;
    /**
     * 获取字幕列表（ dash 使用）
     *
     * @returns
     */
    getSubtitleList(): Promise<import("@libmedia/avnetwork/ioLoader/IOLoader").IOLoaderSubtitleStreamInfo>;
    /**
     * 获取 status 状态
     *
     * @returns
     */
    getStatus(): AVPlayerStatus;
    /**
     * 是否播放了音频
     *
     * @returns
     */
    hasAudio(): boolean;
    /**
     * 是否播放了视频
     *
     * @returns
     */
    hasVideo(): boolean;
    /**
     * 是否播放了字幕
     *
     * @returns
     */
    hasSubtitle(): boolean;
    /**
     * 获取当前的播放源
     *
     * @returns
     */
    getSource(): string | File | CustomIOLoader;
    /**
     * 获取 formatContext 对象
     *
     * @returns
     */
    getFormatContext(): AVFormatContextInterface;
    /**
     * 获取当前加载的外挂字幕
     *
     * @returns
     */
    getExternalSubtitle(): {
        source: string | File;
        lang: string;
        title: string;
    }[];
    /**
     * 获取 AVPlayerOptions
     *
     * @returns
     */
    getOptions(): AVPlayerOptions;
    /**
     * 获取 audioContext 声音输出 Node，可拿给外部去处理
     */
    getAudioOutputNode(): AudioNode;
    /**
     * 判断是否处于画中画状态
     *
     * @returns
     */
    isPictureInPicture(): boolean;
    /**
     * 设置播放视频轨道
     *
     * @param id 流 id，dash 传 getVideoList 列表中的 index
     * @returns
     */
    selectVideo(id: number): Promise<void>;
    /**
     * 设置播放音频轨道
     *
     * @param id 流 id，dash 传 getAudioList 列表中的 index
     * @returns
     */
    selectAudio(id: number): Promise<void>;
    /**
     * 设置播放字幕轨道
     *
     * @param id 流 id，dash 传 getSubtitleList 列表中的 index
     * @returns
     */
    selectSubtitle(id: number): Promise<void>;
    /**
     * 播放视频下一帧，可用于逐帧播放，暂停状态下使用（不支持 mse 模式）
     */
    playNextFrame(): Promise<void>;
    /**
     * 全屏
     */
    enterFullscreen(): void;
    /**
     * 退出全屏
     */
    exitFullscreen(): void;
    /**
     * 获取截图
     *
     * @param type 生成图片格式
     * @param quality 生成图片质量
     */
    snapshot(type?: 'png' | 'jpeg' | 'webp', quality?: number): string;
    /**
     * 获取统计数据
     *
     * @returns
     */
    getStats(): Stats;
    /**
     * 销毁播放器
     *
     * @returns
     */
    destroy(): Promise<void>;
    /**
     * @hidden
     */
    onVideoEnded(): void;
    /**
     * @hidden
     */
    onAudioEnded(): void;
    /**
     * @hidden
     */
    onCanvasUpdated(): void;
    /**
     * @hidden
     */
    onGetDecoderResource(mediaType: AVMediaType, codecId: AVCodecID): Promise<WebAssemblyResource | string | ArrayBuffer>;
    /**
     * @hidden
     */
    onFirstVideoRendered(): void;
    /**
     * @hidden
     */
    onFirstAudioRendered(): void;
    /**
     * @hidden
     */
    onAudioStutter(): void;
    /**
     * @hidden
     */
    onVideoStutter(): void;
    /**
     * @hidden
     */
    onVideoDiscard(): void;
    /**
     * @hidden
     */
    onFirstVideoRenderedAfterUpdateCanvas(): void;
    /**
     * @hidden
     */
    onTimeUpdate(pts: int64): void;
    /**
     * @hidden
     */
    onMSESeek(time: number): void;
    /**
     * @hidden
     */
    onMasterTimerUpdate(time: int64): void;
    /**
     * @hidden
     */
    onAudioContextStateChange(): void;
    private createVideoDecoderThread;
    /**
     * @hidden
     */
    static startDemuxPipeline(enableWorker?: boolean): Promise<void>;
    /**
     * @hidden
     */
    static startAudioPipeline(enableWorker?: boolean): Promise<void>;
    /**
     * @hidden
     */
    static startVideoRenderPipeline(enableWorker?: boolean): Promise<void>;
    /**
     * @hidden
     */
    static startMSEPipeline(enableWorker?: boolean): Promise<void>;
    /**
     * 提前运行所有管线
     */
    static startPipelines(enableWorker?: boolean): Promise<void>;
    /**
     * 停止所有管线
     */
    static stopPipelines(): Promise<void>;
    /**
     * 设置日志等级
     *
     * @param level
     */
    static setLogLevel(level: number): void;
    on(event: typeof eventType.LOADING, listener: typeof playerEventNoParam, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.LOADED, listener: typeof playerEventNoParam, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.PLAYING, listener: typeof playerEventNoParam, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.PLAYED, listener: typeof playerEventNoParam, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.PAUSED, listener: typeof playerEventNoParam, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.STOPPED, listener: typeof playerEventNoParam, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.ENDED, listener: typeof playerEventNoParam, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.SEEKING, listener: typeof playerEventNoParam, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.SEEKED, listener: typeof playerEventNoParam, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.CHANGING, listener: typeof playerEventChanging, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.CHANGED, listener: typeof playerEventChanged, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.RESUME, listener: typeof playerEventNoParam, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.TIME, listener: typeof playerEventTime, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.STREAM_UPDATE, listener: typeof playerEventNoParam, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.FIRST_AUDIO_RENDERED, listener: typeof playerEventNoParam, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.FIRST_VIDEO_RENDERED, listener: typeof playerEventNoParam, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.ERROR, listener: typeof playerEventError, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.TIMEOUT, listener: typeof playerEventNoParam, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.AUDIO_CONTEXT_RUNNING, listener: typeof playerEventNoParam, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.PROGRESS, listener: typeof playerEventProgress, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.VOLUME_CHANGE, listener: typeof playerEventVolumeChange, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: typeof eventType.SUBTITLE_DELAY_CHANGE, listener: typeof playerEventSubtitleDelayChange, options?: Partial<EmitterOptions>): AVPlayer;
    on(event: string, listener: Fn, options?: Partial<EmitterOptions>): AVPlayer;
    one(event: string, listener: Fn, options?: Partial<EmitterOptions>): this;
}
