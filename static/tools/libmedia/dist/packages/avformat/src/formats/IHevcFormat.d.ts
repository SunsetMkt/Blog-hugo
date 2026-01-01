import type { AVIFormatContext } from '../AVFormatContext';
import IFormat from './IFormat';
import { AVFormat, type AVPacket, type AVStream, type AVRational } from '@libmedia/avutil';
export interface IHevcFormatOptions {
    /**
     * 显示帧率
     */
    framerate?: AVRational;
}
export default class IHevcFormat extends IFormat {
    type: AVFormat;
    private options;
    private currentDts;
    private currentPts;
    private step;
    private slices;
    private naluPos;
    private queue;
    private bitReader;
    private sliceType;
    private poc;
    private pocTid0;
    private sps;
    private pps;
    private naluReader;
    constructor(options?: IHevcFormatOptions);
    init(formatContext: AVIFormatContext): void;
    destroy(formatContext: AVIFormatContext): Promise<void>;
    private isFrameNalu;
    private readNaluFrame;
    readHeader(formatContext: AVIFormatContext): Promise<number>;
    private readAVPacket_;
    readAVPacket(formatContext: AVIFormatContext, avpacket: pointer<AVPacket>): Promise<number>;
    seek(formatContext: AVIFormatContext, stream: AVStream, timestamp: int64, flags: int32): Promise<int64>;
    getAnalyzeStreamsCount(): number;
}
