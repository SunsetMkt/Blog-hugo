import { type AVFrameRef, type AVCodecParameters, type AVPacketPool, type AVPacketRef, AVFramePoolImpl, type AVRational } from '@libmedia/avutil';
import { type WebAssemblyResource, type Mutex, type List } from '@libmedia/cheap';
import { WasmAudioEncoder, WebAudioEncoder } from '@libmedia/avcodec';
import type { TaskOptions } from './Pipeline';
import Pipeline from './Pipeline';
import type { Data } from '@libmedia/common';
export interface AudioEncodeTaskOptions extends TaskOptions {
    resource: ArrayBuffer | WebAssemblyResource;
    avpacketList: pointer<List<pointer<AVPacketRef>>>;
    avpacketListMutex: pointer<Mutex>;
    avframeList: pointer<List<pointer<AVFrameRef>>>;
    avframeListMutex: pointer<Mutex>;
    copyTs?: boolean;
}
type SelfTask = Omit<AudioEncodeTaskOptions, 'resource'> & {
    encoder: WasmAudioEncoder | WebAudioEncoder;
    resource: WebAssemblyResource;
    avpacketCaches: pointer<AVPacketRef>[];
    parameters: pointer<AVCodecParameters>;
    inputEnd: boolean;
    avframePool: AVFramePoolImpl;
    avpacketPool: AVPacketPool;
    wasmEncoderOptions?: Data;
};
export default class AudioEncodePipeline extends Pipeline {
    tasks: Map<string, SelfTask>;
    constructor();
    private createWebcodecEncoder;
    private createTask;
    open(taskId: string, parameters: pointer<AVCodecParameters>, timeBase: AVRational, wasmEncoderOptions?: Data): Promise<number>;
    getExtraData(taskId: string): Promise<Uint8Array<ArrayBufferLike>>;
    resetTask(taskId: string): Promise<void>;
    registerTask(options: AudioEncodeTaskOptions): Promise<number>;
    unregisterTask(taskId: string): Promise<void>;
}
export {};
