import ImageRender from './ImageRender';
import AVFrame from 'avutil/struct/avframe';
export default class WritableStreamRender extends ImageRender {
    private writableStream;
    private writer;
    constructor(writableStream: WritableStream<VideoFrame>);
    init(): Promise<void>;
    clear(): void;
    render(frame: VideoFrame | pointer<AVFrame>): void;
    protected layout(): void;
    setRotate(angle: number, clear?: boolean): void;
    static isSupport(frame: pointer<AVFrame> | VideoFrame | ImageBitmap): boolean;
}
