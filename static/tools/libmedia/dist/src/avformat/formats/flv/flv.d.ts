import { AVCodecID } from 'avutil/codec';
export declare const enum FlvTag {
    AUDIO = 8,
    VIDEO = 9,
    SCRIPT = 18,
    SCRIPT_AMF3 = 15
}
export declare const enum VideoFrameType {
    KeyFrame = 1,
    InterFrame = 2,
    DisposableInterFrame = 3,
    GeneratedKeyFrame = 4,
    Command = 5
}
export declare const enum VideoCommand {
    StartSeek = 0,
    EndSeek = 1
}
export declare const enum VideoPacketType {
    SequenceStart = 0,
    CodedFrames = 1,
    SequenceEnd = 2,
    CodedFramesX = 3,
    Metadata = 4,
    MPEG2TSSequenceStart = 5,
    MultiTrack = 6,
    ModEx = 7
}
export declare const enum AudioPacketType {
    SequenceStart = 0,
    CodedFrames = 1,
    SequenceEnd = 2,
    MultichannelConfig = 4,
    MultiTrack = 5,
    ModEx = 7
}
export declare const enum VideoPacketModExType {
    TimestampOffsetNano = 0
}
export declare const enum AudioPacketModExType {
    TimestampOffsetNano = 0
}
export declare const enum AVMultiTrackType {
    OneTrack = 0,
    ManyTracks = 1,
    ManyTracksManyCodecs = 2
}
export declare const enum AVCPacketType {
    AVC_SEQUENCE_HEADER = 0,
    AVC_NALU = 1,
    AVC_END_OF_ENQUENCE = 2
}
export declare const enum AACPacketType {
    AAC_SEQUENCE_HEADER = 0,
    AAC_RAW = 1
}
export declare const enum AudioChannelOrder {
    Unspecified = 0,
    Native = 1,
    Custom = 2
}
export declare const AVCodecID2FlvCodecType: {
    65541: number;
    65536: number;
    86018: number;
    86017: number;
    86051: number;
    69645: number;
    86049: number;
    65543: number;
    65542: number;
    27: number;
    173: number;
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
    9: AVCodecID;
    2: AVCodecID;
    3: AVCodecID;
    4: AVCodecID;
    5: AVCodecID;
    6: AVCodecID;
};
export declare const AVCodecID2FlvCodecTag: {
    27: string;
    173: string;
    196: string;
    139: string;
    167: string;
    225: string;
    86019: string;
    86056: string;
    86076: string;
    86028: string;
    86017: string;
    86018: string;
};
