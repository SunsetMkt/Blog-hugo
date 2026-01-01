import AVBSFilter from '../AVBSFilter';
import { type AVPacket, type AVCodecParameters, type AVRational } from '@libmedia/avutil';
export interface AACRaw2LATMFilterOptions {
    mod?: number;
}
export default class Raw2LATMFilter extends AVBSFilter {
    private cache;
    private cached;
    private bitWriter;
    private counter;
    private options;
    constructor(options?: AACRaw2LATMFilterOptions);
    init(codecpar: pointer<AVCodecParameters>, timeBase: pointer<AVRational>): number;
    destroy(): void;
    private writeHeader;
    private copyBytes;
    sendAVPacket(avpacket: pointer<AVPacket>): number;
    receiveAVPacket(avpacket: pointer<AVPacket>): number;
    reset(): number;
}
