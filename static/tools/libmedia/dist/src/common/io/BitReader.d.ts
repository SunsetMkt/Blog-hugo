/**
 * bit 读取器
 */
import { Uint8ArrayInterface } from './interface';
export default class BitReader {
    private buffer;
    private pointer;
    private bitsLeft;
    private size;
    private endPointer;
    private pos;
    error: number;
    onFlush: (data: Uint8Array) => number;
    /**
     * @param data 待读取的字节
     * @param bigEndian 是否按大端字节序读取，默认大端字节序（网络字节序）
     */
    constructor(size?: number);
    /**
     * 读取 1 个比特（不会移动读取指针）
     */
    peekU1(): number;
    /**
     * 读取 1 个比特
     */
    readU1(): number;
    /**
     * 读取 n 个比特
     *
     * @param n
     */
    readU(n: number): number;
    /**
     * 读取 n 个比特（不会移动读取指针）
     *
     * @param n
     */
    peekU(n: number): number;
    /**
     * 获取剩余可读字节数
     *
     * @returns
     */
    remainingLength(): number;
    /**
     * 当前字节剩余的 bit 数
     *
     * @returns
     */
    getBitLeft(): number;
    /**
     * 获取当前读取指针位置
     *
     * @returns
     */
    getPointer(): number;
    /**
     * 设置读取指针到指定位置
     *
     * @param pointer
     */
    setPointer(pointer: number): void;
    /**
     * 返回当前的绝对位置
     *
     * @returns
     */
    getPos(): bigint;
    /**
     * 跳过指定 bit 数
     *
     * @param n
     */
    skip(n: number): void;
    /**
     * 填充剩余缓冲区
     */
    flush(): void;
    /**
     * 获取缓冲区
     *
     * @returns
     */
    getBuffer(): Uint8Array<ArrayBufferLike>;
    appendBuffer(buffer: Uint8ArrayInterface): void;
    /**
     * 重置缓冲区
     */
    reset(): void;
    /**
     * 对齐字节，当处在当前字节的第一个 bit 时不动，否则移动到下一个字节
     */
    skipPadding(): void;
}
