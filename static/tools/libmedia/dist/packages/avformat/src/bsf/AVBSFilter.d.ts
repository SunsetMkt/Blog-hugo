import { type AVPacket, AVCodecParameters, type AVRational } from '@libmedia/avutil';
export default abstract class AVBSFilter {
    inCodecpar: pointer<AVCodecParameters>;
    inTimeBase: AVRational;
    outCodecpar: pointer<AVCodecParameters>;
    init(codecpar: pointer<AVCodecParameters>, timeBase: pointer<AVRational>): number;
    destroy(): void;
    abstract sendAVPacket(avpacket: pointer<AVPacket>): number;
    abstract receiveAVPacket(avpacket: pointer<AVPacket>): number;
    abstract reset(): number;
}
