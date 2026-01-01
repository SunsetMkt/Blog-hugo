import type { AVOFormatContext } from '../AVFormatContext';
import OFormat from './OFormat';
import { AVFormat, AVCodecID, type AVPacket } from '@libmedia/avutil';
export declare const enum IVFCodec {
    VP8 = "VP80",
    VP9 = "VP90",
    AV1 = "AV01"
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
    private muxStreamIndex;
    constructor();
    init(formatContext: AVOFormatContext): number;
    writeHeader(formatContext: AVOFormatContext): number;
    writeAVPacket(formatContext: AVOFormatContext, avpacket: pointer<AVPacket>): number;
    writeTrailer(formatContext: AVOFormatContext): number;
    flush(formatContext: AVOFormatContext): number;
    getCapabilities(): AVCodecID[];
    static Capabilities: AVCodecID[];
}
