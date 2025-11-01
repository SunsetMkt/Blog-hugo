import type { AVOFormatContext } from '../AVFormatContext';
import type AVPacket from 'avutil/struct/avpacket';
import OFormat from './OFormat';
import { AVCodecID } from 'avutil/codec';
import { AVFormat } from 'avutil/avformat';
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
