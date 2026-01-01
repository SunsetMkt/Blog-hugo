import type { IOWriterSync } from '@libmedia/common/io';
/**
 * transformation matrix
 *  |a  b  u|
 *  |c  d  v|
 *  |tx ty w|
 */
export default function writeMatrix(ioWriter: IOWriterSync, a: number, b: number, c: number, d: number, tx: number, ty: number): void;
