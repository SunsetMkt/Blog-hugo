import AVFrame from 'avutil/struct/avframe';
import { WebGLRenderOptions } from './WebGLRender';
import WebGLYUVRender from './WebGLYUVRender';
export default class WebGLYUV8Render extends WebGLYUVRender {
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: WebGLRenderOptions);
    private generateFragmentSource;
    protected checkFrame(frame: pointer<AVFrame>): void;
    render(frame: pointer<AVFrame>): void;
    static isSupport(frame: pointer<AVFrame> | VideoFrame | ImageBitmap): boolean;
}
