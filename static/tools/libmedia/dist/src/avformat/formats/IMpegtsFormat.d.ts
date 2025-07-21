import AVPacket from 'avutil/struct/avpacket';
import { AVIFormatContext } from '../AVFormatContext';
import IFormat from './IFormat';
import { AVFormat } from 'avutil/avformat';
import AVStream from 'avutil/AVStream';
export default class IMpegtsFormat extends IFormat {
    type: AVFormat;
    private context;
    private firstTSPacketPos;
    private cacheAVPacket;
    constructor();
    init(formatContext: AVIFormatContext): void;
    destroy(formatContext: AVIFormatContext): Promise<void>;
    readHeader(formatContext: AVIFormatContext): Promise<number>;
    private checkExtradata;
    private handlePES;
    private parsePESSlice;
    private readAVPacket_;
    readAVPacket(formatContext: AVIFormatContext, avpacket: pointer<AVPacket>): Promise<number>;
    private syncTSPacket;
    seek(formatContext: AVIFormatContext, stream: AVStream, timestamp: int64, flags: int32): Promise<int64>;
    getAnalyzeStreamsCount(): number;
}
