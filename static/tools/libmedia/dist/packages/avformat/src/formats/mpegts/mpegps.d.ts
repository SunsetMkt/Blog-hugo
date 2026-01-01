export declare const MAX_SYNC_SIZE = 100000;
export declare const enum MpegpsStreamId {
    AUDIO_ID = 192,
    VIDEO_ID = 224,
    H264_ID = 226,
    AC3_ID = 128,
    DTS_ID = 136,
    LPCM_ID = 160,
    SUB_ID = 32
}
export declare const enum MpegpsStartCode {
    PACK_START = 442,
    SYSTEM_HEADER_START = 443,
    PADDING_STREAM = 446,
    PRIVATE_STREAM_1 = 445,
    PRIVATE_STREAM_2 = 447,
    PROGRAM_STREAM_MAP = 444
}
