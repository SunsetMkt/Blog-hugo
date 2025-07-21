import AVStream from 'avutil/AVStream';
import { AVIFormatContext } from '../AVFormatContext';
import AVPacket from 'avutil/struct/avpacket';
import IFormat from './IFormat';
import { AVFormat } from 'avutil/avformat';
export interface IAviFormatOptions {
    useOdml?: boolean;
}
export default class IAviFormat extends IFormat {
    type: AVFormat;
    private context;
    private options;
    constructor(options?: IAviFormatOptions);
    init(formatContext: AVIFormatContext): void;
    private getStreamIndex;
    private getDuration;
    readHeader(formatContext: AVIFormatContext): Promise<number>;
    private readOdmlIndex;
    private readIdx1;
    private loadIndex;
    private getNextSample;
    readAVPacket_(formatContext: AVIFormatContext, avpacket: pointer<AVPacket>): Promise<number>;
    readAVPacket(formatContext: AVIFormatContext, avpacket: pointer<AVPacket>): Promise<number>;
    private syncChunk;
    seek(formatContext: AVIFormatContext, stream: AVStream, timestamp: int64, flags: int32): Promise<int64>;
    getAnalyzeStreamsCount(): number;
}
