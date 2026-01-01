import type { AVSampleFormat, AVChannelLayout, AVPCMBuffer } from '@libmedia/avutil';
import { type WebAssemblyResource } from '@libmedia/cheap';
export interface PCMParameters {
    channels: int32;
    sampleRate: int32;
    format: AVSampleFormat;
    layout?: pointer<AVChannelLayout>;
}
export type ResamplerOptions = {
    resource: WebAssemblyResource;
};
export default class Resampler {
    private resampler;
    private options;
    private inputParameters;
    private outputParameters;
    constructor(options: ResamplerOptions);
    open(input: PCMParameters, output: PCMParameters): Promise<int32>;
    resample(input: pointer<pointer<uint8>>, output: pointer<AVPCMBuffer>, numberOfFrames: int32): int32;
    getOutputSampleCount(numberOfFrames: int32): int32;
    close(): void;
    getInputPCMParameters(): PCMParameters;
    getOutputPCMParameters(): PCMParameters;
}
