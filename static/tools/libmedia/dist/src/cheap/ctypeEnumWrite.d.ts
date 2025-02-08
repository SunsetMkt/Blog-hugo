import { CTypeEnum, CTypeEnum2Type } from './typedef';
type CTypeEnumWrite = {
    [key in CTypeEnum]: (pointer: pointer<void>, value: CTypeEnum2Type<key>) => void;
} & {
    fill: (dst: pointer<void>, value: uint8, size: size) => void;
    copy: (dst: pointer<void>, src: pointer<void>, size: size) => void;
};
export declare const CTypeEnumWrite: CTypeEnumWrite;
export declare function override(funcs: Partial<CTypeEnumWrite>): void;
export {};
