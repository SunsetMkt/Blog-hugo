import IOWriterSync from 'common/io/IOWriterSync';
export interface Header {
    version: int32;
    readVersion: int32;
    maxIdLength: int32;
    maxSizeLength: int32;
    docType: string;
    docTypeVersion: int32;
    docTypeReadVersion: int32;
}
export interface SeekHeadEntry {
    id: int32;
    pos: int64;
}
export interface SeekHead {
    entry: SeekHeadEntry[];
}
export interface Info {
    duration?: float;
    timestampScale?: int32;
    title?: string;
    muxingApp?: string;
    writingApp?: string;
    dateUTC?: Uint8Array;
    segmentUUID?: uint64;
}
export interface EbmlBin {
    pos: int64;
    size: int64;
    data?: Uint8Array;
}
export interface MasteringMeta {
    rx?: float;
    ry?: float;
    gx?: float;
    gy?: float;
    bx?: float;
    by?: float;
    whiteX?: float;
    whiteY?: float;
    minLuminance?: float[];
    maxLuminance?: float;
}
export interface VideoColor {
    matrixCoefficients?: int32;
    bitsPerChannel?: int32;
    chromaSubHorz?: int32;
    chromaSubVert?: int32;
    cbSubHorz?: int32;
    cbSubVert?: int32;
    chromaSitingHorz?: int32;
    chromaSitingVert?: int32;
    range?: int32;
    transferCharacteristics?: int32;
    primaries?: int32;
    maxCll?: int32;
    maxFall?: int32;
    masteringMeta?: MasteringMeta;
}
export interface VideoProjection {
    type?: int32;
    private?: EbmlBin;
    yaw?: int32;
    pitch?: int32;
    roll?: int32;
}
export interface VideoTrack {
    interlaced?: int32;
    fieldOrder?: int32;
    stereoMode?: int32;
    alphaMode?: int32;
    pixelWidth?: int32;
    pixelHeight?: int32;
    displayWidth?: int32;
    displayHeight?: int32;
    aspectRatio?: int32;
    color?: VideoColor;
    projection?: VideoProjection;
    framerate?: float;
    colorSpace?: EbmlBin;
    displayUnit?: int32;
}
export interface AudioTrack {
    sampleRate?: float;
    outSampleRate?: int32;
    bitDepth?: int32;
    channels?: int32;
}
export interface TrackPlane {
    uid?: int32;
    type?: int32;
}
export interface TrackCombinePlanes {
    planes: TrackPlane[];
}
export interface TrackOperation {
    entry: TrackCombinePlanes[];
}
export interface TrackEncodingCompression {
    algo?: int32;
    settings?: EbmlBin;
}
export interface TrackEncodingEncryption {
    algo?: int32;
    keyId?: EbmlBin;
}
export interface TrackEncoding {
    scope?: int32;
    type?: int32;
    compression?: TrackEncodingCompression;
    encryption?: TrackEncodingEncryption;
}
export interface TrackEncodings {
    entry: TrackEncoding[];
}
export interface TrackEntry {
    number?: uint32;
    uid?: uint64;
    type?: uint32;
    name?: string;
    default?: boolean;
    enabled?: boolean;
    language?: string;
    codecId?: string;
    codecPrivate?: EbmlBin;
    codecName?: string;
    codecDelay?: int64;
    timeScale?: double;
    defaultDuration?: int64;
    flagDefault?: uint64[];
    flagForced?: uint64;
    seekPreroll?: int32;
    video?: VideoTrack;
    audio?: AudioTrack;
    maxBlockAdditionalId?: int32;
    operations?: TrackOperation;
    encodings?: TrackEncodings;
    needDecompression?: boolean;
    needDecryption?: boolean;
    duration?: int64;
    maxPts?: int64;
    lastPts?: int64;
}
export interface Tracks {
    entry: TrackEntry[];
}
export interface Attachment {
    uid?: uint64;
    name?: string;
    mime?: string;
    data?: EbmlBin;
    description?: string;
}
export interface Attachments {
    entry: Attachment[];
}
export interface ChapterDisplay {
    title?: string;
    language?: string;
}
export interface ChapterAtom {
    start?: int64;
    end?: int64;
    uid?: uint64;
    stringUid?: string;
    display?: ChapterDisplay;
}
export interface Chapter {
    atom: ChapterAtom[];
}
export interface Chapters {
    entry: Chapter[];
}
export interface CuePointPos {
    track?: uint32;
    pos?: int64;
}
export interface CuePoint {
    time?: int64;
    pos?: CuePointPos[];
}
export interface Cues {
    entry: CuePoint[];
}
export interface TagTargets {
    type?: string;
    typeValue?: int32;
    trackUid?: uint64;
    chapterUid?: uint64;
    attachUid?: uint64;
}
export interface SimpleTag {
    name?: string;
    string?: string;
    language?: string;
    default?: int32;
    sub?: SimpleTag;
}
export interface Tag {
    tag?: SimpleTag;
    target?: TagTargets;
}
export interface Tags {
    entry: Tag[];
}
export interface Addition {
    additionalId?: int32;
    additional: EbmlBin;
}
export interface Additions {
    entry: Addition[];
}
export interface BlockGroup {
    block: EbmlBin;
    duration?: int64;
    discardPadding?: int64;
    reference?: int64[];
    nonSimple?: boolean;
    additions?: Additions;
}
export interface Cluster {
    timeCode: int64;
    pos: int64;
    prevSize?: int32;
    block?: EbmlBin;
    blockGroup?: BlockGroup;
}
export interface ClusterIndex {
    time: int64;
    pos: int64;
}
export interface ElePositionInfo {
    pos: int64;
    length: int32 | int64;
    bytes: 4 | 8;
}
export interface MatroskaContext {
    isLive: boolean;
    firstCluster: int64;
    header: Header;
    segmentStart: int64;
    seekHead: SeekHead;
    info: Info;
    tracks: Tracks;
    attachments: Attachments;
    chapters: Chapters;
    cues: Cues;
    tags: Tags;
    maxPts: int64;
    currentCluster: Cluster;
    clusterIndexes: ClusterIndex[];
    clusterIndexesPosMap: Map<int64, int32>;
}
export interface OMatroskaContext {
    isLive: boolean;
    segmentStart: int64;
    seekHeadEnd: int64;
    header: Header;
    seekHead: SeekHead;
    info: Info;
    tracks: Tracks;
    attachments: Attachments;
    chapters: Chapters;
    cues: Cues;
    tags: Tags;
    elePositionInfos: ElePositionInfo[];
    eleWriter: IOWriterSync;
    eleCaches: Uint8Array[];
    currentCluster: Cluster;
    hasVideo: boolean;
}
