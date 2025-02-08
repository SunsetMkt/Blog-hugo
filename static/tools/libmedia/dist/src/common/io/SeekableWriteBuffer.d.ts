/**
 * 可 seek 的 Buffer，可当做文件的一段
 */
export default class SeekableWriteBuffer {
    private queue;
    private pos;
    private startPos;
    private endPos;
    private index;
    private offset;
    constructor();
    /**
     * 当前位置写入数据
     *
     * @param buffer
     */
    write(buffer: Uint8Array): void;
    /**
     * seek 到指定位置
     *
     * @param pos
     * @returns
     */
    seek(pos: bigint): boolean;
    /**
     * 写出缓存的所有数据
     *
     * @returns
     */
    flush(): Uint8Array<ArrayBufferLike>;
    /**
     * 已缓存的数据数
     */
    get size(): number;
}
