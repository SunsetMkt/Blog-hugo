import { AVIFormatContext } from '../AVFormatContext';
import AVPacket from 'avutil/struct/avpacket';
import IFormat from './IFormat';
import { AVFormat } from 'avutil/avformat';
import AVStream from 'avutil/AVStream';
export default class IMatroskaFormat extends IFormat {
    type: AVFormat;
    private context;
    private blockReader;
    constructor();
    init(formatContext: AVIFormatContext): void;
    private analyzeStreams;
    readHeader(formatContext: AVIFormatContext): Promise<number>;
    private parseAdditions;
    private parseBlock;
    private addClusterIndex;
    private readAVPacket_;
    readAVPacket(formatContext: AVIFormatContext, avpacket: pointer<AVPacket>): Promise<number>;
    private syncTopLevelElement;
    seek(formatContext: AVIFormatContext, stream: AVStream, timestamp: int64, flags: int32): Promise<int64>;
    getAnalyzeStreamsCount(): number;
}
