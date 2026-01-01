import AVBSFilter from '../AVBSFilter';
import { type AVPacket, type AVCodecParameters, type AVRational } from '@libmedia/avutil';
export default class Raw2ADTSFilter extends AVBSFilter {
    private cache;
    private cached;
    init(codecpar: pointer<AVCodecParameters>, timeBase: pointer<AVRational>): number;
    destroy(): void;
    sendAVPacket(avpacket: pointer<AVPacket>): number;
    receiveAVPacket(avpacket: pointer<AVPacket>): number;
    reset(): number;
}
