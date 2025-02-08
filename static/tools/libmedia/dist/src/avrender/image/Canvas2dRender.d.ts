import ImageRender, { ImageRenderOptions } from './ImageRender';
import AVFrame from 'avutil/struct/avframe';
export default class CanvasImageRender extends ImageRender {
    private context;
    private paddingLeft;
    private paddingTop;
    private flipX;
    private flipY;
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: ImageRenderOptions);
    init(): Promise<void>;
    clear(): void;
    private checkFrame;
    render(frame: VideoFrame): void;
    protected layout(): void;
    setRotate(angle: number, clear?: boolean): void;
    destroy(): void;
    static isSupport(frame: pointer<AVFrame> | VideoFrame | ImageBitmap): boolean;
}
