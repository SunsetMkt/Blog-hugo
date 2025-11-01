import type { CTypeEnum2Type } from './typedef';
import { CTypeEnum } from './typedef';
type CTypeEnumRead = {
    [key in CTypeEnum]: (pointer: pointer<void>) => CTypeEnum2Type<key>;
};
export declare const CTypeEnumRead: CTypeEnumRead;
export declare function override(funcs: Partial<CTypeEnumRead>): void;
export {};
