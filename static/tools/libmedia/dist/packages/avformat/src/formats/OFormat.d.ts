import type { AVOFormatContext } from '../AVFormatContext';
import { AVFormat, type AVPacket, type AVCodecID } from '@libmedia/avutil';
export default abstract class OFormat {
    type: AVFormat;
    abstract init(formatContext: AVOFormatContext): number;
    destroy(formatContext: AVOFormatContext): Promise<void>;
    abstract writeHeader(formatContext: AVOFormatContext): number;
    abstract writeAVPacket(formatContext: AVOFormatContext, avpacket: pointer<AVPacket>): number;
    abstract flush(formatContext: AVOFormatContext): number;
    abstract writeTrailer(formatContext: AVOFormatContext): number;
    abstract getCapabilities(): AVCodecID[];
    static Capabilities: AVCodecID[];
}
