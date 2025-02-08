import AVStream from '../AVStream';
import { Uint8ArrayInterface } from 'common/io/interface';
import AVCodecParameters from '../struct/avcodecparameters';
export declare const enum AV1Profile {
    Main = 0,
    High = 1,
    Professional = 2
}
export declare const enum OBUType {
    Reserved = 0,
    SEQUENCE_HEADER = 1,
    TEMPORAL_DELIMITER = 2,
    FRAME_HEADER = 3,
    TILE_GROUP = 4,
    METADATA = 5,
    FRAME = 6,
    REDUNDANT_FRAME_HEADER = 7,
    TILE_LIST = 8,
    PADDING = 15
}
export declare const AV1Profile2Name: Record<AV1Profile, string>;
export declare const LevelCapabilities: {
    level: number;
    maxResolution: number;
}[];
export declare const AV1LevelIdx: number[];
export declare function getLevelByResolution(width: number, height: number, fps: number): number;
export declare function parseAVCodecParameters(stream: AVStream, extradata?: Uint8ArrayInterface): void;
/**
 * - 1 bit marker
 * - 7 bit version
 * - 3 bit profile
 * - 5 bit level
 * - 1 bit tier
 * - 1 bit bitdepth > 8
 * - 1 bit bitdepth == 12
 * - 1 bit monochrome
 * - 1 bit chroma_subsampling_x
 * - 1 bit chroma_subsampling_y
 * - 2 bit chroma_sample_position
 * - 8 bit padding
 *
 * @param header
 */
export declare function parseExtraData(extradata: Uint8ArrayInterface): {
    profile: number;
    level: number;
    tier: number;
    bitDepth: number;
    monochrome: number;
    chromaSubsamplingX: number;
    chromaSubsamplingY: number;
    chromaSamplePosition: number;
};
export declare function parseSequenceHeader(header: Uint8ArrayInterface): {
    width: number;
    height: number;
    profile: number;
    level: number;
    tier: number;
    bitDepth: number;
    monoChrome: number;
    colorRange: number;
    colorPrimaries: number;
    transferCharacteristics: number;
    matrixCoefficients: number;
    subsamplingX: number;
    subsamplingY: number;
    chromaSamplePosition: number;
};
export declare function splitOBU(buffer: Uint8ArrayInterface): Uint8ArrayInterface[];
export declare function generateExtradata(codecpar: pointer<AVCodecParameters>, buffer: Uint8ArrayInterface): Uint8Array<ArrayBufferLike>;
