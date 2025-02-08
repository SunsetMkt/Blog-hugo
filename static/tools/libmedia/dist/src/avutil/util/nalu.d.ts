import { Uint8ArrayInterface } from 'common/io/interface';
export declare function isAnnexb(data: Uint8ArrayInterface): boolean;
export declare function getNextNaluStart(data: Uint8ArrayInterface, offset: number): {
    offset: number;
    startCode: number;
};
export declare function splitNaluByStartCode<T extends Uint8ArrayInterface>(buffer: T): T[];
export declare function splitNaluByLength<T extends Uint8ArrayInterface>(buffer: T, naluLengthSizeMinusOne: int32): T[];
/**
 *
 * @param nalus
 * @param mode 模式
 *  - 0 全使用 0x00000001 分割
 *  - 1 全使用 0x000001 分割
 *  - 2 第一个使用 0x00000001，后面的使用 0x000001 分割
 * @returns
 */
export declare function joinNaluByStartCodeLength(nalus: Uint8ArrayInterface[], mode: int32): number;
/**
 *
 * @param nalus
 * @param mode 模式
 *  - 0 全使用 0x00000001 分割
 *  - 1 全使用 0x000001 分割
 *  - 2 第一个使用 0x00000001，后面的使用 0x000001 分割
 * @param output
 * @returns
 */
export declare function joinNaluByStartCode(nalus: Uint8ArrayInterface[], mode: int32, output?: Uint8Array): Uint8Array;
export declare function joinNaluByLength(nalus: Uint8ArrayInterface[], naluLengthSizeMinusOne: int32, output?: Uint8Array): Uint8Array;
export declare function naluUnescape(data: Uint8Array, start?: number, end?: number): Uint8Array<ArrayBuffer>;
export declare function naluEscape(data: Uint8Array, start?: number, end?: number): Uint8Array<ArrayBufferLike>;
