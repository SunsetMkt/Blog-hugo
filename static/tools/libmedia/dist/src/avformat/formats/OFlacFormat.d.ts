import type { AVOFormatContext } from '../AVFormatContext';
import type AVPacket from 'avutil/struct/avpacket';
import OFormat from './OFormat';
import { AVCodecID } from 'avutil/codec';
import { AVFormat } from 'avutil/avformat';
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
