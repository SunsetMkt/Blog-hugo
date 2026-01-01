import AVBSFilter from '../AVBSFilter';
import { type AVPacket, type AVCodecParameters, type AVRational } from '@libmedia/avutil';
export default class Avcc2AnnexbFilter extends AVBSFilter {
    private cache;
    private cached;
    private naluLengthSizeMinusOne;
    init(codecpar: pointer<AVCodecParameters>, timeBase: pointer<AVRational>): number;
    destroy(): void;
    sendAVPacket(avpacket: pointer<AVPacket>): number;
    receiveAVPacket(avpacket: pointer<AVPacket>): number;
    reset(): number;
}
