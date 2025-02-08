import { HEVCPayloadContext, Mpeg4PayloadContext } from './rtp';
import { RTPPacket } from './RTPPacket';
import { AVMediaType } from 'avutil/codec';
export declare function h264(rtps: RTPPacket[]): {
    nalus: Uint8Array<ArrayBufferLike>[];
    isKey: boolean;
};
export declare function hevc(rtps: RTPPacket[], context: HEVCPayloadContext): {
    nalus: Uint8Array<ArrayBufferLike>[];
    isKey: boolean;
};
export declare function mpeg4(rtps: RTPPacket[], context: Mpeg4PayloadContext): Uint8Array<ArrayBufferLike>[];
export declare function vp8(rtps: RTPPacket[]): {
    payload: Uint8Array<ArrayBufferLike>;
    isKey: boolean;
};
export declare function vp9(rtps: RTPPacket[]): {
    isKey: boolean;
    payload: Uint8Array<ArrayBufferLike>;
};
export declare function av1(rtps: RTPPacket[]): {
    payload: Uint8Array<ArrayBufferLike>;
    isKey: boolean;
};
export declare function mpeg12(rtps: RTPPacket[], mediaType: AVMediaType): Uint8Array<ArrayBufferLike>;
export declare function ac3(rtps: RTPPacket[]): Uint8Array<ArrayBufferLike>;
export declare function concat(rtps: RTPPacket[]): Uint8Array<ArrayBufferLike>;
