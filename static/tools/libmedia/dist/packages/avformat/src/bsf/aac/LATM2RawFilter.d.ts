import AVBSFilter from '../AVBSFilter';
import { type AVPacket, type AVCodecParameters, type AVRational } from '@libmedia/avutil';
export default class LATM2RawFilter extends AVBSFilter {
    private bitReader;
    private streamMuxConfig;
    private caches;
    private refSampleDuration;
    init(codecpar: pointer<AVCodecParameters>, timeBase: pointer<AVRational>): number;
    sendAVPacket(avpacket: pointer<AVPacket>): number;
    receiveAVPacket(avpacket: pointer<AVPacket>): number;
    reset(): number;
}
