import AVPacket from 'avutil/struct/avpacket';
import AVCodecParameters from 'avutil/struct/avcodecparameters';
import { Rational } from 'avutil/struct/rational';
export default abstract class AVBSFilter {
    inCodecpar: pointer<AVCodecParameters>;
    inTimeBase: Rational;
    outCodecpar: pointer<AVCodecParameters>;
    init(codecpar: pointer<AVCodecParameters>, timeBase: pointer<Rational>): number;
    destroy(): void;
    abstract sendAVPacket(avpacket: pointer<AVPacket>): number;
    abstract receiveAVPacket(avpacket: pointer<AVPacket>): number;
    abstract reset(): number;
}
