import AVFilterNode, { AVFilterNodeOptions } from './AVFilterNode';
import AVFrame from 'avutil/struct/avframe';
export interface RangeFilterNodeOptions extends AVFilterNodeOptions {
    /**
     * 微秒时间戳
     */
    start: int64;
    /**
     * 微秒时间戳
     */
    end: int64;
}
export default class RangeFilterNode extends AVFilterNode {
    options: RangeFilterNodeOptions;
    constructor(options: RangeFilterNodeOptions);
    ready(): Promise<void>;
    destroy(): Promise<void>;
    process(inputs: (pointer<AVFrame> | VideoFrame | int32)[], outputs: (pointer<AVFrame> | VideoFrame | int32)[]): Promise<void>;
}
