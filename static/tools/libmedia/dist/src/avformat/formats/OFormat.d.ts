import { AVCodecID } from 'avutil/codec';
import { AVFormat } from 'avutil/avformat';
import { AVOFormatContext } from '../AVFormatContext';
import AVPacket from 'avutil/struct/avpacket';
export default abstract class OFormat {
    type: AVFormat;
    abstract init(formatContext: AVOFormatContext): number;
    destroy(formatContext: AVOFormatContext): Promise<void>;
    abstract writeHeader(formatContext: AVOFormatContext): number;
    abstract writeAVPacket(formatContext: AVOFormatContext, avpacket: pointer<AVPacket>): number;
    abstract flush(formatContext: AVOFormatContext): number;
    abstract writeTrailer(formatContext: AVOFormatContext): number;
}
export declare const OFormatSupportedCodecs: Record<Exclude<AVFormat, AVFormat.UNKNOWN>, AVCodecID[]>;
