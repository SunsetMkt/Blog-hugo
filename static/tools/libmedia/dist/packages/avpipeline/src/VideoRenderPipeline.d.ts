import { IPCPort } from '@libmedia/common/network';
import { AVFramePoolImpl, type AVFrameRef, type AVFrame } from '@libmedia/avutil';
import { type Mutex, type List } from '@libmedia/cheap';
import { MasterTimer, LoopTask } from '@libmedia/common/timer';
import { type ImageRender, type RenderMode } from '@libmedia/avrender';
import type { TaskOptions } from './Pipeline';
import Pipeline from './Pipeline';
import type { AlphaVideoFrame } from './struct/type';
declare enum AdjustStatus {
    None = 0,
    Accelerate = 1,
    Decelerate = 2
}
export interface VideoRenderTaskOptions extends TaskOptions {
    canvas: HTMLCanvasElement | OffscreenCanvas | WritableStream<VideoFrame>;
    renderMode: RenderMode;
    renderRotate: double;
    flipHorizontal: boolean;
    flipVertical: boolean;
    viewportWidth: int32;
    viewportHeight: int32;
    devicePixelRatio: double;
    enableWebGPU: boolean;
    startPTS: int64;
    avframeList: pointer<List<pointer<AVFrameRef>>>;
    avframeListMutex: pointer<Mutex>;
    enableJitterBuffer: boolean;
    isLive: boolean;
    sar: number;
}
type SelfTask = VideoRenderTaskOptions & {
    leftIPCPort: IPCPort;
    controlIPCPort: IPCPort;
    currentPTS: int64;
    lastAdjustTimestamp: int64;
    lastMasterPts: int64;
    masterTimer: MasterTimer;
    lastNotifyPTS: int64;
    playRate: int64;
    frontFrame: pointer<AVFrameRef> | VideoFrame | AlphaVideoFrame;
    backFrame: pointer<AVFrameRef> | VideoFrame | AlphaVideoFrame;
    renderFrame: pointer<AVFrameRef> | VideoFrame | AlphaVideoFrame;
    renderFrameCount: int64;
    loop: LoopTask;
    render: ImageRender;
    renderRedyed: boolean;
    renderRecreateCount: number;
    adjust: AdjustStatus;
    adjustDiff: int64;
    firstRendered: boolean;
    canvasUpdated: boolean;
    renderCreating: boolean;
    skipRender: boolean;
    isSupport: (frame: pointer<AVFrame> | VideoFrame | ImageBitmap) => boolean;
    frontBuffered: boolean;
    ended: boolean;
    seeking: boolean;
    seekSync: () => void;
    afterPullResolver: () => void;
    pausing: boolean;
    lastRenderTimestamp: number;
    avframePool: AVFramePoolImpl;
};
export default class VideoRenderPipeline extends Pipeline {
    tasks: Map<string, SelfTask>;
    constructor();
    private createTask;
    private pullFrame;
    private swap;
    private fakeSyncPts;
    private createRender;
    play(taskId: string): Promise<void>;
    restart(taskId: string): Promise<void>;
    pause(taskId: string): Promise<void>;
    unpause(taskId: string): Promise<void>;
    updateCanvas(taskId: string, canvas: HTMLCanvasElement | OffscreenCanvas): Promise<void>;
    setPlayRate(taskId: string, rate: double): Promise<void>;
    setRenderMode(taskId: string, mode: RenderMode): Promise<void>;
    setRenderRotate(taskId: string, rotate: double): Promise<void>;
    enableHorizontalFlip(taskId: string, enable: boolean): Promise<void>;
    enableVerticalFlip(taskId: string, enable: boolean): Promise<void>;
    resize(taskId: string, width: int32, height: int32): Promise<void>;
    setSkipRender(taskId: string, skip: boolean): Promise<void>;
    setMasterTime(taskId: string, masterTime: int64): Promise<void>;
    beforeSeek(taskId: string): Promise<void>;
    syncSeekTime(taskId: string, timestamp: int64, maxQueueLength?: number): Promise<void>;
    isEnd(taskId: string): Promise<boolean>;
    afterSeek(taskId: string, timestamp: int64): Promise<void>;
    renderNextFrame(taskId: string): Promise<void>;
    registerTask(options: VideoRenderTaskOptions): Promise<number>;
    unregisterTask(id: string): Promise<void>;
}
export {};
