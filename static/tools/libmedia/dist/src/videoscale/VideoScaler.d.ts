import type { AVPixelFormat } from 'avutil/pixfmt';
import { AVColorRange, AVColorSpace } from 'avutil/pixfmt';
import type AVFrame from 'avutil/struct/avframe';
import type { WebAssemblyResource } from 'cheap/webassembly/compiler';
export declare const enum ScaleAlgorithm {
    FAST_BILINEAR = 1,
    BILINEAR = 2,
    BICUBIC = 4,
    X = 8,
    POINT = 16,
    AREA = 32,
    BICUBLIN = 64,
    GAUSS = 128,
    SINC = 256,
    LANCZOS = 512,
    SPLINE = 1024
}
export interface ScaleParameters {
    width: int32;
    height: int32;
    format: AVPixelFormat;
    colorRange?: AVColorRange;
    colorSpace?: AVColorSpace;
}
export type VideoScalerOptions = {
    resource: WebAssemblyResource;
};
export default class VideoScaler {
    private scaler;
    private options;
    private inputParameters;
    private outputParameters;
    constructor(options: VideoScalerOptions);
    open(input: ScaleParameters, output: ScaleParameters, algorithm?: ScaleAlgorithm, threadCount?: int32): Promise<int32>;
    scale(src: pointer<AVFrame>, dst: pointer<AVFrame>): int32;
    close(): void;
    getInputScaleParameters(): ScaleParameters;
    getOutputScaleParameters(): ScaleParameters;
}
