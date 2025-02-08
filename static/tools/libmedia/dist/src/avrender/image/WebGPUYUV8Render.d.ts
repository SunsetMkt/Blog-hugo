import AVFrame from 'avutil/struct/avframe';
import { WebGPURenderOptions } from './WebGPURender';
import WebGPUYUVRender from './WebGPUYUVRender';
export default class WebGPUYUV8Render extends WebGPUYUVRender {
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: WebGPURenderOptions);
    private generateFragmentSource;
    protected checkFrame(frame: pointer<AVFrame>): void;
    render(frame: pointer<AVFrame>): void;
    static isSupport(frame: pointer<AVFrame> | VideoFrame | ImageBitmap): boolean;
}
