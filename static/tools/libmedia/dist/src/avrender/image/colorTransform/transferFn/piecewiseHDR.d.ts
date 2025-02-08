import ColorSpace from '../../colorSpace/ColorSpace';
import { ColorTransformOptions, TransferFunction } from '../options';
export declare function getPiecewiseHDRPar(space: ColorSpace): {
    tfn: {
        g: number;
        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;
    };
    p: number;
    q: number;
    r: number;
};
export declare function invertPiecewiseHDRPar(space: ColorSpace, tfn: TransferFunction, p: float, q: float, r: float): {
    tfn: TransferFunction;
    p: number;
    q: number;
    r: number;
};
export default function piecewiseHDR(tfn: TransferFunction, p: float, q: float, r: float, options: ColorTransformOptions): string;
