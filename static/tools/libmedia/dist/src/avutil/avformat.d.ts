export declare const enum AVSeekFlags {
    NONE = 0,
    BACKWARD = 1,
    BYTE = 2,
    ANY = 4,
    FRAME = 8,
    TIMESTAMP = 16
}
export declare const enum AVFormat {
    UNKNOWN = -1,
    FLV = 0,
    MOV = 1,
    MP4 = 1,
    M4A = 1,
    MPEGTS = 2,
    MPEGPS = 3,
    OGG = 4,
    IVF = 5,
    RTSP = 6,
    RTMP = 7,
    MATROSKA = 8,
    WEBM = 9,
    AVI = 10,
    H264 = 11,
    HEVC = 12,
    VVC = 13,
    MP3 = 14,
    AAC = 15,
    WAV = 16,
    FLAC = 17,
    WEBVTT = 18,
    SUBRIP = 19,
    ASS = 20,
    TTML = 21
}
export declare const enum IOType {
    Fetch = 0,
    File = 1,
    WEBSOCKET = 2,
    WEBTRANSPORT = 3,
    HLS = 4,
    DASH = 5,
    RTMP = 6
}
export declare const enum IOFlags {
    NONE = 0,
    SEEKABLE = 1,
    SLICE = 2,
    NETWORK = 4,
    ABORT = 8
}
