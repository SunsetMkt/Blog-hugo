/**
 * @file 合并 TypeArray
 */
import { TypeArrayConstructor } from '../types/type';
type ReplaceGeneric<T> = T extends Uint8Array<ArrayBuffer> ? Uint8Array<ArrayBufferLike> : T extends Int8Array<ArrayBuffer> ? Int8Array<ArrayBufferLike> : T extends Uint16Array<ArrayBuffer> ? Uint16Array<ArrayBufferLike> : T extends Int16Array<ArrayBuffer> ? Int16Array<ArrayBufferLike> : T extends Uint32Array<ArrayBuffer> ? Uint32Array<ArrayBufferLike> : T extends Int32Array<ArrayBuffer> ? Int32Array<ArrayBufferLike> : T extends Float32Array<ArrayBuffer> ? Float32Array<ArrayBufferLike> : T extends Float64Array<ArrayBuffer> ? Float64Array<ArrayBufferLike> : T;
export default function concatTypeArray<T extends TypeArrayConstructor>(constructor: T, arrays: ReplaceGeneric<InstanceType<T>>[]): ReplaceGeneric<InstanceType<T>>;
export {};
