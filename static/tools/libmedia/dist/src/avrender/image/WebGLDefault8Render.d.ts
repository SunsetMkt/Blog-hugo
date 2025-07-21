import AVFrame from 'avutil/struct/avframe';
import { WebGLRenderOptions } from './WebGLRender';
import WebGLDefaultRender from './WebGLDefaultRender';
export default class WebGLDefault8Render extends WebGLDefaultRender {
    private linesize;
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: WebGLRenderOptions);
    init(): Promise<void>;
    private generateFragmentSource;
    protected checkFrame(frame: pointer<AVFrame>): void;
    render(frame: pointer<AVFrame>): void;
    static isSupport(frame: pointer<AVFrame> | VideoFrame | ImageBitmap): boolean;
}
