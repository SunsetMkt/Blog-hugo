import AVFrame from '../struct/avframe';
import { AVColorPrimaries, AVColorSpace, AVColorTransferCharacteristic, AVPixelFormat } from '../pixfmt';
export declare function mapFormat(format: VideoPixelFormat): AVPixelFormat.AV_PIX_FMT_NONE | AVPixelFormat.AV_PIX_FMT_YUV420P | AVPixelFormat.AV_PIX_FMT_YUV422P | AVPixelFormat.AV_PIX_FMT_YUV444P | AVPixelFormat.AV_PIX_FMT_NV12 | AVPixelFormat.AV_PIX_FMT_RGBA | AVPixelFormat.AV_PIX_FMT_BGRA | AVPixelFormat.AV_PIX_FMT_YUVA420P | AVPixelFormat.AV_PIX_FMT_RGB0 | AVPixelFormat.AV_PIX_FMT_BGR0;
export declare function mapColorSpace(colorSpace: string): AVColorSpace.AVCOL_SPC_RGB | AVColorSpace.AVCOL_SPC_BT709 | AVColorSpace.AVCOL_SPC_BT470BG | AVColorSpace.AVCOL_SPC_SMPTE170M;
export declare function mapColorPrimaries(colorPrimaries: string): AVColorPrimaries.AVCOL_PRI_BT709 | AVColorPrimaries.AVCOL_PRI_BT470BG | AVColorPrimaries.AVCOL_PRI_SMPTE170M;
export declare function mapColorTrc(colorTrc: string): AVColorTransferCharacteristic.AVCOL_TRC_BT709 | AVColorTransferCharacteristic.AVCOL_TRC_SMPTE170M | AVColorTransferCharacteristic.AVCOL_TRC_IEC61966_2_1;
export declare function videoFrame2AVFrame(videoFrame: VideoFrame, avframe?: pointer<AVFrame>): pointer<AVFrame>;
