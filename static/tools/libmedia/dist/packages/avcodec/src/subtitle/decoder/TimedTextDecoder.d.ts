import { type AVPacket, type AVSubtitle } from '@libmedia/avutil';
import Decoder from './Decoder';
export default class TimedTextDecoder extends Decoder {
    private queue;
    constructor();
    sendAVPacket(avpacket: pointer<AVPacket>): int32;
    receiveAVFrame(sub: AVSubtitle): int32;
    flush(): int32;
}
