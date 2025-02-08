/**
 * 写字节流工具
 */
import { Uint8ArrayInterface, BytesWriterSync } from './interface';
export default class BufferWriter implements BytesWriterSync {
    private data;
    private buffer;
    private byteStart;
    private pos;
    private size;
    private littleEndian;
    /**
     * @param data 待写的 Uint8Array
     * @param bigEndian 是否按大端字节序写，默认大端字节序（网络字节序）
     */
    constructor(data: Uint8ArrayInterface, bigEndian?: boolean);
    /**
     * 写 8 位无符号整数
     */
    writeUint8(value: number): void;
    /**
     * 读取 16 位无符号整数
     */
    writeUint16(value: number): void;
    /**
     * 写 24 位无符号整数
     */
    writeUint24(value: number): void;
    /**
     * 写 32 位无符号整数
     */
    writeUint32(value: number): void;
    /**
     * 写 64 位无符号整数
     */
    writeUint64(value: bigint): void;
    /**
     * 写 8 位有符号整数
     *
     * @returns
     */
    writeInt8(value: number): void;
    /**
     * 写 16 位有符号整数
     */
    writeInt16(value: number): void;
    /**
     * 写 24 位有符号整数
     */
    writeInt24(value: number): void;
    /**
     * 写 32 位有符号整数
     */
    writeInt32(value: number): void;
    /**
     * 写 64 位有符号整数
     */
    writeInt64(value: bigint): void;
    /**
     * 写单精度浮点数
     *
     * @returns
     */
    writeFloat(value: number): void;
    /**
     * 写双精度浮点数
     */
    writeDouble(value: number): void;
    /**
     * 获取当前写指针
     *
     * @returns
     */
    getPos(): number;
    /**
     * seek 写指针
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
     * 获取剩余可写节数
     *
     * @returns
     */
    remainingSize(): number;
    /**
     * 写指定长度的二进制 buffer 数据
     *
     * @param length
     * @returns
     */
    writeBuffer(buffer: Uint8ArrayInterface): void;
    /**
     * 写一个字符串
     */
    writeString(str: string): number;
    /**
     * 获取已写的数据
     *
     * @returns
     */
    getWroteBuffer(): Uint8Array<ArrayBufferLike>;
    /**
     * 重新装载数据
     *
     * @param data
     * @param bigEndian
     */
    resetBuffer(data: Uint8ArrayInterface, bigEndian?: boolean): void;
}
