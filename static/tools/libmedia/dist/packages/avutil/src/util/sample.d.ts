import { AVSampleFormat } from '../audiosamplefmt';
export declare function getBytesPerSample(format: AVSampleFormat): number;
export declare function sampleFormatIsPlanar(format: AVSampleFormat): boolean;
export declare function sampleFormatGetLinesize(format: AVSampleFormat, channels: int32, nbSamples: int32, align?: int32): number;
export declare function sampleFillArrays(audioData: pointer<pointer<uint8>>, buf: pointer<uint8>, format: AVSampleFormat, linesize: int32, channels: int32): 0 | -1;
export declare function sampleAlloc(audioData: pointer<pointer<uint8>>, format: AVSampleFormat, linesize: int32, channels: int32): number;
export declare function sampleSetSilence(audioData: pointer<pointer<uint8>>, offset: int32, format: AVSampleFormat, nbSamples: int32, channels: int32): void;
