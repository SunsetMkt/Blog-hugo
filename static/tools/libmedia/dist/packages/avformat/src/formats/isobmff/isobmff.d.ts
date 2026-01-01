import { AVCodecID, AVMediaType } from '@libmedia/avutil';
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
    pict: AVMediaType;
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
export declare const enum Mp4FragmentMode {
    GOP = 0,
    FRAME = 1
}
export declare const enum Mp4Mode {
    MP4 = 0,
    MOV = 1
}
