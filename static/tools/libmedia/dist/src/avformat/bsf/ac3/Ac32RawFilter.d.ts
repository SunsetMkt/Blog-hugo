import type AVPacket from 'avutil/struct/avpacket';
import AVBSFilter from '../AVBSFilter';
import type AVCodecParameters from 'avutil/struct/avcodecparameters';
import type { Rational } from 'avutil/struct/rational';
export default class Ac32RawFilter extends AVBSFilter {
    private caches;
    private cache;
    private lastDts;
    init(codecpar: pointer<AVCodecParameters>, timeBase: pointer<Rational>): number;
    sendAVPacket(avpacket: pointer<AVPacket>): number;
    receiveAVPacket(avpacket: pointer<AVPacket>): number;
    reset(): number;
}
