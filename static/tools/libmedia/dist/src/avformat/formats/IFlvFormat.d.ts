import FlvHeader from './flv/FlvHeader';
import FlvScriptTag from './flv/FlvScriptTag';
import AVPacket from 'avutil/struct/avpacket';
import { AVIFormatContext } from '../AVFormatContext';
import AVStream from 'avutil/AVStream';
import IFormat from './IFormat';
import { AVFormat } from 'avutil/avformat';
export interface FlvFormatOptions {
    hasKeyframes?: boolean;
    live?: boolean;
}
export default class IFlvFormat extends IFormat {
    type: AVFormat;
    header: FlvHeader;
    script: FlvScriptTag;
    options: FlvFormatOptions;
    private firstTagPos;
    constructor(options?: FlvFormatOptions);
    init(formatContext: AVIFormatContext): void;
    readHeader(formatContext: AVIFormatContext): Promise<number>;
    private readCodecConfigurationRecord;
    private readAVPacketData;
    private readAVPacket_;
    readAVPacket(formatContext: AVIFormatContext, avpacket: pointer<AVPacket>): Promise<number>;
    syncTag(formatContext: AVIFormatContext): Promise<void>;
    seek(formatContext: AVIFormatContext, stream: AVStream, timestamp: int64, flags: int32): Promise<int64>;
    getAnalyzeStreamsCount(): number;
}
