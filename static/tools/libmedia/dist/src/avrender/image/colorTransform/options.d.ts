import HdrMetadata from '../struct/HdrMetadata';
export declare const enum GLType {
    kWebGL = 0,
    kWebGPU = 1
}
export declare const DefaultSDRWhiteLevel = 203;
export declare const HLGRefMaxLumNits = 1000;
export declare const PQRefMaxLumNits = 10000;
export interface ColorTransformOptions {
    type: GLType;
    bitDepth: number;
    toneMapPQAndHlgToDst?: boolean;
    metadata?: HdrMetadata;
    dstSdrMaxLuminanceNits?: float;
    dstMaxLuminanceRelative?: float;
    ndwl?: float;
    maxContentLightLevel?: float;
    maxFrameAverageLightLevel?: float;
    outputRGB?: boolean;
}
export interface TransferFunction {
    g: float;
    a: float;
    b: float;
    c: float;
    d: float;
    e: float;
    f: float;
}
