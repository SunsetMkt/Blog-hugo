import AVFrame from 'avutil/struct/avframe';
import { WebGLRenderOptions } from './WebGLRender';
import WebGLDefaultRender from './WebGLDefaultRender';
import VideoProgram16 from './webgl/program/VideoProgram16';
export default class WebGLDefault16Render extends WebGLDefaultRender {
    private linesize;
    protected gl: WebGL2RenderingContext;
    protected program: VideoProgram16;
    private hdrMetadata;
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: WebGLRenderOptions);
    init(): Promise<void>;
    private generateVertexSource;
    private generateFragmentSource;
    protected checkFrame(frame: pointer<AVFrame>): void;
    render(frame: pointer<AVFrame>): void;
    destroy(): void;
    static isSupport(frame: pointer<AVFrame> | VideoFrame | ImageBitmap): boolean;
}
