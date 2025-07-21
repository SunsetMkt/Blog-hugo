import AVFrame from 'avutil/struct/avframe';
import { AVPixelFormat } from 'avutil/pixfmt';
import ColorSpace from './colorSpace/ColorSpace';
export type ImageRenderOptions = {
    devicePixelRatio: number;
    preserveDrawingBuffer?: boolean;
    renderMode: RenderMode;
    onRenderContextLost?: () => void;
    dstColorSpace?: ColorSpace;
    sar?: number;
};
export declare const enum RenderMode {
    /**
     * 自适应
     */
    FIT = 0,
    /**
     * 填充
     */
    FILL = 1
}
export default abstract class ImageRender {
    protected canvas: HTMLCanvasElement | OffscreenCanvas;
    protected options: ImageRenderOptions;
    protected textureWidth: number;
    protected videoWidth: number;
    protected videoHeight: number;
    protected canvasWidth: number;
    protected canvasHeight: number;
    protected rotate: number;
    protected renderMode: RenderMode;
    protected format: AVPixelFormat;
    protected lost: boolean;
    protected destroyed: boolean;
    protected srcColorSpace: ColorSpace;
    protected dstColorSpace: ColorSpace;
    protected flipHorizontal: boolean;
    protected flipVertical: boolean;
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: ImageRenderOptions);
    protected getRotateMatrix(angle: number): number[];
    abstract init(): Promise<void>;
    abstract render(frame: VideoFrame | pointer<AVFrame>): void;
    abstract clear(): void;
    abstract setRotate(angle: number, clear?: boolean): void;
    protected abstract layout(): void;
    setRenderMode(mode: RenderMode): void;
    enableHorizontalFlip(enable: boolean): void;
    enableVerticalFlip(enable: boolean): void;
    viewport(width: number, height: number): void;
    getVideoWidth(): number;
    getVideoHeight(): number;
    destroy(): void;
    setDstColorSpace(space: ColorSpace): void;
    static isSupport(frame: pointer<AVFrame> | VideoFrame | ImageBitmap): boolean;
}
