import IOLoader, { IOLoaderOptions } from './IOLoader';
import { Uint8ArrayInterface } from 'common/io/interface';
import { HttpOptions, Range } from 'common/types/type';
export interface FetchInfo {
    url: string;
    httpOptions?: HttpOptions;
}
export interface FetchIOLoaderOptions extends IOLoaderOptions {
    disableSegment?: boolean;
}
export default class FetchIOLoader extends IOLoader {
    options: FetchIOLoaderOptions;
    private contentLength;
    private receivedLength;
    private info;
    private range;
    private startBytes;
    private endBytes;
    private eofIndex;
    private abortController;
    private reader;
    private buffers;
    private supportRange;
    private abortSleep_;
    private aborted;
    constructor(options?: FetchIOLoaderOptions);
    private getTotalSize;
    open(info: FetchInfo, range?: Range): Promise<number>;
    private openReader;
    private readInterval;
    read(buffer: Uint8ArrayInterface): Promise<int32>;
    seek(pos: int64): Promise<0 | -9>;
    size(): Promise<int64 | 0n>;
    abortSleep(): void;
    abort(): Promise<void>;
    stop(): Promise<void>;
    getUrl(): string;
}
