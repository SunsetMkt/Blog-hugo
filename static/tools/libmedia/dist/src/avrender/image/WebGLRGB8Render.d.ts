import AVFrame from 'avutil/struct/avframe';
import { WebGLRenderOptions } from './WebGLRender';
import WebGLRGBRender from './WebGLRGBRender';
export default class WebGLRGB8Render extends WebGLRGBRender {
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: WebGLRenderOptions);
    private generateFragmentSource;
    protected checkFrame(frame: pointer<AVFrame>): void;
    render(frame: pointer<AVFrame>): void;
    static isSupport(frame: pointer<AVFrame> | VideoFrame | ImageBitmap): boolean;
}
