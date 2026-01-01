import { type AVPacketPool, type AVPacketRef, AVFormat, type AVStreamInterface, type AVStream, type AVCodecParameters } from '@libmedia/avutil';
import { type Mutex, type List } from '@libmedia/cheap';
import { LoopTask } from '@libmedia/common/timer';
import { IPCPort } from '@libmedia/common/network';
import { type AVChapter, type AVOFormatContext } from '@libmedia/avformat';
import type { TaskOptions } from './Pipeline';
import Pipeline from './Pipeline';
import type { Data } from '@libmedia/common';
export interface MuxTaskOptions extends TaskOptions {
    isLive?: boolean;
    format: AVFormat;
    formatOptions: Data;
    avpacketList: pointer<List<pointer<AVPacketRef>>>;
    avpacketListMutex: pointer<Mutex>;
    nonnegative?: boolean;
    zeroStart?: boolean;
}
type SelfTask = MuxTaskOptions & {
    rightIPCPort: IPCPort;
    formatContext: AVOFormatContext;
    avpacketPool: AVPacketPool;
    loop: LoopTask;
    ended: boolean;
    streams: {
        stream: AVStream;
        pullIPC: IPCPort;
        avpacketQueue: pointer<AVPacketRef>[];
        ended: boolean;
        pulling: Promise<void>;
    }[];
};
export default class MuxPipeline extends Pipeline {
    tasks: Map<string, SelfTask>;
    constructor();
    private createTask;
    open(taskId: string): Promise<0 | -1 | -2>;
    addStream(taskId: string, stream: AVStreamInterface, port: MessagePort): Promise<void>;
    addFormatContextMetadata(taskId: string, metadata: Data): Promise<void>;
    addFormatContextChapters(taskId: string, chapters: AVChapter[]): Promise<void>;
    updateAVCodecParameters(taskId: string, streamId: int32, codecpar: pointer<AVCodecParameters>): Promise<void>;
    start(taskId: string): Promise<number>;
    pause(taskId: string): Promise<void>;
    unpause(taskId: string): Promise<void>;
    registerTask(options: MuxTaskOptions): Promise<number>;
    unregisterTask(taskId: string): Promise<void>;
}
export {};
