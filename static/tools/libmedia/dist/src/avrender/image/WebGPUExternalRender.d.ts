import WebGPURender, { WebGPURenderOptions } from './WebGPURender';
import AVFrame from 'avutil/struct/avframe';
export default class WebGPUExternalRender extends WebGPURender {
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: WebGPURenderOptions);
    private checkFrame;
    protected generateBindGroup(): void;
    render(frame: VideoFrame): void;
    destroy(): void;
    static isSupport(frame: pointer<AVFrame> | VideoFrame | ImageBitmap): boolean;
}
