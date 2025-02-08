import { AVIFormatContext } from '../AVFormatContext';
import AVPacket from 'avutil/struct/avpacket';
import IFormat from './IFormat';
import { AVFormat } from 'avutil/avformat';
import AVStream from 'avutil/AVStream';
import { Rational } from 'avutil/struct/rational';
export interface IHevcFormatOptions {
    framerate?: Rational;
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
