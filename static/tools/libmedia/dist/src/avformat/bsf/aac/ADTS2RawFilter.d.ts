import AVPacket from 'avutil/struct/avpacket';
import AVBSFilter from '../AVBSFilter';
import AVCodecParameters from 'avutil/struct/avcodecparameters';
import { Rational } from 'avutil/struct/rational';
export default class ADTS2RawFilter extends AVBSFilter {
    private streamMuxConfig;
    private caches;
    init(codecpar: pointer<AVCodecParameters>, timeBase: pointer<Rational>): number;
    sendAVPacket(avpacket: pointer<AVPacket>): number;
    receiveAVPacket(avpacket: pointer<AVPacket>): number;
    reset(): number;
}
