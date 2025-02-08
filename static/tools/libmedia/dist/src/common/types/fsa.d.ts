declare interface FileSystemWritableFileStream {
    write(data: ArrayBuffer | ArrayBufferView | Blob | WriteParams): Promise<any>;
    seek(position: number): Promise<any>;
    truncate(size: number): Promise<any>;
    close(): Promise<any>;
}
declare interface FileHandle extends FileSystemHandle {
    createWritable(options?: {
        keepExistingData?: boolean;
    }): Promise<FileSystemWritableFileStream>;
    getFile(): Promise<File>;
}
declare interface DirectoryHandle extends FileSystemHandle {
    getFileHandle(name: string): Promise<FileHandle>;
    getDirectoryHandle(name: string): Promise<DirectoryHandle>;
    [Symbol.iterator](): IterableIterator<FileSystemHandle>;
}
