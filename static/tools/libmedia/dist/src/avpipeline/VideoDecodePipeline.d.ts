import Pipeline, { TaskOptions } from './Pipeline';
import IPCPort from 'common/network/IPCPort';
import List from 'cheap/std/collection/List';
import { AVFrameRef } from 'avutil/struct/avframe';
import { Mutex } from 'cheap/thread/mutex';
import WasmVideoDecoder, { AVDiscard } from 'avcodec/wasmcodec/VideoDecoder';
import WebVideoDecoder from 'avcodec/webcodec/VideoDecoder';
import { WebAssemblyResource } from 'cheap/webassembly/compiler';
import AVFramePoolImpl from 'avutil/implement/AVFramePoolImpl';
import { AVPacketPool, AVPacketRef } from 'avutil/struct/avpacket';
import AVCodecParameters from 'avutil/struct/avcodecparameters';
import { AVCodecID } from 'avutil/codec';
import { Data } from 'common/types/type';
import { AVCodecParametersSerialize } from 'avutil/util/serialize';
export interface VideoDecodeTaskOptions extends TaskOptions {
    resource: ArrayBuffer | WebAssemblyResource;
    enableHardware: boolean;
    avpacketList: pointer<List<pointer<AVPacketRef>>>;
    avpacketListMutex: pointer<Mutex>;
    avframeList: pointer<List<pointer<AVFrameRef>>>;
    avframeListMutex: pointer<Mutex>;
    preferWebCodecs?: boolean;
}
type SelfTask = Omit<VideoDecodeTaskOptions, 'resource'> & {
    resource: WebAssemblyResource;
    leftIPCPort: IPCPort;
    rightIPCPort: IPCPort;
    softwareDecoder: WasmVideoDecoder | WebVideoDecoder;
    softwareDecoderOpened: boolean;
    hardwareDecoder?: WebVideoDecoder;
    targetDecoder: WasmVideoDecoder | WebVideoDecoder;
    frameCaches: (pointer<AVFrameRef> | VideoFrame)[];
    inputEnd: boolean;
    needKeyFrame: boolean;
    parameters: pointer<AVCodecParameters>;
    hardwareRetryCount: number;
    lastDecodeTimestamp: number;
    firstDecoded: boolean;
    decoderFallbackReady: Promise<number>;
    avframePool: AVFramePoolImpl;
    avpacketPool: AVPacketPool;
    wasmDecoderOptions?: Data;
    discard: AVDiscard;
    playRate: double;
};
export interface VideoDecodeTaskInfo {
    codecId: AVCodecID;
    width: int32;
    height: int32;
    framerate: float;
    hardware: boolean;
}
export default class VideoDecodePipeline extends Pipeline {
    tasks: Map<string, SelfTask>;
    constructor();
    private createWebCodecDecoder;
    private createWasmcodecDecoder;
    private pullAVPacketInternal;
    private createTask;
    private openSoftwareDecoder;
    reopenDecoder(taskId: string, parameters: AVCodecParametersSerialize | pointer<AVCodecParameters>, resource?: string | ArrayBuffer | WebAssemblyResource, wasmDecoderOptions?: Data): Promise<number>;
    open(taskId: string, parameters: AVCodecParametersSerialize | pointer<AVCodecParameters>, wasmDecoderOptions?: Data): Promise<number>;
    setPlayRate(taskId: string, rate: double): Promise<void>;
    setNextDiscard(taskId: string): Promise<void>;
    setPrevDiscard(taskId: string): Promise<void>;
    resetTask(taskId: string): Promise<void>;
    registerTask(options: VideoDecodeTaskOptions): Promise<number>;
    unregisterTask(taskId: string): Promise<void>;
    getTasksInfo(): Promise<VideoDecodeTaskInfo[]>;
}
export {};
