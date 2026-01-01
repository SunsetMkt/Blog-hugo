import type { BoxType } from './boxType';
import type { AVChapter } from '../../AVFormatContext';
import { type Data } from '@libmedia/common';
import { type IOReader, type IOWriterSync } from '@libmedia/common/io';
import { type AVStream, type EncryptionInitInfo, type EncryptionInfo } from '@libmedia/avutil';
export interface BoxsPositionSizeInfo {
    pos: bigint;
    type: BoxType;
    size: number;
}
export interface Atom {
    type: number;
    size: number;
}
export interface FragmentTrack {
    trackId: number;
    baseDataOffset: bigint;
    defaultSampleDuration: number;
    defaultSampleSize: number;
    defaultSampleFlags: number;
    baseMediaDecodeTime: bigint;
    sampleCount: number;
    dataOffset: number;
    remainDataOffsets: number[];
    remainDataOffsetIndex: number[];
    dataOffsetPos: bigint;
    firstSampleFlags: number;
    sampleDurations: number[];
    sampleSizes: number[];
    sampleFlags: number[];
    sampleCompositionTimeOffset: number[];
    baseIsMoof: boolean;
    ioWriter: IOWriterSync;
    buffers: Uint8Array[];
    streamIndex?: number;
    cenc?: {
        sampleCount: number;
        defaultSampleInfoSize: number;
        sampleSizes: number[];
        offset: number;
        sampleInfoOffset: (number | bigint)[];
        useSubsamples: boolean;
        sampleEncryption: Omit<EncryptionInfo, 'scheme' | 'keyId' | 'cryptByteBlock' | 'skipByteBlock'>[];
        offsetPos?: bigint;
    };
    lastFragIndexDts: int64;
    tfdtDelay: int64;
    trunPtsDelay: int64;
}
export interface Sample {
    dts: bigint;
    pts: bigint;
    pos: bigint;
    size: number;
    duration: number;
    flags: number;
}
export interface EC3Info {
    done: boolean;
    numBlocks: uint8;
    dataRate: uint16;
    ac3BitrateCode: int8;
    numIndSub: uint8;
    substream: {
        fscod: uint8;
        bsid: uint8;
        bsmod: uint8;
        acmod: uint8;
        lfeon: uint8;
        numDepSub: uint8;
        chanLoc: uint8;
    }[];
}
export interface Cenc {
    schemeType: number;
    schemeVersion: number;
    isProtected: number;
    defaultPerSampleIVSize: number;
    defaultKeyId: Uint8Array;
    defaultConstantIV: Uint8Array;
    cryptByteBlock: number;
    skipByteBlock: number;
    pattern: boolean;
}
export interface HEIFItem {
    id?: number;
    name?: string;
    type?: string;
    ipma?: number[];
    isIdatRelative?: boolean;
    extentLength?: number;
    extentOffset?: number;
    extentIndex?: number;
    rotation?: number;
    hflip?: boolean;
    vflip?: boolean;
    refs?: Record<string, number>;
}
export interface HEIFGrid {
    item: HEIFItem;
    tileIdList: number[];
}
export interface IsobmffContext {
    isom: boolean;
    timescale: number;
    duration: bigint;
    foundMoov: boolean;
    foundMdat: boolean;
    foundHEIF: boolean;
    majorBrand: number;
    minorVersion: number;
    compatibleBrand: number[];
    creationTime: bigint;
    modificationTime: bigint;
    rate: number;
    volume: number;
    matrix: Uint32Array;
    nextTrackId: number;
    fragment: boolean;
    trexs: {
        trackId: number;
        size: number;
        duration: number;
        flags: number;
    }[];
    cencs?: Record<number, Cenc>;
    currentFragment: {
        sequence: number;
        currentTrack: FragmentTrack;
        tracks: FragmentTrack[];
        pos: bigint;
        size: number;
        firstWrote?: boolean;
    };
    boxsPositionInfo: BoxsPositionSizeInfo[];
    holdMoovPos: bigint;
    currentChunk: {
        sampleCount: number;
        streamIndex: number;
        pos: bigint;
    };
    ac3Info?: EC3Info;
    firstMoof?: int64;
    ignoreEditlist?: boolean;
    use64Mdat?: boolean;
    encryptionInitInfos?: EncryptionInitInfo[];
    ignoreEncryption?: boolean;
    parsers?: Partial<Record<number, (ioReader: IOReader, stream: AVStream, atom: Atom, isobmffContext: IsobmffContext) => Promise<void>>>;
    parseOneBox?: (ioReader: IOReader, stream: AVStream, atom: Atom, isobmffContext: IsobmffContext) => Promise<void>;
    audioOnly?: boolean;
    metadata?: Data;
    chapters?: AVChapter[];
    useMetadataTags?: boolean;
    covr?: {
        type: int32;
        data: Uint8Array;
    };
    chapterTrack?: number[];
    heif?: {
        primaryId?: number;
        ipcoItem?: {
            tag: uint32;
            data: Uint8Array;
        }[];
        idatOffset?: int64;
        items?: HEIFItem[];
        grid?: HEIFGrid[];
        foundIinf?: boolean;
        foundIloc?: boolean;
        currentItem?: HEIFItem;
    };
}
export interface IsobmffStreamContext {
    chunkOffsets: bigint[];
    cttsSampleCounts: number[];
    cttsSampleOffsets: number[];
    stscFirstChunk: number[];
    stscSamplesPerChunk: number[];
    stscSampleDescriptionIndex: number[];
    stssSampleNumbersMap: Map<number, boolean>;
    stssSampleNumbers: number[];
    sampleSizes: number[];
    sttsSampleCounts: number[];
    sttsSampleDeltas: number[];
    fragIndexes: {
        pos: bigint;
        time: bigint;
    }[];
    duration: bigint;
    trackId: number;
    layer: number;
    alternateGroup: number;
    volume: number;
    matrix: Int32Array;
    width: number;
    height: number;
    audioCid: number;
    samplesPerFrame: number;
    bytesPerFrame: number;
    currentSample: number;
    sampleEnd: boolean;
    samplesIndex: Sample[];
    samplesEncryption: EncryptionInfo[];
    lastPts: bigint;
    lastDts: bigint;
    startDts: bigint;
    startCT: number;
    startPts: bigint;
    lastDuration: number;
    chunkCount: number;
    firstWrote: boolean;
    lastStscCount: number;
    perStreamGrouping: boolean;
    index: number;
    flags: number;
    isPcm?: boolean;
    format?: number;
}
export interface ElstEntry {
    segmentDuration: int64;
    mediaTime: int64;
    mediaRate: number;
    mediaRateFraction: number;
}
