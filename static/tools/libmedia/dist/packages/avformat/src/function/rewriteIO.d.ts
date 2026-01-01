import { type IOWriterSync } from '@libmedia/common/io';
type Type = 'uint8' | 'int8' | 'uint16' | 'int16' | 'uint32' | 'int32' | 'uint64' | 'int64' | 'float' | 'double';
export default function rewriteIO(ioWriter: IOWriterSync, pos: bigint, value: number | bigint, type: Type): void;
export {};
