import type BufferReader from 'common/io/BufferReader';
import type IOReader from 'common/io/IOReader';
import type BufferWriter from 'common/io/BufferWriter';
import type IOWriterSync from 'common/io/IOWriterSync';
export declare function parseObject(ioReader: IOReader | BufferReader, endPos: bigint): Promise<{
    key: string;
    value: any;
}>;
export declare function parseValue(ioReader: IOReader | BufferReader, endPos: bigint): Promise<any>;
export declare function writeValue(ioWriter: IOWriterSync | BufferWriter, value: any): void;
