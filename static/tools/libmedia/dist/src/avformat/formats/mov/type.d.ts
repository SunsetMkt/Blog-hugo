import IOWriter from 'common/io/IOWriterSync';
import { BoxType } from './boxType';
import { EncryptionInitInfo, EncryptionInfo } from 'avutil/struct/encryption';
import IOReader from 'common/io/IOReader';
import AVStream from 'avutil/AVStream';
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
    ioWriter: IOWriter;
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
export interface MOVContext {
    isom: boolean;
    timescale: number;
    duration: bigint;
    foundMoov: boolean;
    foundMdat: boolean;
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
    parsers?: Partial<Record<number, (ioReader: IOReader, stream: AVStream, atom: Atom, movContext: MOVContext) => Promise<void>>>;
    parseOneBox?: (ioReader: IOReader, stream: AVStream, atom: Atom, movContext: MOVContext) => Promise<void>;
}
export interface MOVStreamContext {
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
}
export interface ElstEntry {
    segmentDuration: int64;
    mediaTime: int64;
    mediaRate: number;
    mediaRateFraction: number;
}
