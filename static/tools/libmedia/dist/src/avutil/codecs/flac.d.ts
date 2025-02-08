import Stream from '../AVStream';
import { Uint8ArrayInterface } from 'common/io/interface';
export declare const enum MetaDataBlockType {
    STREAMINFO = 0,
    PADDING = 1,
    APPLICATION = 2,
    SEEKTABLE = 3,
    VORBIS_COMMENT = 4,
    CUESHEET = 5,
    PICTURE = 6
}
export declare const enum FlacCHMode {
    INDEPENDENT = 0,
    LEFT_SIDE = 1,
    RIGHT_SIDE = 2,
    MID_SIDE = 3
}
export declare const FLAC_STREAMINFO_SIZE = 34;
export declare const FLAC_MAX_CHANNELS = 8;
export declare const FLAC_MIN_BLOCKSIZE = 16;
export declare const FLAC_MAX_BLOCKSIZE = 65535;
export declare const FLAC_MIN_FRAME_SIZE = 10;
export declare const SampleSizeTable: number[];
export declare const SampleRateTable: number[];
export declare const BlockSizeTable: number[];
export declare const enum FlacChmode {
    FLAC_CHMODE_INDEPENDENT = 0,
    FLAC_CHMODE_LEFT_SIDE = 1,
    FLAC_CHMODE_RIGHT_SIDE = 2,
    FLAC_CHMODE_MID_SIDE = 3
}
export declare const enum FlacMetadataType {
    FLAC_METADATA_TYPE_STREAMINFO = 0,
    FLAC_METADATA_TYPE_PADDING = 1,
    FLAC_METADATA_TYPE_APPLICATION = 2,
    FLAC_METADATA_TYPE_SEEKTABLE = 3,
    FLAC_METADATA_TYPE_VORBIS_COMMENT = 4,
    FLAC_METADATA_TYPE_CUESHEET = 5,
    FLAC_METADATA_TYPE_PICTURE = 6,
    FLAC_METADATA_TYPE_INVALID = 127
}
export declare function parseAVCodecParameters(stream: Stream, extradata?: Uint8ArrayInterface): void;
