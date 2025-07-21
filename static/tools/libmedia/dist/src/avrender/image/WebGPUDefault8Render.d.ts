import AVFrame from 'avutil/struct/avframe';
import { WebGPURenderOptions } from './WebGPURender';
import WebGPUDefaultRender from './WebGPUDefaultRender';
export default class WebGPUDefault8Render extends WebGPUDefaultRender {
    private linesize;
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: WebGPURenderOptions);
    init(): Promise<void>;
    private generateFragmentSource;
    protected checkFrame(frame: pointer<AVFrame>): void;
    render(frame: pointer<AVFrame>): void;
    static isSupport(frame: pointer<AVFrame> | VideoFrame | ImageBitmap): boolean;
}
