import { FrameHeader } from './frameHeader';
export interface Mp3MetaData {
    title?: string;
    artist?: string;
    album?: string;
    date?: string;
    comment?: string;
    track?: string;
    genre?: string | number;
    encoder?: string;
    poster?: Uint8Array;
    lyrics?: string;
    albumArtist?: string;
    disc?: string;
    copyright?: string;
    language?: string;
    performer?: string;
    publisher?: string;
    vendor?: string;
    composer?: string;
    compilation?: string;
    creationTime?: string;
    albumSort?: string;
    artistSort?: string;
    titleSort?: string;
    grouping?: string;
}
export interface ID3V2 {
    version: number;
    revision: number;
    flags: number;
}
export interface Mp3StreamContext {
    nbFrame: int64;
    frameHeader: FrameHeader;
    tocIndexes: {
        pos: int64;
        dts: int64;
    }[];
    nextDTS: int64;
    frameLength: int32;
}
export interface Mp3FormatOptions {
    id3v2Version?: 0 | 3 | 4;
    hasID3v1?: boolean;
    hasXing?: boolean;
}
