import AVFrame from 'avutil/struct/avframe';
import { WebGPURenderOptions } from './WebGPURender';
import WebGPURGBRender from './WebGPURGBRender';
export default class WebGPURGB8Render extends WebGPURGBRender {
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: WebGPURenderOptions);
    private generateFragmentSource;
    protected checkFrame(frame: pointer<AVFrame>): void;
    render(frame: pointer<AVFrame>): void;
    static isSupport(frame: pointer<AVFrame> | VideoFrame | ImageBitmap): boolean;
}
