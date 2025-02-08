import { CTypeEnum, KeyMeta, Struct, Union } from './typedef';
/**
 * 获取结构体最大基本类型的长度
 *
 * @param target
 * @returns
 */
export declare function getMaxBaseTypeByteLength(keysMeta: Map<string, KeyMeta>): number;
/**
 * 获取结构体最大成员的长度
 *
 * @param target
 * @returns
 */
export declare function getMaxTypeByteLength(keysMeta: Map<string, KeyMeta>): number;
/**
 * 对结构体进行内存布局
 *
 * 1. 结构体变量的首地址能够被其最宽基本类型成员的大小 (sizeof)  所整除 （这个由 malloc 保证）
 * 2. 结构体每个成员相对结构体首地址的偏移量 offset 都是成员大小的整数倍，如有需要编译器会在成员之间加上填充字节
 * 3. 结构体的总大小 sizeof 为结构体最宽基本成员大小的整数倍，如有需要编译器会在最末一个成员之后加上填充字节。
 *
 * 位域：
 *
 * 4.  如果相邻位域字段的类型相同，且位宽之和小于类型的 sizeof 大小，则后一个字段将紧邻前一个字段存储，直到不能容纳为止。
 * 5.  如果相邻位域字段的类型相同，但位宽之和大于类型的 sizeof 大小，则后一个字段将从新的存储单元开始，其偏移量为其类型大小的整数倍。
 * 6.  如果相邻的位域字段的类型不同，则各编译器的具体实现有差异。（此处采取不压缩）
 * 7.  如果位域字段之间穿插着非位域字段，则不进行压缩。
 *
 * @param target
 * @returns
 */
export declare function layout(keysQueue: string[], keysMeta: Map<string, KeyMeta>, padding: number, offset?: number): number;
export declare function CStruct(target: Struct, { kind }: {
    kind: any;
}): void;
export declare function CUnion(target: Union, { kind }: {
    kind: any;
}): void;
export declare function CType(type: CTypeEnum | Struct): (target: null, { kind, name }: {
    kind: any;
    name: any;
}) => void;
export declare function CPointer(level?: number): (target: null, { kind, name }: {
    kind: any;
    name: any;
}) => void;
export declare function CArray(length: number): (target: null, { kind, name }: {
    kind: any;
    name: any;
}) => void;
export declare function CBitField(length: number): (target: null, { kind, name }: {
    kind: any;
    name: any;
}) => void;
