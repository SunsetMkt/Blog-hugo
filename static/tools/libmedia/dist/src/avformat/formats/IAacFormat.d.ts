import AVStream from 'avutil/AVStream';
import { AVIFormatContext } from '../AVFormatContext';
import AVPacket from 'avutil/struct/avpacket';
import IFormat from './IFormat';
import { AVFormat } from 'avutil/avformat';
export default class IAacFormat extends IFormat {
    type: AVFormat;
    private frameType;
    private fileSize;
    private currentPts;
    private latmFilter;
    private encodeSampleRate;
    constructor();
    init(formatContext: AVIFormatContext): void;
    destroy(formatContext: AVIFormatContext): Promise<void>;
    private estimateTotalBlock;
    private parseTransportStreamTimestamp;
    readHeader(formatContext: AVIFormatContext): Promise<number>;
    readAVPacket(formatContext: AVIFormatContext, avpacket: pointer<AVPacket>): Promise<number>;
    private syncFrame;
    seek(formatContext: AVIFormatContext, stream: AVStream, timestamp: int64, flags: int32): Promise<int64>;
    getAnalyzeStreamsCount(): number;
}
