import type AVStream from 'avutil/AVStream';
import type { AVIFormatContext } from '../AVFormatContext';
import type AVPacket from 'avutil/struct/avpacket';
import IFormat from './IFormat';
import { AVFormat } from 'avutil/avformat';
export default class IAacFormat extends IFormat {
    type: AVFormat;
    private frameType;
    private fileSize;
    private currentPts;
    private latmFilter;
    private encodeSampleRate;
    private currentPos;
    private pendingData;
    private firstFramePos;
    private pendingPos;
    private streamMuxConfig;
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
