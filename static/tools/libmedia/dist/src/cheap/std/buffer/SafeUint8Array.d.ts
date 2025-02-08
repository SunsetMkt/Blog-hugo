import { Uint8ArrayInterface } from 'common/io/interface';
import { getHeap } from '../../heap';
import ArrayLikeInterface from 'common/interface/ArrayLike';
export declare class SafeBufferView {
    private pointer;
    private len;
    private view;
    constructor(pointer: pointer<uint8>, len: size);
    get byteLength(): number;
    get buffer(): typeof getHeap;
    get byteOffset(): number;
    private getView;
    getFloat32(byteOffset: number, littleEndian?: boolean): number;
    getFloat64(byteOffset: number, littleEndian?: boolean): number;
    getInt8(byteOffset: number): number;
    getInt16(byteOffset: number, littleEndian?: boolean): number;
    getInt32(byteOffset: number, littleEndian?: boolean): number;
    getUint8(byteOffset: number): number;
    getUint16(byteOffset: number, littleEndian?: boolean): number;
    getUint32(byteOffset: number, littleEndian?: boolean): number;
    setFloat32(byteOffset: number, value: number, littleEndian?: boolean): void;
    setFloat64(byteOffset: number, value: number, littleEndian?: boolean): void;
    setInt8(byteOffset: number, value: number): void;
    setInt16(byteOffset: number, value: number, littleEndian?: boolean): void;
    setInt32(byteOffset: number, value: number, littleEndian?: boolean): void;
    setUint8(byteOffset: number, value: number): void;
    setUint16(byteOffset: number, value: number, littleEndian?: boolean): void;
    setUint32(byteOffset: number, value: number, littleEndian?: boolean): void;
    getBigInt64(byteOffset: number, littleEndian?: boolean): bigint;
    getBigUint64(byteOffset: number, littleEndian?: boolean): bigint;
    setBigInt64(byteOffset: number, value: bigint, littleEndian?: boolean): void;
    setBigUint64(byteOffset: number, value: bigint, littleEndian?: boolean): void;
}
export default class SafeUint8Array extends ArrayLikeInterface implements Uint8ArrayInterface {
    private pointer;
    private len;
    constructor(pointer: pointer<uint8>, len: size);
    protected getIndexValue(index: uint32): uint8;
    protected setIndexValue(index: uint32, value: uint8): void;
    set(array: ArrayLike<number>, offset?: uint32): void;
    subarray(begin?: uint32, end?: uint32, safe?: boolean): Uint8Array<ArrayBufferLike>;
    slice(start?: uint32, end?: uint32): Uint8Array<ArrayBuffer>;
    get length(): number;
    get byteLength(): number;
    get buffer(): ArrayBuffer;
    get byteOffset(): number;
    get view(): DataView;
    [n: int32]: uint8;
}
