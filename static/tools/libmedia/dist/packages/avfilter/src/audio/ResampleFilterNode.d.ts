import { type AVFrame } from '@libmedia/avutil';
import { type PCMParameters } from '@libmedia/audioresample';
import type { AVFilterNodeOptions } from '../AVFilterNode';
import AVFilterNode from '../AVFilterNode';
import { type WebAssemblyResource } from '@libmedia/cheap';
export interface ResampleFilterNodeOptions extends AVFilterNodeOptions {
    resource: WebAssemblyResource | ArrayBuffer;
    output: PCMParameters;
}
export default class ResampleFilterNode extends AVFilterNode {
    options: ResampleFilterNodeOptions;
    private resampler;
    private pcm;
    constructor(options: ResampleFilterNodeOptions);
    ready(): Promise<void>;
    destroy(): Promise<void>;
    process(inputs: (pointer<AVFrame> | int32)[], outputs: (pointer<AVFrame> | int32)[]): Promise<void>;
}
