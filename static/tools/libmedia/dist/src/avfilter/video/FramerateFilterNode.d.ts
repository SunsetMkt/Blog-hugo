import type { AVFilterNodeOptions } from '../AVFilterNode';
import AVFilterNode from '../AVFilterNode';
import type AVFrame from 'avutil/struct/avframe';
import type { Rational } from 'avutil/struct/rational';
export interface FramerateFilterNodeOptions extends AVFilterNodeOptions {
    framerate: Rational;
}
export default class FramerateFilterNode extends AVFilterNode {
    options: FramerateFilterNodeOptions;
    private lastPts;
    private delta;
    private timeBase;
    private step;
    constructor(options: FramerateFilterNodeOptions);
    ready(): Promise<void>;
    destroy(): Promise<void>;
    process(inputs: (pointer<AVFrame> | VideoFrame | int32)[], outputs: (pointer<AVFrame> | VideoFrame | int32)[]): Promise<void>;
}
