import { type Range } from '@libmedia/common';
import { type Uint8ArrayInterface } from '@libmedia/common/io';
import IOLoader from './IOLoader';
export interface FileInfo {
    file: Blob;
}
export default class FileIOLoader extends IOLoader {
    private info;
    private range;
    private readPos;
    private endPos;
    private reader;
    private readerResolve;
    open(info: FileInfo, range?: Range): Promise<number>;
    private readBufferByReaderSync;
    private readBufferByReader;
    read(buffer: Uint8ArrayInterface): Promise<number>;
    seek(pos: int64): Promise<number>;
    size(): Promise<int64>;
    stop(): Promise<void>;
}
