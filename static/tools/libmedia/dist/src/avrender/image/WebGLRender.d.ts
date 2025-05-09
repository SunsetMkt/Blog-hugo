import ImageRender, { ImageRenderOptions } from './ImageRender';
import AVFrame from 'avutil/struct/avframe';
import VideoProgram from './webgl/program/VideoProgram';
import { Timeout } from 'common/types/type';
export interface WebGLRenderOptions extends ImageRenderOptions {
}
export default abstract class WebGLRender extends ImageRender {
    protected options: WebGLRenderOptions;
    protected gl: WebGLRenderingContext | WebGL2RenderingContext;
    protected vbo: WebGLBuffer;
    protected program: VideoProgram;
    protected vertex: number[];
    protected webglContextLostTimer: Timeout;
    protected onWebglContextLost: ((event: Event) => void) | void;
    protected onWebglContextRestored: ((event: Event) => void) | void;
    protected fragmentSource: string;
    protected vertexSource: string;
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: WebGLRenderOptions);
    init(): Promise<void>;
    viewport(width: number, height: number): void;
    protected useProgram(): void;
    protected abstract checkFrame(frame: pointer<AVFrame>): void;
    clear(): void;
    protected layout(): void;
    setRotate(angle: number, clear?: boolean): void;
    destroy(): void;
}
