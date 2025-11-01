import type AVPacket from 'avutil/struct/avpacket';
import Decoder from './Decoder';
import type { AVSubtitle } from 'avutil/struct/avsubtitle';
export default class WebVttDecoder extends Decoder {
    private queue;
    constructor();
    private findTimelineTag;
    sendAVPacket(avpacket: pointer<AVPacket>): int32;
    receiveAVFrame(sub: AVSubtitle): int32;
    flush(): int32;
}
