import { AVPacketRef } from 'avutil/struct/avpacket';
import AVCodecParameters from 'avutil/struct/avcodecparameters';
import List from 'cheap/std/collection/List';
import { Mutex } from 'cheap/thread/mutex';
export interface SubtitleRenderOptions {
    delay?: int64;
    getCurrentTime: () => int64;
    avpacketList?: pointer<List<pointer<AVPacketRef>>>;
    avpacketListMutex?: pointer<Mutex>;
    codecpar: pointer<AVCodecParameters>;
    dom: HTMLElement;
    container: HTMLElement;
    videoWidth: int32;
    videoHeight: int32;
}
export default class SubtitleRender {
    private decoder;
    private loop;
    private demuxer2SubtitleRenderChannels;
    private leftPorts;
    private currentPort;
    private render;
    private queue;
    private ended;
    private options;
    private pulling;
    private formats;
    private avpacketPool;
    private delay;
    private enable;
    constructor(options: SubtitleRenderOptions);
    private getAssHeader;
    private createDecoder;
    private text2AssEvent;
    private webvtt2AssEvent;
    private pull;
    getDemuxerPort(taskId: string): MessagePort;
    start(): void;
    stop(): void;
    pause(): void;
    reset(): void;
    reopenDecoder(codecpar: pointer<AVCodecParameters>): void;
    updateVideoResolution(videoWidth: number, videoHeight: number): void;
    setDemuxTask(taskId: string): void;
    destroy(): void;
    setDelay(d: int64): void;
    getDelay(): int64;
}
