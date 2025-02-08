import AVPacket from 'avutil/struct/avpacket';
import AVBSFilter from '../AVBSFilter';
import AVCodecParameters from 'avutil/struct/avcodecparameters';
import { Rational } from 'avutil/struct/rational';
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
    init(codecpar: pointer<AVCodecParameters>, timeBase: pointer<Rational>): number;
    destroy(): void;
    private writeHeader;
    private copyBytes;
    sendAVPacket(avpacket: pointer<AVPacket>): number;
    receiveAVPacket(avpacket: pointer<AVPacket>): number;
    reset(): number;
}
