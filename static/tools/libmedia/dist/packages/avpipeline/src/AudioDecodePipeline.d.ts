import { type AVFrameRef, type AVCodecParametersSerialize, AVCodecParameters, type AVPacketPool, type AVPacketRef, AVFramePoolImpl } from '@libmedia/avutil';
import { type WebAssemblyResource, type Mutex, type List } from '@libmedia/cheap';
import { WebAudioDecoder, WasmAudioDecoder } from '@libmedia/avcodec';
import type { TaskOptions } from './Pipeline';
import Pipeline from './Pipeline';
import type { Data } from '@libmedia/common';
export interface AudioDecodeTaskOptions extends TaskOptions {
    resource: ArrayBuffer | WebAssemblyResource;
    avpacketList: pointer<List<pointer<AVPacketRef>>>;
    avpacketListMutex: pointer<Mutex>;
    avframeList: pointer<List<pointer<AVFrameRef>>>;
    avframeListMutex: pointer<Mutex>;
}
type SelfTask = Omit<AudioDecodeTaskOptions, 'resource'> & {
    resource: WebAssemblyResource;
    decoder: WasmAudioDecoder | WebAudioDecoder;
    frameCaches: pointer<AVFrameRef>[];
    inputEnd: boolean;
    parameters: pointer<AVCodecParameters>;
    lastDecodeTimestamp: number;
    avframePool: AVFramePoolImpl;
    avpacketPool: AVPacketPool;
    wasmDecoderOptions?: Data;
    pending?: Promise<void>;
    pendingResolve?: () => void;
};
export default class AudioDecodePipeline extends Pipeline {
    tasks: Map<string, SelfTask>;
    constructor();
    private createWebcodecDecoder;
    private createWasmcodecDecoder;
    private pullAVPacketInternal;
    private createTask;
    open(taskId: string, parameters: AVCodecParametersSerialize | pointer<AVCodecParameters>, wasmDecoderOptions?: Data): Promise<number>;
    beforeReopenDecoder(taskId: string): Promise<void>;
    reopenDecoder(taskId: string, parameters: AVCodecParametersSerialize | pointer<AVCodecParameters>, resource?: string | ArrayBuffer | WebAssemblyResource, wasmDecoderOptions?: Data): Promise<number>;
    resetTask(taskId: string): Promise<void>;
    registerTask(options: AudioDecodeTaskOptions): Promise<number>;
    unregisterTask(taskId: string): Promise<void>;
}
export {};
