/**
 * 文件 IO
 */
export default class FileIO {
    private handler;
    private file;
    private pos;
    private writer;
    private append;
    private reader;
    private size;
    private blobSlice;
    private readied;
    private readHold;
    constructor(handler: FileSystemFileHandle, append?: boolean);
    ready(): Promise<void>;
    private write_;
    write(data: BufferSource): Promise<void>;
    private seek_;
    seek(position: number): Promise<void>;
    seekToEnd(): Promise<void>;
    private resize_;
    resize(size: number): Promise<void>;
    read_(start: number, end: number): Promise<ArrayBuffer>;
    read(start: number, end: number): Promise<ArrayBuffer>;
    appendBufferByPosition(buffer: BufferSource, position: number): Promise<void>;
    private close_;
    close(): Promise<void>;
    getFile(): File;
    getHandle(): FileSystemFileHandle;
    getPos(): number;
    getSize(): number;
    destroy(): Promise<void>;
}
