import type AVCodecParameters from 'avutil/struct/avcodecparameters';
import type AVPacket from 'avutil/struct/avpacket';
import type { AVSubtitle } from 'avutil/struct/avsubtitle';
export type SubtitleDecoderOptions = {
    onReceiveSubtitle?: (subtitle: AVSubtitle) => void;
    onError?: (error?: Error) => void;
};
export default class SubtitleDecoder {
    private options;
    private frame;
    private decoder;
    constructor(options: SubtitleDecoderOptions);
    private getAVFrame;
    private outputAVFrame;
    private receiveAVFrame;
    open(parameters: pointer<AVCodecParameters>): Promise<0 | -8>;
    decode(avpacket: pointer<AVPacket>): 0 | int32;
    flush(): Promise<void>;
    close(): void;
}
