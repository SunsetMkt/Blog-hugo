import type { TaskOptions } from './Pipeline';
import Pipeline from './Pipeline';
import IPCPort from 'common/network/IPCPort';
import type { AVChapter, AVOFormatContext } from 'avformat/AVFormatContext';
import { AVFormat } from 'avutil/avformat';
import type List from 'cheap/std/collection/List';
import type { AVPacketPool, AVPacketRef } from 'avutil/struct/avpacket';
import type { Mutex } from 'cheap/thread/mutex';
import LoopTask from 'common/timer/LoopTask';
import { type AVStreamInterface } from 'avutil/AVStream';
import type AVStream from 'avutil/AVStream';
import type AVCodecParameters from 'avutil/struct/avcodecparameters';
import type { Data } from 'common/types/type';
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
