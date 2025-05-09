import VideoTexture from './webgl/texture/VideoTexture';
import WebGLRender, { WebGLRenderOptions } from './WebGLRender';
import VideoProgram from './webgl/program/VideoProgram';
export default abstract class WebGLDefaultRender extends WebGLRender {
    protected program: VideoProgram;
    protected yTexture: VideoTexture;
    protected uTexture: VideoTexture;
    protected vTexture: VideoTexture;
    protected aTexture: VideoTexture;
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: WebGLRenderOptions);
    protected useProgram(useUint?: boolean): void;
    destroy(): void;
}
