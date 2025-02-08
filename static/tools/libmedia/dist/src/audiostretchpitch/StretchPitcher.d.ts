import { WebAssemblyResource } from 'cheap/webassembly/compiler';
export interface StretchPitchParameters {
    channels: int32;
    sampleRate: int32;
}
export type StretchPitchOptions = {
    resource: WebAssemblyResource;
};
export default class StretchPitcher {
    private processor;
    private options;
    constructor(options: StretchPitchOptions);
    open(parameters: StretchPitchParameters): Promise<void>;
    setRate(rate: double): void;
    setRateChange(change: double): void;
    setTempo(tempo: double): void;
    setTempoChange(change: double): void;
    setPitch(pitch: double): void;
    setPitchOctaves(pitch: double): void;
    setPitchSemiTones(pitch: double): void;
    sendSamples(input: pointer<float>, nbSamples: int32): void;
    receiveSamples(output: pointer<float>, maxSamples: int32): int32;
    flush(): void;
    clear(): void;
    getUnprocessedSamplesCount(): int32;
    getInputOutputSamplesRatio(): int32;
    getLatency(): int32;
    close(): void;
}
