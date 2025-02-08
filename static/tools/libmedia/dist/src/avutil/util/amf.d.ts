import BufferReader from 'common/io/BufferReader';
import IOReader from 'common/io/IOReader';
import BufferWriter from 'common/io/BufferWriter';
import IOWriterSync from 'common/io/IOWriterSync';
export declare function parseObject(ioReader: IOReader | BufferReader, endPos: bigint): Promise<{
    key: string;
    value: any;
}>;
export declare function parseValue(ioReader: IOReader | BufferReader, endPos: bigint): Promise<any>;
export declare function writeValue(ioWriter: IOWriterSync | BufferWriter, value: any): void;
