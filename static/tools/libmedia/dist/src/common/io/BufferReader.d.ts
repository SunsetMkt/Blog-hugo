/**
 * 读字节流工具
 */
import { Uint8ArrayInterface, BytesReaderSync } from './interface';
export default class BufferReader implements BytesReaderSync {
    private data;
    private buffer;
    private byteStart;
    private pos;
    private size;
    private littleEndian;
    /**
     * @param data 待读取的字节
     * @param bigEndian 是否按大端字节序读取，默认大端字节序（网络字节序）
     */
    constructor(data: Uint8ArrayInterface, bigEndian?: boolean);
    /**
     * 读取 8 位无符号整数
     *
     * @returns
     */
    readUint8(): number;
    peekUint8(): number;
    /**
     * 读取 16 位无符号整数
     *
     * @returns
     */
    readUint16(): number;
    peekUint16(): number;
    /**
     * 读取 24 位无符号整数
     *
     * @returns
     */
    readUint24(): number;
    peekUint24(): number;
    /**
     * 读取 32 位无符号整数
     *
     * @returns
     */
    readUint32(): number;
    peekUint32(): number;
    /**
     * 读取 64 位无符号整数
     *
     * @returns
     */
    readUint64(): bigint;
    peekUint64(): bigint;
    /**
     * 读取 8 位有符号整数
     *
     * @returns
     */
    readInt8(): number;
    peekInt8(): number;
    /**
     * 读取 16 位有符号整数
     *
     * @returns
     */
    readInt16(): number;
    peekInt16(): number;
    /**
     * 读取 24 位有符号整数
     *
     * @returns
     */
    readInt24(): number;
    peekInt24(): number;
    /**
     * 读取 32 位有符号整数
     *
     * @returns
     */
    readInt32(): number;
    peekInt32(): number;
    /**
     * 读取 64 位有符号整数
     *
     * @returns
     */
    readInt64(): bigint;
    peekInt64(): bigint;
    /**
     * 读取单精度浮点数
     *
     * @returns
     */
    readFloat(): number;
    peekFloat(): number;
    /**
     * 读取双精度浮点数
     *
     * @returns
     */
    readDouble(): number;
    peekDouble(): number;
    /**
     * 读取指定长度的字节，并以 16 进制字符串返回
     *
     * @param length 默认 1
     * @returns
     */
    readHex(length?: number): string;
    peekHex(length?: number): string;
    /**
     * 读取指定长度的字符串
     *
     * @param length 默认 1
     * @returns
     */
    readString(length?: number): string;
    peekString(length?: number): string;
    /**
     * 读取一行字符
     */
    readLine(): string;
    peekLine(): string;
    /**
     * 获取当前读取指针
     *
     * @returns
     */
    getPos(): bigint;
    /**
     * seek 读取指针
     *
     * @param pos
     */
    seek(pos: number): void;
    /**
     * 跳过指定字节长度
     *
     * @param length
     */
    skip(length: number): void;
    /**
     * 返回指定字节长度
     *
     * @param length
     */
    back(length: number): void;
    /**
     * 获取剩余可读字节数
     *
     * @returns
     */
    remainingSize(): number;
    /**
     * 读取指定长度的二进制 buffer 数据
     *
     * @param length
     * @returns
     */
    readBuffer(length: number): Uint8Array<ArrayBufferLike>;
    /**
     * 追加 buffer
     *
     * @param buffer
     */
    appendBuffer(buffer: Uint8ArrayInterface): void;
    /**
     * 重新装载数据
     *
     * @param data
     * @param bigEndian
     */
    resetBuffer(data: Uint8ArrayInterface, bigEndian?: boolean): void;
}
