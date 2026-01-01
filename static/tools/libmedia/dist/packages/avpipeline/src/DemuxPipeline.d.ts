import { type AVPacketPool, type AVPacketRef, AVFormat } from '@libmedia/avutil';
import { type Mutex, type List } from '@libmedia/cheap';
import { IOReader } from '@libmedia/common/io';
import { LoopTask } from '@libmedia/common/timer';
import { type RpcMessage, IPCPort } from '@libmedia/common/network';
import { type AVFormatContextInterface, type AVIFormatContext } from '@libmedia/avformat';
import type { TaskOptions } from './Pipeline';
import Pipeline from './Pipeline';
import type { Data } from '@libmedia/common';
export declare const STREAM_INDEX_ALL = -1;
export interface DemuxTaskOptions extends TaskOptions {
    format?: AVFormat;
    bufferLength?: number;
    isLive?: boolean;
    ioloaderOptions?: Data;
    formatOptions?: Data;
    mainTaskId?: string;
    avpacketList: pointer<List<pointer<AVPacketRef>>>;
    avpacketListMutex: pointer<Mutex>;
    flags?: int32;
}
type SelfTask = DemuxTaskOptions & {
    leftIPCPort: IPCPort;
    rightIPCPorts: Map<number, IPCPort & {
        streamIndex?: number;
    }>;
    controlIPCPort: IPCPort;
    formatContext: AVIFormatContext;
    ioReader: IOReader;
    iBuffer: pointer<uint8>;
    oBuffer: pointer<uint8>;
    cacheAVPackets: Map<number, pointer<AVPacketRef>[]>;
    pendingAVPackets: Map<number, pointer<AVPacketRef>[]>;
    cacheRequests: Map<number, RpcMessage>;
    streamIndexFlush: Map<number, boolean>;
    realFormat: AVFormat;
    demuxEnded: boolean;
    loop: LoopTask;
    gopCounter: int32;
    lastKeyFramePts: int64;
    lastAudioDts: int64;
    lastVideoDts: int64;
    avpacketPool: AVPacketPool;
};
export default class DemuxPipeline extends Pipeline {
    tasks: Map<string, SelfTask>;
    constructor();
    private createTask;
    openStream(taskId: string, maxProbeDuration?: int32): Promise<int32 | -1 | -2>;
    getFormat(taskId: string): Promise<AVFormat>;
    analyzeStreams(taskId: string): Promise<AVFormatContextInterface | int32>;
    private replyAVPacket;
    connectStreamTask(taskId: string, streamIndex: number, port: MessagePort): Promise<void>;
    addPendingStream(taskId: string, streamIndex: number): Promise<void>;
    changeConnectStream(taskId: string, newStreamIndex: number, oldStreamIndex: number, force?: boolean, start?: boolean): Promise<void>;
    private doDemux;
    private doAttachedPicture;
    startDemux(taskId: string, isLive: boolean, minQueueLength: int32): Promise<void>;
    seek(taskId: string, timestamp: int64, flags: int32, streamIndex?: int32): Promise<int64>;
    /**
     * 裁剪 avpacket 队列大小
     *
     * @param taskId
     * @param max （毫秒）
     */
    croppingAVPacketQueue(taskId: string, max: int64): Promise<void>;
    setAVStreamDiscard(taskId: string, streamIndex: int32, discard: int32): Promise<void>;
    stop(taskId: string): Promise<void>;
    registerTask(options: DemuxTaskOptions): Promise<number>;
    unregisterTask(taskId: string): Promise<void>;
}
export {};
