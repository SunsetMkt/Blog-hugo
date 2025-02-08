import YUVTexture from './webgl/texture/YUVTexture';
import WebGLRender, { WebGLRenderOptions } from './WebGLRender';
import YUVProgram from './webgl/program/YUVProgram';
export default abstract class WebGLYUVRender extends WebGLRender {
    protected program: YUVProgram;
    protected yTexture: YUVTexture;
    protected uTexture: YUVTexture;
    protected vTexture: YUVTexture;
    protected aTexture: YUVTexture;
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: WebGLRenderOptions);
    protected useProgram(): void;
    destroy(): void;
}
