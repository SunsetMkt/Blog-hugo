import { AVCodecID, AVMediaType } from 'avutil/codec';
export declare const RTP_MAX_PACKET_LENGTH = 8192;
export declare const RTP_HEVC_PAYLOAD_HEADER_SIZE = 2;
export declare const RTP_HEVC_DOND_FIELD_SIZE = 1;
export declare const RTP_HEVC_DONL_FIELD_SIZE = 2;
export declare const RTP_PAYLOAD_PRIVATE = 96;
export interface H264PayloadContext {
    profile: number;
    level: number;
    packetizationMode: number;
}
export interface HEVCPayloadContext {
    usingDonlField: number;
    profile: number;
}
export interface Mpeg4PayloadContext {
    sizeLength: number;
    indexLength: number;
    indexDeltaLength: number;
    profileLevelId: number;
    streamType: number;
    objectType: number;
    config: string;
    mode: string;
    cpresent: number;
    latm: boolean;
}
export interface RTPPayloadCodec {
    payload: uint8;
    name: string;
    codecType: AVMediaType;
    codecId: AVCodecID;
    rate: number;
    encoding: number;
}
export declare const RTPCodecName2AVCodeId: {
    PCMU: AVCodecID;
    PCMA: AVCodecID;
    G723: AVCodecID;
    G722: AVCodecID;
    L16: AVCodecID;
    MPA: AVCodecID;
    MPV: AVCodecID;
    MP2T: AVCodecID;
    H264: AVCodecID;
    H265: AVCodecID;
    HEVC: AVCodecID;
    VP8: AVCodecID;
    VP9: AVCodecID;
    AV1: AVCodecID;
    opus: AVCodecID;
    speex: AVCodecID;
    vorbis: AVCodecID;
    theora: AVCodecID;
    'MP4A-LATM': AVCodecID;
    'MP4V-ES': AVCodecID;
    'mpeg4-generic': AVCodecID;
    ac3: AVCodecID;
};
export declare const StaticRTPPayloadCodec: RTPPayloadCodec[];
