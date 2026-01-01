import type { AVOFormatContext } from '../AVFormatContext';
import OFormat from './OFormat';
import { AVFormat, AVCodecID, type AVPacket } from '@libmedia/avutil';
export interface OFlacFormatOptions {
}
export default class OFlacFormat extends OFormat {
    type: AVFormat;
    private options;
    private muxStream;
    private seekPoint;
    private firstFramePos;
    private streamInfo;
    private bitReader;
    private frameInfo;
    private paddingPos;
    private paddingLen;
    constructor(options?: OFlacFormatOptions);
    init(formatContext: AVOFormatContext): number;
    writeHeader(formatContext: AVOFormatContext): number;
    writeAVPacket(formatContext: AVOFormatContext, avpacket: pointer<AVPacket>): number;
    writeTrailer(formatContext: AVOFormatContext): number;
    flush(formatContext: AVOFormatContext): number;
    getCapabilities(): AVCodecID[];
    static Capabilities: AVCodecID[];
}
