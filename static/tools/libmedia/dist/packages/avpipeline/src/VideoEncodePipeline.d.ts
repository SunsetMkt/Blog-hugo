import { IPCPort } from '@libmedia/common/network';
import { AVFramePoolImpl, type AVFrameRef, type AVPacketPool, type AVPacketRef, type AVRational, type AVCodecParameters, type AVCodecID } from '@libmedia/avutil';
import { type WebAssemblyResource, type Mutex, type List } from '@libmedia/cheap';
import { WasmVideoEncoder, WebVideoEncoder } from '@libmedia/avcodec';
import type { TaskOptions } from './Pipeline';
import Pipeline from './Pipeline';
import type { Data } from '@libmedia/common';
export interface VideoEncodeTaskOptions extends TaskOptions {
    resource: ArrayBuffer | WebAssemblyResource;
    resourceExtraData?: Data;
    enableHardware: boolean;
    avpacketList: pointer<List<pointer<AVPacketRef>>>;
    avpacketListMutex: pointer<Mutex>;
    avframeList: pointer<List<pointer<AVFrameRef>>>;
    avframeListMutex: pointer<Mutex>;
    gop: int32;
    preferWebCodecs?: boolean;
    copyTs?: boolean;
}
type SelfTask = Omit<VideoEncodeTaskOptions, 'resource'> & {
    leftIPCPort: IPCPort;
    rightIPCPort: IPCPort;
    resource: WebAssemblyResource;
    softwareEncoder: WasmVideoEncoder | WebVideoEncoder;
    softwareEncoderOpened: boolean;
    hardwareEncoder?: WebVideoEncoder;
    targetEncoder: WasmVideoEncoder | WebVideoEncoder;
    avpacketCaches: pointer<AVPacketRef>[];
    inputEnd: boolean;
    encodeEnd: boolean;
    parameters: pointer<AVCodecParameters>;
    timeBase: AVRational;
    encoderFallbackReady: Promise<number>;
    avframePool: AVFramePoolImpl;
    avpacketPool: AVPacketPool;
    gopCounter: int32;
    firstEncoded: boolean;
    wasmEncoderOptions?: Data;
};
export interface VideoEncodeTaskInfo {
    codecId: AVCodecID;
    width: int32;
    height: int32;
    framerate: float;
    hardware: boolean;
}
export default class VideoEncodePipeline extends Pipeline {
    tasks: Map<string, SelfTask>;
    constructor();
    private createWebcodecEncoder;
    private createWasmcodecEncoder;
    private createTask;
    private openSoftwareEncoder;
    open(taskId: string, codecpar: pointer<AVCodecParameters>, timeBase: AVRational, wasmEncoderOptions?: Data): Promise<number>;
    resetTask(taskId: string): Promise<void>;
    getExtraData(taskId: string): Promise<Uint8Array<ArrayBufferLike>>;
    getColorSpace(taskId: string): Promise<{
        colorSpace: import("@libmedia/avutil").AVColorSpace;
        colorPrimaries: import("@libmedia/avutil").AVColorPrimaries;
        colorTrc: import("@libmedia/avutil").AVColorTransferCharacteristic;
    } | {
        colorSpace: int32;
        colorPrimaries: int32;
        colorTrc: int32;
    }>;
    registerTask(options: VideoEncodeTaskOptions): Promise<number>;
    unregisterTask(taskId: string): Promise<void>;
    getTasksInfo(): Promise<VideoEncodeTaskInfo[]>;
}
export {};
