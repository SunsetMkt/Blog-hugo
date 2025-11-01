import type { TaskOptions } from './Pipeline';
import Pipeline from './Pipeline';
import type List from 'cheap/std/collection/List';
import type { AVFrameRef } from 'avutil/struct/avframe';
import type { Mutex } from 'cheap/thread/mutex';
import WasmAudioDecoder from 'avcodec/wasmcodec/AudioDecoder';
import type { WebAssemblyResource } from 'cheap/webassembly/compiler';
import AVFramePoolImpl from 'avutil/implement/AVFramePoolImpl';
import type { AVPacketPool, AVPacketRef } from 'avutil/struct/avpacket';
import AVCodecParameters from 'avutil/struct/avcodecparameters';
import WebAudioDecoder from 'avcodec/webcodec/AudioDecoder';
import type { Data } from 'common/types/type';
import type { AVCodecParametersSerialize } from 'avutil/util/serialize';
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
