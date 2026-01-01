import { type AVPacket, type AVSubtitle } from '@libmedia/avutil';
export default abstract class Decoder {
    abstract sendAVPacket(avpacket: pointer<AVPacket>): int32;
    abstract receiveAVFrame(avframe: AVSubtitle): int32;
    abstract flush(): int32;
}
