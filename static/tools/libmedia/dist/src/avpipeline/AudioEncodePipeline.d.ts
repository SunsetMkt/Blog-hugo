import type { WebAssemblyResource } from 'cheap/webassembly/compiler';
import type { TaskOptions } from './Pipeline';
import Pipeline from './Pipeline';
import type List from 'cheap/std/collection/List';
import type { AVPacketPool, AVPacketRef } from 'avutil/struct/avpacket';
import type { Mutex } from 'cheap/thread/mutex';
import type { AVFrameRef } from 'avutil/struct/avframe';
import WasmAudioEncoder from 'avcodec/wasmcodec/AudioEncoder';
import WebAudioEncoder from 'avcodec/webcodec/AudioEncoder';
import type AVCodecParameters from 'avutil/struct/avcodecparameters';
import AVFramePoolImpl from 'avutil/implement/AVFramePoolImpl';
import type { Rational } from 'avutil/struct/rational';
import type { Data } from 'common/types/type';
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
    open(taskId: string, parameters: pointer<AVCodecParameters>, timeBase: Rational, wasmEncoderOptions?: Data): Promise<number>;
    getExtraData(taskId: string): Promise<Uint8Array<ArrayBufferLike>>;
    resetTask(taskId: string): Promise<void>;
    registerTask(options: AudioEncodeTaskOptions): Promise<number>;
    unregisterTask(taskId: string): Promise<void>;
}
export {};
