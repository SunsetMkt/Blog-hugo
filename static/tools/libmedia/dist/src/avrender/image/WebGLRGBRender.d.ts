import WebGLRender, { WebGLRenderOptions } from './WebGLRender';
import RGBProgram from './webgl/program/RGBProgram';
import RGBTexture from './webgl/texture/RGBTexture';
export default abstract class WebGLRGBRender extends WebGLRender {
    protected program: RGBProgram;
    protected rgbTexture: RGBTexture;
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: WebGLRenderOptions);
    protected useProgram(): void;
    destroy(): void;
}
