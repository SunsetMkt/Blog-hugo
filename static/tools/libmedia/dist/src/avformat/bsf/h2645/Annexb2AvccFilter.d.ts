import type AVPacket from 'avutil/struct/avpacket';
import AVBSFilter from '../AVBSFilter';
import type AVCodecParameters from 'avutil/struct/avcodecparameters';
import type { Rational } from 'avutil/struct/rational';
export default class Annexb2AvccFilter extends AVBSFilter {
    private cache;
    private cached;
    private reverseSps;
    constructor(reverseSps?: boolean);
    init(codecpar: pointer<AVCodecParameters>, timeBase: pointer<Rational>): number;
    destroy(): void;
    sendAVPacket(avpacket: pointer<AVPacket>): number;
    receiveAVPacket(avpacket: pointer<AVPacket>): number;
    reset(): number;
}
