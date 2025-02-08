export declare function printChar(stream: uint32, curr: char): void;
export declare function writeAsciiToMemory(str: string, buffer: pointer<char>, doNotAddNull?: boolean): void;
export declare function environ_get(environ: pointer<pointer<char>>, environBuf: pointer<char>): number;
export declare function environ_sizes_get(penvironCount: pointer<size>, penvironBufSize: pointer<size>): number;
export declare function fd_fdstat_get(fd: uint32, buf_ptr: pointer<void>): number;
declare class WASICiovec {
    buf: pointer<void>;
    len: size;
}
export declare function fd_read(fd: uint32, iovs: pointer<WASICiovec>, iovs_len: size, nread: pointer<size>): number;
export declare function fd_seek(fd: uint32, offset: size, whence: int32, newoffset: pointer<size>): number;
export declare function fd_write(fd: uint32, iovs: pointer<WASICiovec>, iovs_len: size, nwritten: pointer<size>): number;
export declare function fd_close(fd: uint32): number;
export declare function abort(what?: string): void;
export declare function clock_time_get(clock_id: uint32, precision: int32, time: pointer<uint64>): 0 | 28;
export declare function clock_res_get(clock_id: uint32, resolution: pointer<uint64>): 0 | 28;
export declare function random_get(pointer: pointer<uint8>, size: size): number;
export {};
