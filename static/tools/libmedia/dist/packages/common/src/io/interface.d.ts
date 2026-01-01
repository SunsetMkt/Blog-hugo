export interface BytesReaderSync {
    readUint8: () => number;
    getPos: () => bigint;
}
export interface BytesReader {
    readUint8: () => Promise<number>;
    getPos: () => bigint;
}
export interface BytesWriterSync {
    writeUint8: (value: number) => void;
}
export interface BytesWriter {
    writeUint8: (value: number) => Promise<void>;
}
export interface Uint8ArrayInterface {
    set(array: ArrayLike<number>, offset?: number): void;
    slice(start?: number, end?: number): Uint8Array;
    subarray(begin?: number, end?: number): Uint8Array;
    subarray(begin: number, end: number, safe: boolean): Uint8ArrayInterface;
    view?: DataView;
    buffer: ArrayBufferLike;
    length: number;
    byteLength: number;
    byteOffset: number;
    [n: number]: number;
}
