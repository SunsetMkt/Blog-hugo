import type { ImageRenderOptions } from './ImageRender';
import ImageRender from './ImageRender';
import { type AVFrame } from '@libmedia/avutil';
export interface CanvasImageRenderOptions extends ImageRenderOptions {
    colorSpace?: 'rec2100-pq' | 'rec2100-hlg';
}
export default class CanvasImageRender extends ImageRender {
    options: CanvasImageRenderOptions;
    private context;
    private paddingLeft;
    private paddingTop;
    private flipX;
    private flipY;
    private hasAlpha;
    private alphaMask;
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: CanvasImageRenderOptions);
    init(): Promise<void>;
    clear(): void;
    private checkFrame;
    render(frame: VideoFrame, alpha?: VideoFrame): void;
    protected layout(): void;
    setRotate(angle: number, clear?: boolean): void;
    destroy(): void;
    static isSupport(frame: pointer<AVFrame> | VideoFrame | ImageBitmap): boolean;
}
