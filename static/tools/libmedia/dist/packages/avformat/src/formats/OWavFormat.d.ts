import type { AVOFormatContext } from '../AVFormatContext';
import OFormat from './OFormat';
import { AVFormat, AVCodecID, type AVPacket } from '@libmedia/avutil';
export interface OWavFormatOptions {
    forceRF64?: boolean;
    id3v2Version?: 0 | 2 | 3 | 4;
}
export default class OWavFormat extends OFormat {
    type: AVFormat;
    private options;
    private minPts;
    private maxPts;
    private lastDuration;
    private sampleCount;
    private dataPos;
    private dsPos;
    constructor(options?: OWavFormatOptions);
    init(formatContext: AVOFormatContext): number;
    writeHeader(formatContext: AVOFormatContext): number;
    writeAVPacket(formatContext: AVOFormatContext, avpacket: pointer<AVPacket>): number;
    writeTrailer(formatContext: AVOFormatContext): number;
    flush(formatContext: AVOFormatContext): number;
    getCapabilities(): AVCodecID[];
    static Capabilities: AVCodecID[];
}
