import { AVOFormatContext } from '../AVFormatContext';
import AVPacket from 'avutil/struct/avpacket';
import OFormat from './OFormat';
import { AVFormat } from 'avutil/avformat';
export declare const enum IVFCodec {
    VP8 = "VP80",
    VP9 = "VP90"
}
export declare class IVFHeader {
    version: number;
    length: number;
    codec: IVFCodec;
    width: number;
    height: number;
    denominator: number;
    numerator: number;
    framesCount: number;
    constructor();
}
export default class OIVFFormat extends OFormat {
    type: AVFormat;
    header: IVFHeader;
    constructor();
    init(formatContext: AVOFormatContext): number;
    writeHeader(formatContext: AVOFormatContext): number;
    writeAVPacket(formatContext: AVOFormatContext, avpacket: pointer<AVPacket>): number;
    writeTrailer(formatContext: AVOFormatContext): number;
    flush(formatContext: AVOFormatContext): number;
}
