import AVStream from 'avutil/AVStream';
import AVPacket from 'avutil/struct/avpacket';
export declare function readSEI(avpacket: pointer<AVPacket>, stream: AVStream): void;
export declare function writeSEI(avpacket: pointer<AVPacket>, stream: AVStream, payloadType: number, payload: Uint8Array): void;
