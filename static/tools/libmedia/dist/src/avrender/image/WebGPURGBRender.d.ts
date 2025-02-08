import AVFrame from 'avutil/struct/avframe';
import WebGPURender, { WebGPURenderOptions } from './WebGPURender';
export default abstract class WebGPURGBRender extends WebGPURender {
    protected rgbTexture: GPUTexture;
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: WebGPURenderOptions);
    protected generateBindGroup(): void;
    protected abstract checkFrame(frame: pointer<AVFrame>): void;
    destroy(): void;
}
