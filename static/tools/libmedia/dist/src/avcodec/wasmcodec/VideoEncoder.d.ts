import type AVCodecParameters from 'avutil/struct/avcodecparameters';
import type AVFrame from 'avutil/struct/avframe';
import type { WebAssemblyResource } from 'cheap/webassembly/compiler';
import type { AVPacketPool } from 'avutil/struct/avpacket';
import type AVPacket from 'avutil/struct/avpacket';
import { Rational } from 'avutil/struct/rational';
import type { Data } from 'common/types/type';
export type WasmVideoEncoderOptions = {
    resource: WebAssemblyResource;
    onReceiveAVPacket: (avpacket: pointer<AVPacket>) => void;
    avpacketPool?: AVPacketPool;
    copyTs?: boolean;
};
export default class WasmVideoEncoder {
    private options;
    private encoder;
    private parameters;
    private timeBase;
    private framerateTimebase;
    private inputCounter;
    private avpacket;
    private avframe;
    private encodeQueueSize;
    private bitrateFilter;
    private extradata;
    private encoderOptions;
    constructor(options: WasmVideoEncoderOptions);
    private getAVPacket;
    private outputAVPacket;
    private receiveAVPacket;
    open(parameters: pointer<AVCodecParameters>, timeBase: Rational, threadCount?: number, opts?: Data): Promise<int32>;
    private preEncode;
    private postEncode;
    encodeAsync(frame: pointer<AVFrame>, key: boolean): Promise<int32>;
    encode(frame: pointer<AVFrame>, key: boolean): int32;
    flush(): Promise<int32>;
    getExtraData(): Uint8Array<ArrayBufferLike>;
    getColorSpace(): {
        colorSpace: int32;
        colorPrimaries: int32;
        colorTrc: int32;
    };
    close(): void;
    getQueueLength(): number;
    getChildThreadCount(): number;
}
