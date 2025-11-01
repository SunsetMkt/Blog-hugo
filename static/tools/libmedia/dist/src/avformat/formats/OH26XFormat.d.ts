import type { AVOFormatContext } from '../AVFormatContext';
import type AVPacket from 'avutil/struct/avpacket';
import OFormat from './OFormat';
import { AVCodecID } from 'avutil/codec';
import { AVFormat } from 'avutil/avformat';
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
