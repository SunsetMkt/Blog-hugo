export declare const enum AVIFlags {
    AVIF_HASINDEX = 16,
    AVIF_MUSTUSEINDEX = 32,
    AVIF_ISINTERLEAVED = 256,
    AVIF_WASCAPTUREFILE = 65536,
    AVIF_COPYRIGHTED = 131072,
    AVIF_TRUSTCKTYPE = 2048
}
export declare const enum AVFIndexFlags {
    AVIIF_INDEX = 16,
    AVIIF_NO_TIME = 256
}
export declare const enum AVIStreamFlags {
    AVISF_VIDEO_PALCHANGES = 65536
}
export interface AVIMainHeader {
    dwMicroSecPerFrame: number;
    dwMaxBytesPerSec: number;
    dwPaddingGranularity: number;
    dwFlages: number;
    dwTotalFrame: number;
    dwInitialFrames: number;
    dwStreams: number;
    dwSuggestedBufferSize: number;
    dwWidth: number;
    dwHeight: number;
}
export interface AVISample {
    pos: int64;
    dts: int64;
    size: int32;
    key: boolean;
}
export interface AVIStreamContext {
    fccType: string;
    fccHandler: string;
    dwFlags: number;
    wPriority: number;
    wLanguage: number;
    dwInitalFrames: number;
    dwScale: number;
    dwRate: number;
    dwStart: number;
    dwLength: number;
    dwSuggestedBufferSize: number;
    dwQuality: number;
    dwSampleSize: number;
    rcFrame: {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
    currentDts: int64;
    pal: Uint32Array;
    hasPal: boolean;
    dshowBlockAlign: number;
    samples: AVISample[];
    sampleEnd: boolean;
    currentSample: number;
}
