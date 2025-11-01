import type { AVFilterNodeOptions } from '../AVFilterNode';
import AVFilterNode from '../AVFilterNode';
import type AVFrame from 'avutil/struct/avframe';
import type { WebAssemblyResource } from 'cheap/webassembly/compiler';
import type { ScaleParameters } from 'videoscale/VideoScaler';
import type { Data } from 'common/types/type';
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
