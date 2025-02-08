import { AVCodecID, AVMediaType } from 'avutil/codec';
import { WebAssemblyResource } from 'cheap/webassembly/compiler';
export interface ControllerObserver {
    onVideoEnded: () => void;
    onAudioEnded: () => void;
    onCanvasUpdated: () => void;
    onFirstVideoRendered: () => void;
    onFirstVideoRenderedAfterUpdateCanvas: () => void;
    onTimeUpdate: (pts: int64) => void;
    onMSESeek: (time: number) => void;
    onGetDecoderResource: (mediaType: AVMediaType, codecId: AVCodecID) => Promise<WebAssemblyResource | string | ArrayBuffer>;
    isPictureInPicture: () => boolean;
}
export default class Controller {
    private videoRenderControlChannel;
    private audioRenderControlChannel;
    private muxerControlChannel;
    private demuxerControlChannel;
    private videoRenderControlIPCPort;
    private audioRenderControlIPCPort;
    private muxerControlIPCPort;
    private demuxerControlIPCPort;
    private observer;
    private visibilityHidden;
    private onVisibilityChange;
    private timeUpdateListenType;
    private enableAudioVideoSync;
    constructor(observer: ControllerObserver, enableWorker: boolean);
    getVideoRenderControlPort(): MessagePort;
    getAudioRenderControlPort(): MessagePort;
    getMuxerControlPort(): MessagePort;
    getDemuxerControlPort(): MessagePort;
    setTimeUpdateListenType(type: AVMediaType): void;
    setEnableAudioVideoSync(enable: boolean): void;
    destroy(): void;
}
