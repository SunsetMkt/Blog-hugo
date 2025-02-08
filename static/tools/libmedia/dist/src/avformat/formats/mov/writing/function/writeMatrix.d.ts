import IOWriter from 'common/io/IOWriterSync';
/**
 * transformation matrix
 *  |a  b  u|
 *  |c  d  v|
 *  |tx ty w|
 */
export default function writeMatrix(ioWriter: IOWriter, a: number, b: number, c: number, d: number, tx: number, ty: number): void;
