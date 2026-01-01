import type { AVIFormatContext } from '../AVFormatContext';
import IFormat from './IFormat';
import type { FlacContext } from './flac/type';
import { AVFormat, type AVPacket, type AVStream } from '@libmedia/avutil';
export default class IFlacFormat extends IFormat {
    type: AVFormat;
    context: FlacContext;
    constructor();
    init(formatContext: AVIFormatContext): void;
    readHeader(formatContext: AVIFormatContext): Promise<number>;
    private getNextFrame;
    readAVPacket(formatContext: AVIFormatContext, avpacket: pointer<AVPacket>): Promise<number>;
    private syncFrame;
    seek(formatContext: AVIFormatContext, stream: AVStream, timestamp: int64, flags: int32): Promise<int64>;
    getAnalyzeStreamsCount(): number;
}
