import { type AVFrame } from '@libmedia/avutil';
import { type Data } from '@libmedia/common';
import { type WebAssemblyResource } from '@libmedia/cheap';
import { type ScaleParameters } from '@libmedia/videoscale';
import AVFilterNode from '../AVFilterNode';
import type { AVFilterNodeOptions } from '../AVFilterNode';
export interface ScaleFilterNodeOptions extends AVFilterNodeOptions {
    resource: WebAssemblyResource | ArrayBuffer;
    output: ScaleParameters;
}
export default class ScaleFilterNode extends AVFilterNode {
    options: ScaleFilterNodeOptions;
    private scaler;
    constructor(options: ScaleFilterNodeOptions);
    ready(): Promise<void>;
    destroy(): Promise<void>;
    process(inputs: (pointer<AVFrame> | VideoFrame | int32)[], outputs: (pointer<AVFrame> | VideoFrame | int32)[], options?: Data): Promise<void>;
}
