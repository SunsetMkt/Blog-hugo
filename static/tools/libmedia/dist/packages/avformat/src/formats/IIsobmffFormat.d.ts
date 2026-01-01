import type { AVIFormatContext } from '../AVFormatContext';
import IFormat from './IFormat';
import { AVFormat, type AVPacket, type AVStream } from '@libmedia/avutil';
export interface IIsobmffFormatOptions {
    /**
     * 忽略 editlist 的约束
     */
    ignoreEditlist?: boolean;
    ignoreChapters?: boolean;
}
export default class IIsobmffFormat extends IFormat {
    type: AVFormat;
    private context;
    private firstAfterSeek;
    options: IIsobmffFormatOptions;
    constructor(options?: IIsobmffFormatOptions);
    init(formatContext: AVIFormatContext): void;
    readHeader(formatContext: AVIFormatContext): Promise<number>;
    private readAVPacket_;
    readAVPacket(formatContext: AVIFormatContext, avpacket: pointer<AVPacket>): Promise<number>;
    seek(formatContext: AVIFormatContext, stream: AVStream, timestamp: int64, flags: int32): Promise<int64>;
    getAnalyzeStreamsCount(): number;
}
