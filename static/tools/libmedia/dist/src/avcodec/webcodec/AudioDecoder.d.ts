import AVCodecParameters from 'avutil/struct/avcodecparameters';
import AVPacket from 'avutil/struct/avpacket';
export type WebAudioDecoderOptions = {
    onReceiveAudioData: (frame: AudioData) => void;
    onError: (error?: Error) => void;
};
export default class WebAudioDecoder {
    private options;
    private decoder;
    private parameters;
    private extradata;
    private currentError;
    constructor(options: WebAudioDecoderOptions);
    private output;
    private error;
    open(parameters: pointer<AVCodecParameters>): Promise<int32>;
    changeExtraData(buffer: Uint8Array): 0 | -8;
    decode(avpacket: pointer<AVPacket>): int32;
    flush(): Promise<int32>;
    close(): void;
    getQueueLength(): number;
    static isSupported(parameters: pointer<AVCodecParameters>): Promise<boolean>;
}
