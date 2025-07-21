import Pipeline, { TaskOptions } from './Pipeline';
import IPCPort from 'common/network/IPCPort';
import AVFrame, { AVFrameRef } from 'avutil/struct/avframe';
import List from 'cheap/std/collection/List';
import { Mutex } from 'cheap/thread/mutex';
import AVFramePoolImpl from 'avutil/implement/AVFramePoolImpl';
import ImageRender from 'avrender/image/ImageRender';
import { RenderMode } from 'avrender/image/ImageRender';
import LoopTask from 'common/timer/LoopTask';
import MasterTimer from 'common/timer/MasterTimer';
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
    frontFrame: pointer<AVFrameRef> | VideoFrame;
    backFrame: pointer<AVFrameRef> | VideoFrame;
    renderFrame: pointer<AVFrameRef> | VideoFrame;
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
    afterSeek(taskId: string, timestamp: int64): Promise<void>;
    renderNextFrame(taskId: string): Promise<void>;
    registerTask(options: VideoRenderTaskOptions): Promise<number>;
    unregisterTask(id: string): Promise<void>;
}
export {};
