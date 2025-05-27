import AVPacket from 'avutil/struct/avpacket';
import { AVIFormatContext } from '../AVFormatContext';
import IFormat from './IFormat';
import { AVFormat } from 'avutil/avformat';
import AVStream from 'avutil/AVStream';
export interface IMovFormatOptions {
    ignoreEditlist?: boolean;
}
export default class IMovFormat extends IFormat {
    type: AVFormat;
    private context;
    private firstAfterSeek;
    options: IMovFormatOptions;
    constructor(options?: IMovFormatOptions);
    init(formatContext: AVIFormatContext): void;
    readHeader(formatContext: AVIFormatContext): Promise<number>;
    private readAVPacket_;
    readAVPacket(formatContext: AVIFormatContext, avpacket: pointer<AVPacket>): Promise<number>;
    seek(formatContext: AVIFormatContext, stream: AVStream, timestamp: int64, flags: int32): Promise<int64>;
    getAnalyzeStreamsCount(): number;
}
