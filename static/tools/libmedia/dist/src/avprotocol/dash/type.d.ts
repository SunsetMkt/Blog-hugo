import { Data } from 'common/types/type';
export interface Segment {
    idx: number;
    start: number;
    end: number;
    url: string;
    segmentDuration: number;
    pending: boolean;
}
export interface Protection {
    scheme?: string;
    kid?: Uint8Array;
    url?: string;
    systemId?: Uint8Array;
}
export interface Media {
    id: string;
    baseURL?: string;
    file?: string;
    initSegment?: string;
    mediaSegments?: Segment[];
    mimeType: string;
    codecs: string;
    width?: number;
    height?: number;
    maxWidth?: number;
    maxHeight?: number;
    frameRate?: number;
    sar?: string;
    startWithSAP: boolean;
    bandwidth: number;
    timescale: number;
    duration: number;
    protection?: Protection;
    lang?: string;
}
export interface MPDMediaList {
    mediaList: {
        audio: Media[];
        video: Media[];
        subtitle: Media[];
    };
    type: 'live' | 'vod';
    isEnd: boolean;
    duration: number;
    minBufferTime: number;
    maxSegmentDuration: number;
    minimumUpdatePeriod: number;
    availabilityStartTime?: number;
    timeShiftBufferDepth?: number;
    timestamp: number;
}
interface S {
    t?: string;
    d: string;
    r?: string;
}
export interface SegmentTimeline {
    S: S | S[];
}
export interface SegmentTemplate {
    initialization: string;
    media: string;
    startNumber?: string;
    timescale?: string;
    duration?: string;
    presentationTimeOffset?: string;
    availabilityTimeComplete?: string;
    SegmentTimeline: SegmentTimeline;
}
export interface Representation {
    id: string;
    mimeType: string;
    codecs: string;
    bandwidth: string;
    audioSamplingRate?: string;
    height?: string;
    width?: string;
    sar?: string;
    maxWidth?: string;
    maxHeight?: string;
    frameRate?: string;
    startWithSAP?: string;
    BaseURL?: string | {
        value: string;
    };
    SegmentBase?: {
        indexRange: string;
        Initialization: {
            range: string;
        };
    };
    SegmentList?: {
        duration: string;
        Initialization: {
            sourceURL: string;
        };
        SegmentURL: {
            media: string;
        }[] | {
            media: string;
        };
    };
    SegmentTemplate?: SegmentTemplate | SegmentTemplate[];
    ContentProtection?: Data[];
}
export interface AdaptationSet {
    id: string;
    lang?: string;
    bitstreamSwitching: string;
    contentType: 'audio' | 'video' | 'text';
    mimeType?: string;
    codecs?: string;
    width?: string;
    height?: string;
    sar?: string;
    bandwidth?: string;
    frameRate?: string;
    maxHeight?: string;
    maxWidth?: string;
    par?: string;
    segmentAlignment: string;
    startWithSAP: string;
    BaseURL?: string | {
        value: string;
    };
    duration?: string;
    Representation: Representation | Representation[];
    SegmentTemplate?: SegmentTemplate | SegmentTemplate[];
    ContentProtection?: Data[];
}
export interface Period {
    id: string;
    start: string;
    AdaptationSet: AdaptationSet | AdaptationSet[];
    duration?: string;
    BaseURL?: string | {
        value: string;
    };
}
export interface MPD {
    type: 'static' | 'dynamic';
    ProgramInformation: string;
    maxSegmentDuration: string;
    mediaPresentationDuration: string;
    availabilityStartTime?: string;
    timeShiftBufferDepth?: string;
    minBufferTime: string;
    minimumUpdatePeriod?: string;
    publishTime?: string;
    ServiceDescription?: {
        id: string;
    }[];
    Period: Period | Period[];
    BaseURL?: string | {
        value: string;
    } | {
        value: string;
        serviceLocation?: string;
        'dvb:priority'?: string;
        'dvb:weight'?: string;
    }[];
}
export {};
