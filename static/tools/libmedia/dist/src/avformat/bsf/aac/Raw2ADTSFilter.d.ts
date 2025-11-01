import type AVPacket from 'avutil/struct/avpacket';
import AVBSFilter from '../AVBSFilter';
import type AVCodecParameters from 'avutil/struct/avcodecparameters';
import type { Rational } from 'avutil/struct/rational';
export default class Raw2ADTSFilter extends AVBSFilter {
    private cache;
    private cached;
    init(codecpar: pointer<AVCodecParameters>, timeBase: pointer<Rational>): number;
    destroy(): void;
    sendAVPacket(avpacket: pointer<AVPacket>): number;
    receiveAVPacket(avpacket: pointer<AVPacket>): number;
    reset(): number;
}
