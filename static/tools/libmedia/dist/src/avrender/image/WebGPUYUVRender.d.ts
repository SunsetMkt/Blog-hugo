import AVFrame from 'avutil/struct/avframe';
import WebGPURender, { WebGPURenderOptions } from './WebGPURender';
export default abstract class WebGPUYUVRender extends WebGPURender {
    protected yTexture: GPUTexture;
    protected uTexture: GPUTexture;
    protected vTexture: GPUTexture;
    protected aTexture: GPUTexture;
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: WebGPURenderOptions);
    protected generateBindGroup(): void;
    protected abstract checkFrame(frame: pointer<AVFrame>): void;
    destroy(): void;
}
