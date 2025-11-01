import type { WebGPURenderOptions } from './WebGPURender';
import WebGPURender from './WebGPURender';
import type AVFrame from 'avutil/struct/avframe';
export default class WebGPUExternalRender extends WebGPURender {
    private hasAlpha;
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: WebGPURenderOptions);
    private generateFragmentSource;
    private checkFrame;
    protected generateBindGroup(): void;
    render(frame: VideoFrame, alpha?: VideoFrame): void;
    static isSupport(frame: pointer<AVFrame> | VideoFrame | ImageBitmap): boolean;
}
