import { type AVStream, type AVPacket } from '@libmedia/avutil';
export declare function readSEI(avpacket: pointer<AVPacket>, stream: AVStream): void;
export declare function writeSEI(avpacket: pointer<AVPacket>, stream: AVStream, payloadType: number, payload: Uint8Array): void;
