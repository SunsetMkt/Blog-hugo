import { AVCodecID, AVMediaType } from 'avutil/codec';
import { WebAssemblyResource } from 'cheap/webassembly/compiler';
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
