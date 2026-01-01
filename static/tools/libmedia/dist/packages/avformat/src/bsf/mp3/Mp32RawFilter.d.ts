import AVBSFilter from '../AVBSFilter';
import { type AVPacket, type AVCodecParameters, type AVRational } from '@libmedia/avutil';
export default class Mp32RawFilter extends AVBSFilter {
    private frameHeader;
    private caches;
    private cache;
    private lastDts;
    init(codecpar: pointer<AVCodecParameters>, timeBase: pointer<AVRational>): number;
    sendAVPacket(avpacket: pointer<AVPacket>): number;
    receiveAVPacket(avpacket: pointer<AVPacket>): number;
    reset(): number;
}
