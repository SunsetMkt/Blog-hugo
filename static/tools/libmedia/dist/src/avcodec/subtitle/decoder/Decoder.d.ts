import AVPacket from 'avutil/struct/avpacket';
import { AVSubtitle } from 'avutil/struct/avsubtitle';
export default abstract class Decoder {
    abstract sendAVPacket(avpacket: pointer<AVPacket>): int32;
    abstract receiveAVFrame(avframe: AVSubtitle): int32;
    abstract flush(): int32;
}
