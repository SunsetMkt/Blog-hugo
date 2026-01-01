import type { AVOFormatContext } from '../AVFormatContext';
import OFormat from './OFormat';
import { AVFormat, AVCodecID, type AVPacket } from '@libmedia/avutil';
export default class OH26XFormat extends OFormat {
    type: AVFormat;
    private filter;
    private muxStream;
    private extradata;
    constructor();
    init(formatContext: AVOFormatContext): number;
    destroy(formatContext: AVOFormatContext): Promise<void>;
    writeHeader(formatContext: AVOFormatContext): number;
    writeAVPacket(formatContext: AVOFormatContext, avpacket: pointer<AVPacket>): number;
    writeTrailer(formatContext: AVOFormatContext): number;
    flush(formatContext: AVOFormatContext): number;
    getCapabilities(): AVCodecID[];
    static Capabilities: AVCodecID[];
}
