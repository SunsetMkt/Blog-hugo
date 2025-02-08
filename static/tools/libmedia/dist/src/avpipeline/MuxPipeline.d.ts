import Pipeline, { TaskOptions } from './Pipeline';
import IPCPort from 'common/network/IPCPort';
import { AVOFormatContext } from 'avformat/AVFormatContext';
import { AVFormat } from 'avutil/avformat';
import List from 'cheap/std/collection/List';
import { AVPacketPool, AVPacketRef } from 'avutil/struct/avpacket';
import { Mutex } from 'cheap/thread/mutex';
import LoopTask from 'common/timer/LoopTask';
import { AVStreamInterface } from 'avutil/AVStream';
import AVCodecParameters from 'avutil/struct/avcodecparameters';
import { Data } from 'common/types/type';
export interface MuxTaskOptions extends TaskOptions {
    isLive?: boolean;
    format: AVFormat;
    formatOptions: Data;
    avpacketList: pointer<List<pointer<AVPacketRef>>>;
    avpacketListMutex: pointer<Mutex>;
}
type SelfTask = MuxTaskOptions & {
    rightIPCPort: IPCPort;
    formatContext: AVOFormatContext;
    avpacketPool: AVPacketPool;
    loop: LoopTask;
    ended: boolean;
    streams: {
        stream: AVStreamInterface;
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
    updateAVCodecParameters(taskId: string, streamIndex: int32, codecpar: pointer<AVCodecParameters>): Promise<void>;
    start(taskId: string): Promise<number>;
    pause(taskId: string): Promise<void>;
    unpause(taskId: string): Promise<void>;
    registerTask(options: MuxTaskOptions): Promise<number>;
    unregisterTask(taskId: string): Promise<void>;
}
export {};
