import AVPacket from 'avutil/struct/avpacket';
import { AVIFormatContext } from '../AVFormatContext';
import IFormat from './IFormat';
import { AVFormat } from 'avutil/avformat';
import AVStream from 'avutil/AVStream';
export default class IMpegpsFormat extends IFormat {
    type: AVFormat;
    private context;
    private cacheAVPacket;
    constructor();
    init(formatContext: AVIFormatContext): void;
    destroy(formatContext: AVIFormatContext): Promise<void>;
    private findNextStartCode;
    private parsePSM;
    private readPES;
    private createStream;
    readHeader(formatContext: AVIFormatContext): Promise<number>;
    private checkExtradata;
    private parseSlice;
    private getMpegVideoNextFrame;
    private getMpegAudioNextFrame;
    private readAVPacket_;
    readAVPacket(formatContext: AVIFormatContext, avpacket: pointer<AVPacket>): Promise<number>;
    private syncPSPacket;
    seek(formatContext: AVIFormatContext, stream: AVStream, timestamp: int64, flags: int32): Promise<int64>;
    getAnalyzeStreamsCount(): number;
}
