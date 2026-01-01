import type { AVIFormatContext } from '../AVFormatContext';
import IFormat from './IFormat';
import { AVFormat, type AVPacket, type AVStream } from '@libmedia/avutil';
export default class IMp3Format extends IFormat {
    type: AVFormat;
    private context;
    constructor();
    init(formatContext: AVIFormatContext): void;
    private parseID3;
    readHeader(formatContext: AVIFormatContext): Promise<number>;
    readAVPacket(formatContext: AVIFormatContext, avpacket: pointer<AVPacket>): Promise<number>;
    private syncToFrame;
    seek(formatContext: AVIFormatContext, stream: AVStream, timestamp: int64, flags: int32): Promise<int64>;
    getAnalyzeStreamsCount(): number;
}
