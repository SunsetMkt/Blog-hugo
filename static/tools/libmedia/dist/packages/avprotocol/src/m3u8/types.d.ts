/**
 * from https://github.com/kuu/hls-parser/blob/master/types.ts
 * MIT license
 */
type RenditionType = 'AUDIO' | 'VIDEO' | 'SUBTITLES' | 'CLOSED-CAPTIONS';
declare class Rendition {
    type: RenditionType;
    uri?: string;
    groupId: string;
    language?: string;
    assocLanguage?: string;
    name: string;
    isDefault: boolean;
    autoselect: boolean;
    forced: boolean;
    instreamId?: string;
    characteristics?: string;
    channels?: string;
    constructor({ type, uri, groupId, language, assocLanguage, name, isDefault, autoselect, forced, instreamId, characteristics, channels }: Rendition);
}
declare class Variant {
    uri: string;
    isIFrameOnly?: boolean;
    bandwidth: number;
    averageBandwidth?: number;
    score: number;
    codecs?: string;
    resolution?: {
        width: number;
        height: number;
    };
    frameRate?: number;
    hdcpLevel?: string;
    allowedCpc: {
        format: string;
        cpcList: string[];
    }[];
    videoRange: 'SDR' | 'HLG' | 'PQ';
    stableVariantId: string;
    programId: any;
    audio: Rendition[];
    video: Rendition[];
    subtitles: Rendition[];
    closedCaptions: Rendition[];
    currentRenditions: {
        audio: number;
        video: number;
        subtitles: number;
        closedCaptions: number;
    };
    constructor({ uri, isIFrameOnly, bandwidth, averageBandwidth, score, codecs, resolution, frameRate, hdcpLevel, allowedCpc, videoRange, stableVariantId, programId, audio, video, subtitles, closedCaptions, currentRenditions }: any);
}
declare class SessionData {
    id: string;
    value?: string;
    uri?: string;
    language?: string;
    constructor({ id, value, uri, language }: SessionData);
}
declare class Key {
    method: string;
    uri?: string;
    iv?: Uint8Array<ArrayBuffer>;
    format?: string;
    formatVersion?: string;
    constructor({ method, uri, iv, format, formatVersion }: Key);
}
export type Byterange = {
    length: number;
    offset: number;
};
declare class MediaInitializationSection {
    hint: boolean;
    uri: string;
    mimeType?: string;
    byterange?: Byterange;
    key?: Key;
    constructor({ hint, uri, mimeType, byterange, key }: Partial<MediaInitializationSection> & {
        uri: string;
    });
}
declare class DateRange {
    id: string;
    classId?: string;
    start?: Date;
    end?: Date;
    duration?: number;
    plannedDuration?: number;
    endOnNext?: boolean;
    attributes: Record<string, any>;
    constructor({ id, classId, start, end, duration, plannedDuration, endOnNext, attributes }: DateRange);
}
declare class SpliceInfo {
    type: string;
    duration?: number;
    tagName?: string;
    value?: any;
    constructor({ type, duration, tagName, value }: SpliceInfo);
}
type DataType = 'part' | 'playlist' | 'prefetch' | 'segment';
declare class Data {
    type: DataType;
    constructor(type: DataType);
}
declare class Playlist extends Data {
    isMasterPlaylist: boolean;
    uri?: string;
    version?: number;
    independentSegments: boolean;
    start?: {
        offset: number;
        precise: boolean;
    };
    source?: string;
    constructor({ isMasterPlaylist, uri, version, independentSegments, start, source }: Partial<Playlist> & {
        isMasterPlaylist: boolean;
    });
}
declare class MasterPlaylist extends Playlist {
    variants: Variant[];
    currentVariant?: number;
    sessionDataList: SessionData[];
    sessionKeyList: Key[];
    constructor(params?: Partial<MasterPlaylist>);
}
type LowLatencyCompatibility = {
    canBlockReload: boolean;
    canSkipUntil: number;
    holdBack: number;
    partHoldBack: number;
};
declare class MediaPlaylist extends Playlist {
    targetDuration: number;
    mediaSequenceBase?: number;
    discontinuitySequenceBase?: number;
    endlist: boolean;
    playlistType?: 'EVENT' | 'VOD';
    isIFrame?: boolean;
    segments: Segment[];
    prefetchSegments: PrefetchSegment[];
    lowLatencyCompatibility?: LowLatencyCompatibility;
    partTargetDuration?: number;
    renditionReports: RenditionReport[];
    skip: number;
    hash?: Record<string, any>;
    duration: number;
    timestamp: number;
    constructor(params?: Partial<MediaPlaylist>);
}
declare class Segment extends Data {
    uri: string;
    mimeType: string;
    data: any;
    duration: number;
    title?: string;
    byterange: Byterange;
    discontinuity?: boolean;
    mediaSequenceNumber: number;
    discontinuitySequence: number;
    key?: Key;
    map: MediaInitializationSection;
    programDateTime?: Date;
    dateRange: DateRange;
    markers: SpliceInfo[];
    parts: PartialSegment[];
    constructor({ uri, mimeType, data, duration, title, byterange, discontinuity, mediaSequenceNumber, discontinuitySequence, key, map, programDateTime, dateRange, markers, parts }: any);
}
declare class PartialSegment extends Data {
    hint: boolean;
    uri: string;
    duration?: number;
    independent?: boolean;
    byterange?: Byterange;
    gap?: boolean;
    constructor({ hint, uri, duration, independent, byterange, gap }: Omit<PartialSegment, 'type'>);
}
declare class PrefetchSegment extends Data {
    uri: string;
    discontinuity?: boolean;
    mediaSequenceNumber: number;
    discontinuitySequence: number;
    key?: Key | null;
    constructor({ uri, discontinuity, mediaSequenceNumber, discontinuitySequence, key }: Omit<PrefetchSegment, 'type'>);
}
declare class RenditionReport {
    uri: string;
    lastMSN?: number;
    lastPart: number;
    constructor({ uri, lastMSN, lastPart }: RenditionReport);
}
export { Rendition, Variant, SessionData, Key, MediaInitializationSection, DateRange, SpliceInfo, Playlist, MasterPlaylist, MediaPlaylist, Segment, PartialSegment, PrefetchSegment, RenditionReport };
