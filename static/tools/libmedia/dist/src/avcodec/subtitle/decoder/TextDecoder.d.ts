import AVPacket from 'avutil/struct/avpacket';
import Decoder from './Decoder';
import { AVSubtitle } from 'avutil/struct/avsubtitle';
export default class TextDecoder extends Decoder {
    private queue;
    constructor();
    sendAVPacket(avpacket: pointer<AVPacket>): int32;
    receiveAVFrame(sub: AVSubtitle): int32;
    flush(): int32;
}
