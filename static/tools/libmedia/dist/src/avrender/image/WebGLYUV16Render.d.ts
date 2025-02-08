import AVFrame from 'avutil/struct/avframe';
import { WebGLRenderOptions } from './WebGLRender';
import WebGLYUVRender from './WebGLYUVRender';
import YUV16Program from './webgl/program/YUV16Program';
export default class WebGLYUV16Render extends WebGLYUVRender {
    protected gl: WebGL2RenderingContext;
    protected program: YUV16Program;
    private hdrMetadata;
    private ext;
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: WebGLRenderOptions);
    init(): Promise<void>;
    private generateFragmentSource;
    protected checkFrame(frame: pointer<AVFrame>): void;
    render(frame: pointer<AVFrame>): void;
    destroy(): void;
    static isSupport(frame: pointer<AVFrame> | VideoFrame | ImageBitmap): boolean;
}
