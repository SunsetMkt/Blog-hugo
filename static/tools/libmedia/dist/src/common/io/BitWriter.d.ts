/**
 * bit 写存器
 */
/**
 * 写字节流工具
 */
export default class BitWriter {
    private buffer;
    private pointer;
    private pos;
    private bitPointer;
    private size;
    error: number;
    onFlush: (data: Uint8Array, pos?: number) => number;
    /**
     * @param data 待写的 Uint8Array
     */
    constructor(size?: number);
    /**
     * 写一个 bit
     *
     * @param bit
     */
    writeU1(bit: number): void;
    /**
     * 写 n 个比特
     *
     * @param n
     */
    writeU(n: number, v: number): void;
    /**
     * 获取剩余可写节数
     *
     * @returns
     */
    remainingLength(): number;
    /**
     * 写出缓冲区
     */
    flush(): void;
    /**
     * 对齐字节，当处在当前字节的第一个 bit 时不动，否则写入 0 直到下一个字节
     */
    padding(): void;
    /**
     * 重置缓冲区
     */
    reset(): void;
    /**
     * 获取缓冲区
     *
     * @returns
     */
    getBuffer(): Uint8Array<ArrayBufferLike>;
    /**
     * 获取当前写指针位置
     *
     * @returns
     */
    getPointer(): number;
    /**
     * 获取当前的绝对位置
     *
     * @returns
     */
    getPos(): bigint;
}
