import { AVColorPrimaries, AVColorRange, AVColorSpace, AVColorTransferCharacteristic } from 'avutil/pixfmt';
import Matrix4 from 'common/math/Matrix4';
export default class ColorSpace {
    private matrixId;
    private primaryId;
    private transferId;
    private rangeId;
    constructor(matrixId: AVColorSpace, primaryId: AVColorPrimaries, transferId: AVColorTransferCharacteristic, rangeId: AVColorRange);
    getMatrixId(): AVColorSpace;
    getPrimaryId(): AVColorPrimaries;
    getTransferId(): AVColorTransferCharacteristic;
    getRangeId(): AVColorRange;
    isWide(): boolean;
    isHDR(): boolean;
    isToneMappedByDefault(): boolean;
    isAffectedBySDRWhiteLevel(): boolean;
    fullRangeEncodedValues(): boolean;
    getTransferMatrix(bitDepth: number): Matrix4;
    getRangeAdjustMatrix(bitDepth: number): Matrix4;
    private getTransferFunction_;
    getTransferFunction(sdrWhiteLevel?: float): {
        g: number;
        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;
    };
    getInverseTransferFunction(sdrWhiteLevel?: float): {
        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;
        g: number;
    };
    hasExtendedSkTransferFn(): boolean;
    isValid(): boolean;
    private getColorSpacePrimaries;
    getPrimaryMatrix(): Matrix4;
}
