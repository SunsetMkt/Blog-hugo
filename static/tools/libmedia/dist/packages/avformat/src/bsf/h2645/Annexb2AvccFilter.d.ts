import AVBSFilter from '../AVBSFilter';
import { type AVPacket, type AVCodecParameters, type AVRational } from '@libmedia/avutil';
export default class Annexb2AvccFilter extends AVBSFilter {
    private cache;
    private cached;
    private reverseSps;
    constructor(reverseSps?: boolean);
    init(codecpar: pointer<AVCodecParameters>, timeBase: pointer<AVRational>): number;
    destroy(): void;
    sendAVPacket(avpacket: pointer<AVPacket>): number;
    receiveAVPacket(avpacket: pointer<AVPacket>): number;
    reset(): number;
}
