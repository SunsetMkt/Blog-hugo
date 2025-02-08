import { AVIFormatContext } from '../AVFormatContext';
import AVPacket from 'avutil/struct/avpacket';
import IFormat from './IFormat';
import { AVFormat } from 'avutil/avformat';
import AVStream from 'avutil/AVStream';
import { Rational } from 'avutil/struct/rational';
export interface IH264FormatOptions {
    framerate?: Rational;
}
export default class IH264Format extends IFormat {
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
    private picOrderCntMsb;
    private lastPicOrderCntLsb;
    private frameNumberOffset;
    private prevFrameNumber;
    private sps;
    private naluReader;
    constructor(options?: IH264FormatOptions);
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
