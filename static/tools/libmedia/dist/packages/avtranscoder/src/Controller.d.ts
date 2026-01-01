import { type AVCodecID, type AVMediaType } from '@libmedia/avutil';
import { type WebAssemblyResource } from '@libmedia/cheap';
export interface ControllerObserver {
    onGetDecoderResource: (mediaType: AVMediaType, codecId: AVCodecID) => Promise<WebAssemblyResource | ArrayBuffer>;
}
export default class Controller {
    private demuxerControlChannel;
    private demuxerControlIPCPort;
    private observer;
    constructor(observer: ControllerObserver);
    getDemuxerRenderControlPort(): MessagePort;
    destroy(): void;
}
