import { AVCodecID } from 'avutil/codec';
export declare const enum FlvTag {
    AUDIO = 8,
    VIDEO = 9,
    SCRIPT = 18
}
export declare const enum PacketTypeExt {
    PacketTypeSequenceStart = 0,
    PacketTypeCodedFrames = 1,
    PacketTypeSequenceEnd = 2,
    PacketTypeCodedFramesX = 3,
    PacketTypeMetadata = 4,
    PacketTypeMPEG2TSSequenceStart = 5
}
export declare const enum AVCPacketType {
    AVC_SEQUENCE_HEADER = 0,
    AVC_NALU = 1,
    AVC_END_OF_ENQUENCE = 2
}
export declare const AVCodecID2FlvCodecType: {
    86018: number;
    86017: number;
    86051: number;
    69645: number;
    86049: number;
    65543: number;
    65542: number;
    27: number;
    173: number;
    196: number;
    12: number;
    4: number;
    86: number;
    92: number;
    106: number;
    131: number;
};
export declare const FlvAudioCodecType2AVCodecID: {
    10: AVCodecID;
    2: AVCodecID;
    11: AVCodecID;
    1: AVCodecID;
    4: AVCodecID;
    5: AVCodecID;
    6: AVCodecID;
    7: AVCodecID;
    8: AVCodecID;
};
export declare const FlvVideoCodecType2AVCodecID: {
    7: AVCodecID;
    12: AVCodecID;
    13: AVCodecID;
    9: AVCodecID;
    2: AVCodecID;
    3: AVCodecID;
    4: AVCodecID;
    5: AVCodecID;
    6: AVCodecID;
};
export declare const FlvCodecHeaderLength: {
    86018: number;
    86017: number;
    86051: number;
    65543: number;
    65542: number;
    69645: number;
    86049: number;
    27: number;
    12: number;
    173: number;
    196: number;
    167: number;
    225: number;
    4: number;
    86: number;
    92: number;
    106: number;
    131: number;
};
