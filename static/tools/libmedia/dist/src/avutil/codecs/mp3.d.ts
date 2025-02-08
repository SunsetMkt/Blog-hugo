import { Uint8ArrayInterface } from 'common/io/interface';
import AVStream from '../AVStream';
export declare function getSampleRateByVersionIndex(version: number, samplingFreqIndex: number): number;
export declare function getFrameSizeByVersionLayer(version: number, layer: number): number;
export declare function getBitRateByVersionLayerIndex(version: number, layer: number, index: number): number;
export declare function getProfileByLayer(layer: number): int32 | 32 | 34 | 33;
export declare const enum MP3Profile {
    Layer1 = 32,
    Layer2 = 33,
    Layer3 = 34
}
export declare const MP3Profile2Name: Record<MP3Profile, string>;
export declare function parseAVCodecParameters(stream: AVStream, buffer: Uint8ArrayInterface): void;
