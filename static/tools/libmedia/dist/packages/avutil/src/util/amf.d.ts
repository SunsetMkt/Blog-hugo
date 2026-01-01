import { type IOReader, type BufferReader, type BufferWriter, type IOWriterSync } from '@libmedia/common/io';
export declare function parseObject(ioReader: IOReader | BufferReader, endPos: bigint): Promise<{
    key: string;
    value: any;
}>;
export declare function parseValue(ioReader: IOReader | BufferReader, endPos: bigint): Promise<any>;
export declare function writeValue(ioWriter: IOWriterSync | BufferWriter, value: any): void;
