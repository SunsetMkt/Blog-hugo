import type { AVIFormatContext } from '../AVFormatContext';
import type AVPacket from 'avutil/struct/avpacket';
import IFormat from './IFormat';
import { AVFormat } from 'avutil/avformat';
import type AVStream from 'avutil/AVStream';
import type { Rational } from 'avutil/struct/rational';
export interface IVvcFormatOptions {
    /**
     * 显示帧率
     */
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
    private naluType;
    private poc;
    private pocTid0;
    private sps;
    private naluReader;
    constructor(options?: IVvcFormatOptions);
    init(formatContext: AVIFormatContext): void;
    destroy(formatContext: AVIFormatContext): Promise<void>;
    private isFrameNalu;
    private readNaluFrame;
    readHeader(formatContext: AVIFormatContext): Promise<number>;
    private computePoc;
    private readAVPacket_;
    readAVPacket(formatContext: AVIFormatContext, avpacket: pointer<AVPacket>): Promise<number>;
    seek(formatContext: AVIFormatContext, stream: AVStream, timestamp: int64, flags: int32): Promise<int64>;
    getAnalyzeStreamsCount(): number;
}
