import { AVIFormatContext } from '../AVFormatContext';
import AVPacket from 'avutil/struct/avpacket';
import IFormat from './IFormat';
import { AVFormat } from 'avutil/avformat';
import AVStream from 'avutil/AVStream';
export interface IRtspFormatOptions {
    uri: string;
}
export default class IRtspFormat extends IFormat {
    type: AVFormat;
    private rtspSession;
    private options;
    private context;
    private cacheAVPacket;
    constructor(options: IRtspFormatOptions);
    init(formatContext: AVIFormatContext): void;
    readHeader(formatContext: AVIFormatContext): Promise<number>;
    private addPrft;
    private getPacketPts;
    private handleRtcpPacket;
    readAVPacket(formatContext: AVIFormatContext, avpacket: pointer<AVPacket>): Promise<number>;
    seek(formatContext: AVIFormatContext, stream: AVStream, timestamp: int64, flags: int32): Promise<int64>;
    getAnalyzeStreamsCount(): number;
    destroy(formatContext: AVIFormatContext): Promise<void>;
}
