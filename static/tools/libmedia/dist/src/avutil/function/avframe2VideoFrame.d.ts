import type AVFrame from '../struct/avframe';
import { type AVPixelFormat } from '../pixfmt';
export declare function avPixelFormat2Format(pixfmt: AVPixelFormat): VideoPixelFormat;
export declare function getVideoColorSpaceInit(avframe: pointer<AVFrame>): VideoColorSpaceInit;
export declare function avframe2VideoFrame(avframe: pointer<AVFrame>, pts?: int64, videoFrameInit?: Partial<VideoFrameBufferInit>): VideoFrame;
