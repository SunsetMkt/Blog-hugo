import ts from 'typescript';
import type { KeyMeta } from '../typedef';
export declare enum StructType {
    CSTRUCT = 0,
    CUNION = 1,
    INLINE_OBJECT = 2
}
export type KeyMetaExt = Omit<KeyMeta, 'getTypeMeta'> & {
    has: boolean;
    typeIdentifier: string;
    getTypeMeta?: () => Struct;
    symbol: WeakRef<ts.Symbol>;
    name: string;
};
export type Struct = {
    maxBaseTypeByteLength: number;
    length: number;
    meta: Map<string, KeyMetaExt>;
    symbol: WeakRef<ts.Symbol>;
    parent?: Struct;
    structType: StructType;
    definedClassParent?: Struct;
    inlineStructPathMap?: WeakMap<ts.Symbol, string>;
    name: string;
};
export declare function getStruct(symbol: ts.Symbol): Struct;
export declare function hasStruct(symbol: ts.Symbol): boolean;
export declare function getStructFileIdentifiers(fileName: string): string[];
export declare function clearStructCache(): void;
