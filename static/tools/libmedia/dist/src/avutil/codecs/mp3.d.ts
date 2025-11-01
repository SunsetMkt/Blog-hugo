import type { Uint8ArrayInterface } from 'common/io/interface';
import type AVCodecParameters from '../struct/avcodecparameters';
import type { AVPacketSideDataType } from '../codec';
export declare function getSampleRateByVersionIndex(version: number, samplingFreqIndex: number): number;
export declare function getFrameSizeByVersionLayer(version: number, layer: number): number;
export declare function getBitRateByVersionLayerIndex(version: number, layer: number, index: number): number;
export declare function getProfileByLayer(layer: number): int32 | 34 | 32 | 33;
export declare const enum MP3Profile {
    Layer1 = 32,
    Layer2 = 33,
    Layer3 = 34
}
export declare const MP3Profile2Name: Record<MP3Profile, string>;
export declare function parseAVCodecParameters(stream: {
    codecpar: AVCodecParameters;
    sideData: Partial<Record<AVPacketSideDataType, Uint8Array>>;
}, buffer?: Uint8ArrayInterface): void;
