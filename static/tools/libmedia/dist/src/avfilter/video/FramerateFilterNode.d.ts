import AVFilterNode, { AVFilterNodeOptions } from '../AVFilterNode';
import AVFrame from 'avutil/struct/avframe';
import { Rational } from 'avutil/struct/rational';
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
