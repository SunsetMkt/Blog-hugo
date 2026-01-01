import { type BitWriter, type BitReader } from '@libmedia/common/io';
/**
 * ue(v) 指数哥伦布解码
 */
export declare function readUE(bitReader: BitReader): number;
/**
 * se(v) 有符号指数哥伦布解码
 */
export declare function readSE(bitReader: BitReader): number;
/**
 * te(v) 截断指数哥伦布解码
 */
export declare function readTE(bitReader: BitReader, x: number): number;
/**
 * ue(v) 指数哥伦布编码
 */
export declare function writeUE(bitWriter: BitWriter, value: number): void;
/**
 * se(v) 有符号指数哥伦布编码
 */
export declare function writeSE(bitWriter: BitWriter, value: number): void;
/**
 * te(v) 截断指数哥伦布编码
 */
export declare function writeTE(bitWriter: BitWriter, x: number, value: number): void;
