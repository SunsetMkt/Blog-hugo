import { Mutex } from 'cheap/thread/mutex';
export declare const enum AVBufferFlags {
    NONE = 0,
    READONLY = 1
}
export declare class AVBuffer {
    /**
     * data described by this buffer
     */
    data: pointer<uint8>;
    /**
     * size of data in bytes
     */
    size: size;
    /**
     *  number of existing AVBufferRef instances referring to this buffer
     */
    refcount: atomic_uint32;
    /**
     * a callback for freeing the data
     */
    free: pointer<(opaque: pointer<void>, data: pointer<uint8>) => void>;
    /**
     * an opaque pointer, to be used by the freeing callback
     */
    opaque: pointer<void>;
    /**
     * A combination of AV_BUFFER_FLAG_*
     */
    flags: AVBufferFlags;
    /**
     * A combination of BUFFER_FLAG_*
     */
    flagsInternal: int32;
}
export declare class AVBufferRef {
    buffer: pointer<AVBuffer>;
    /**
     * The data buffer. It is considered writable if and only if
     * this is the only reference to the buffer, in which case
     * av_buffer_is_writable() returns 1.
     */
    data: pointer<uint8>;
    /**
     * Size of data in bytes.
     */
    size: size;
}
export declare class AVBufferPool {
    mutex: Mutex;
    pool: pointer<BufferPoolEntry>;
    /**
     *  number of existing AVBufferRef instances referring to this buffer
     */
    refcount: atomic_uint32;
    /**
     * Size of data in bytes.
     */
    size: size;
    /**
     * an opaque pointer, to be used by the freeing callback
     */
    opaque: pointer<void>;
    alloc: pointer<(size: size) => AVBufferRef>;
    alloc2: pointer<(opaque: pointer<void>, size: size) => AVBufferRef>;
    poolFree: pointer<(opaque: pointer<void>) => void>;
}
export declare class BufferPoolEntry {
    data: pointer<uint8>;
    /**
     * an opaque pointer, to be used by the freeing callback
     */
    opaque: pointer<void>;
    /**
     * a callback for freeing the data
     */
    free: pointer<(opaque: pointer<void>, data: pointer<uint8>) => void>;
    pool: pointer<AVBufferPool>;
    next: pointer<BufferPoolEntry>;
    buffer: AVBuffer;
}
