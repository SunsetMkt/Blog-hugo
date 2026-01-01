import AVBSFilter from '../AVBSFilter';
import { type AVPacket, type AVCodecParameters, type AVRational } from '@libmedia/avutil';
export default class Mpegts2RawFilter extends AVBSFilter {
    private caches;
    private pendingItem;
    init(codecpar: pointer<AVCodecParameters>, timeBase: pointer<AVRational>): number;
    sendAVPacket(avpacket: pointer<AVPacket>): number;
    receiveAVPacket(avpacket: pointer<AVPacket>): number;
    reset(): number;
}
