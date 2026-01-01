import type AVFrame from '../struct/avframe';
import { AVColorPrimaries, AVColorSpace, AVColorTransferCharacteristic, AVPixelFormat } from '../pixfmt';
export declare function mapPixelFormat(format: VideoPixelFormat): AVPixelFormat;
export declare function mapColorSpace(colorSpace: VideoMatrixCoefficients): AVColorSpace;
export declare function mapColorPrimaries(colorPrimaries: VideoColorPrimaries): AVColorPrimaries;
export declare function mapColorTrc(colorTrc: VideoTransferCharacteristics): AVColorTransferCharacteristic;
export declare function videoFrame2AVFrame(videoFrame: VideoFrame, avframe?: pointer<AVFrame>): Promise<pointer<AVFrame>>;
