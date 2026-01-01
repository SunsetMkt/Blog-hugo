import type { WebGPURenderOptions } from './WebGPURender';
import WebGPUDefaultRender from './WebGPUDefaultRender';
import { type AVFrame } from '@libmedia/avutil';
export default class WebGPUDefault16Render extends WebGPUDefaultRender {
    private linesize;
    private hdrMetadata;
    private hdrMetadataBuffer;
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: WebGPURenderOptions);
    private generateFragmentSource;
    init(): Promise<void>;
    protected generateBindGroup(): void;
    protected checkFrame(frame: pointer<AVFrame>): void;
    render(frame: pointer<AVFrame>): void;
    destroy(): void;
    static isSupport(frame: pointer<AVFrame> | VideoFrame | ImageBitmap): boolean;
}
