import { Data, TypeArray } from 'common/types/type';
export declare const enum CTypeEnum {
    null = 0,
    void = 1,
    uint8 = 2,
    atomic_uint8 = 3,
    char = 4,
    atomic_char = 5,
    uint16 = 6,
    atomic_uint16 = 7,
    uint32 = 8,
    atomic_uint32 = 9,
    uint64 = 10,
    int8 = 11,
    atomic_int8 = 12,
    int16 = 13,
    atomic_int16 = 14,
    int32 = 15,
    atomic_int32 = 16,
    int64 = 17,
    float = 18,
    double = 19,
    pointer = 20,
    atomic_int64 = 21,
    atomic_uint64 = 22,
    bool = 23,
    atomic_bool = 24,
    size = 25
}
export declare const CTypeEnum2Bytes: Record<CTypeEnum, number>;
export declare const CTypeEnumPointerShiftMap: Record<CTypeEnum, number>;
export declare const enum KeyMetaKey {
    Type = 0,
    Pointer = 1,
    PointerLevel = 2,
    Array = 3,
    ArrayLength = 4,
    BitField = 5,
    BitFieldLength = 6,
    BaseAddressOffset = 7,
    BaseBitOffset = 8,
    InlineStruct = 9
}
export type KeyMeta = {
    [KeyMetaKey.Type]: CTypeEnum | Struct;
    [KeyMetaKey.Pointer]: 0 | 1;
    [KeyMetaKey.PointerLevel]: number;
    [KeyMetaKey.Array]: 0 | 1;
    [KeyMetaKey.ArrayLength]: number;
    [KeyMetaKey.BitField]: 0 | 1;
    [KeyMetaKey.BitFieldLength]: number;
    [KeyMetaKey.BaseAddressOffset]: uint32;
    [KeyMetaKey.BaseBitOffset]: uint32;
    getTypeMeta?: () => {
        length: number;
        maxBaseTypeByteLength: number;
    };
};
export type Struct = new (init?: Data) => any;
export type Union = new (init?: Data) => any;
export type CTypeEnum2Type<T> = T extends CTypeEnum.null ? void : T extends CTypeEnum.void ? void : T extends CTypeEnum.uint8 ? uint8 : T extends CTypeEnum.atomic_int8 ? atomic_uint8 : T extends CTypeEnum.char ? char : T extends CTypeEnum.uint16 ? uint16 : T extends CTypeEnum.atomic_uint16 ? atomic_uint16 : T extends CTypeEnum.uint32 ? uint32 : T extends CTypeEnum.atomic_uint32 ? atomic_uint32 : T extends CTypeEnum.uint64 ? uint64 : T extends CTypeEnum.int8 ? int8 : T extends CTypeEnum.atomic_int8 ? atomic_int8 : T extends CTypeEnum.int16 ? int16 : T extends CTypeEnum.atomic_int16 ? atomic_int16 : T extends CTypeEnum.int32 ? int32 : T extends CTypeEnum.atomic_int32 ? atomic_int32 : T extends CTypeEnum.int64 ? int64 : T extends CTypeEnum.float ? float : T extends CTypeEnum.double ? double : T extends CTypeEnum.pointer ? pointer<void> : T extends CTypeEnum.atomic_int64 ? atomic_int64 : T extends CTypeEnum.atomic_uint64 ? atomic_uint64 : T extends CTypeEnum.bool ? bool : T extends CTypeEnum.atomic_bool ? atomic_bool : T extends CTypeEnum.size ? size : never;
export type AtomicsBuffer = Exclude<TypeArray, Float32Array | Float64Array> | BigInt64Array | BigUint64Array;
