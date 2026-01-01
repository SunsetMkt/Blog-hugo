import { type AVFrame, type AVRational } from '@libmedia/avutil';
import type { AVFilterNodeOptions } from '../AVFilterNode';
import AVFilterNode from '../AVFilterNode';
export interface FramerateFilterNodeOptions extends AVFilterNodeOptions {
    framerate: AVRational;
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
