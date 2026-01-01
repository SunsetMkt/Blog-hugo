import { type AVPacket, type AVSubtitle } from '@libmedia/avutil';
import Decoder from './Decoder';
export default class WebVttDecoder extends Decoder {
    private queue;
    constructor();
    private findTimelineTag;
    sendAVPacket(avpacket: pointer<AVPacket>): int32;
    receiveAVFrame(sub: AVSubtitle): int32;
    flush(): int32;
}
