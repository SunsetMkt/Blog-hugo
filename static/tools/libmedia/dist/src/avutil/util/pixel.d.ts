import { AVChromaLocation, AVPixelFormat } from '../pixfmt';
export declare function chromaLocation2Pos(pos: AVChromaLocation): {
    x: number;
    y: number;
};
export declare function pixelGetLinesize(pixfmt: AVPixelFormat, width: int32, plane: int32): number;
export declare function pixelFillLinesizes(linesizes: pointer<int32>, pixfmt: AVPixelFormat, width: int32): number;
export declare function pixelFillPlaneSizes(sizes: pointer<size>, pixfmt: AVPixelFormat, height: int32, linesizes: pointer<int32>): 0 | -3;
export declare function pixelFillPointer(data: pointer<pointer<uint8>>, pixfmt: AVPixelFormat, height: int32, ptr: pointer<uint8>, linesizes: pointer<int32>): number;
export declare function pixelAlloc(pointers: pointer<pointer<uint8>>, linesizes: pointer<int32>, w: int32, h: int32, pixfmt: AVPixelFormat, align?: int32): number;
export declare function pixelGetSize(pixfmt: AVPixelFormat, width: int32, height: int32, align: int32): number;
