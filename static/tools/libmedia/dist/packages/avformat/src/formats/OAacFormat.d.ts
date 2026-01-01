import type { AVOFormatContext } from '../AVFormatContext';
import OFormat from './OFormat';
import { AVFormat, AVCodecID, type AVPacket } from '@libmedia/avutil';
export interface OAacFormatOptions {
    frameType?: 'adts' | 'latm';
}
export default class OAacFormat extends OFormat {
    type: AVFormat;
    private options;
    private muxStream;
    private filter;
    constructor(options?: OAacFormatOptions);
    init(formatContext: AVOFormatContext): number;
    writeHeader(formatContext: AVOFormatContext): number;
    writeAVPacket(formatContext: AVOFormatContext, avpacket: pointer<AVPacket>): number;
    writeTrailer(formatContext: AVOFormatContext): number;
    flush(formatContext: AVOFormatContext): number;
    getCapabilities(): AVCodecID[];
    static Capabilities: AVCodecID[];
}
