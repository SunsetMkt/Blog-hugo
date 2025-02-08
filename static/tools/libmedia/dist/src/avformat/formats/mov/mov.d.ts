import { AVCodecID } from 'avutil/codec';
import { AVMediaType } from 'avutil/codec';
export declare const Mp4Tag2AVCodecID: {
    mp4v: AVCodecID;
    avc1: AVCodecID;
    avc3: AVCodecID;
    hev1: AVCodecID;
    hvc1: AVCodecID;
    vvc1: AVCodecID;
    vvi1: AVCodecID;
    vp09: AVCodecID;
    av01: AVCodecID;
    mp4a: AVCodecID;
    opus: AVCodecID;
};
export declare const AVCodecID2Mp4a: {
    86018: number;
    86017: number;
    86076: number;
    86028: number;
    86021: number;
    12: number;
    27: number;
    173: number;
    196: number;
    167: number;
    0: number;
};
export declare const Mp4aObj2AVCodecID: {
    32: AVCodecID;
    33: AVCodecID;
    35: AVCodecID;
    51: AVCodecID;
    177: AVCodecID;
    64: AVCodecID;
    102: AVCodecID;
    103: AVCodecID;
    104: AVCodecID;
    105: AVCodecID;
    107: AVCodecID;
    173: AVCodecID;
    193: AVCodecID;
    221: AVCodecID;
    0: AVCodecID;
};
export declare const HandlerType2MediaType: {
    vide: AVMediaType;
    soun: AVMediaType;
    clcp: AVMediaType;
    sbtl: AVMediaType;
    subt: AVMediaType;
    subp: AVMediaType;
    text: AVMediaType;
};
export declare const tag2CodecId: {
    [x: number]: AVCodecID;
    1836253269: AVCodecID;
};
export declare const enum FragmentMode {
    GOP = 0,
    FRAME = 1
}
export declare const enum MovMode {
    MP4 = 0,
    MOV = 1
}
