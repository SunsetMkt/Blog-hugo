import IOReader from 'common/io/IOReader';
import { ID3V2, Mp3MetaData } from './type';
import IOWriterSync from 'common/io/IOWriterSync';
export declare function parse(ioReader: IOReader, len: int32, id3v2: ID3V2, metadata: Mp3MetaData): Promise<void>;
export declare function write(ioWriter: IOWriterSync, version: number, padding: int32, metadata: Mp3MetaData): void;
