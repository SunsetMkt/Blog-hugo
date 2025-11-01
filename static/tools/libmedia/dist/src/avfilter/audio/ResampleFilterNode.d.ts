import type { PCMParameters } from 'audioresample/Resampler';
import type { AVFilterNodeOptions } from '../AVFilterNode';
import AVFilterNode from '../AVFilterNode';
import type AVFrame from 'avutil/struct/avframe';
import type { WebAssemblyResource } from 'cheap/webassembly/compiler';
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
