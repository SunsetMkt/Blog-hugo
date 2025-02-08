import Pipeline, { TaskOptions } from './Pipeline';
import IPCPort from 'common/network/IPCPort';
import List from 'cheap/std/collection/List';
import { AVFrameRef } from 'avutil/struct/avframe';
import { Mutex } from 'cheap/thread/mutex';
import { WebAssemblyResource } from 'cheap/webassembly/compiler';
import AVFramePoolImpl from 'avutil/implement/AVFramePoolImpl';
import { AVPacketPool, AVPacketRef } from 'avutil/struct/avpacket';
import AVCodecParameters from 'avutil/struct/avcodecparameters';
import { AVCodecID } from 'avutil/codec';
import WasmVideoEncoder from 'avcodec/wasmcodec/VideoEncoder';
import WebVideoEncoder from 'avcodec/webcodec/VideoEncoder';
import { Rational } from 'avutil/struct/rational';
import { Data } from 'common/types/type';
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
    timeBase: Rational;
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
    open(taskId: string, codecpar: pointer<AVCodecParameters>, timeBase: Rational, wasmEncoderOptions?: Data): Promise<number>;
    resetTask(taskId: string): Promise<void>;
    getExtraData(taskId: string): Promise<Uint8Array<ArrayBufferLike>>;
    getColorSpace(taskId: string): Promise<{
        colorSpace: import("@libmedia/avutil/pixfmt").AVColorSpace;
        colorPrimaries: import("@libmedia/avutil/pixfmt").AVColorPrimaries;
        colorTrc: import("@libmedia/avutil/pixfmt").AVColorTransferCharacteristic;
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
