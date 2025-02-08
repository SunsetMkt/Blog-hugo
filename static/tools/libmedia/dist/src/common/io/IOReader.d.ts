/**
 * 读字节流工具
 */
import IOWriter from './IOWriter';
import { Uint8ArrayInterface, BytesReader } from './interface';
export default class IOReader implements BytesReader {
    private data;
    private buffer;
    private pointer;
    private endPointer;
    private pos;
    private size;
    private littleEndian;
    private fileSize_;
    error: number;
    onFlush: (buffer: Uint8Array) => Promise<number> | number;
    onSeek: (seek: bigint) => Promise<number> | number;
    onSize: () => Promise<bigint> | bigint;
    flags: number;
    /**
     * @param data 待读取的字节
     * @param bigEndian 是否按大端字节序读取，默认大端字节序（网络字节序）
     */
    constructor(size?: number, bigEndian?: boolean, map?: Uint8ArrayInterface);
    /**
     * 读取 8 位无符号整数
     *
     * @returns
     */
    readUint8(): Promise<number>;
    /**
     * 读取 8 位无符号整数（不会移动读取指针位置）
     *
     * @returns
     */
    peekUint8(): Promise<number>;
    /**
     * 读取 16 位无符号整数
     *
     * @returns
     */
    readUint16(): Promise<number>;
    /**
     * 读取 16 位无符号整数（不会移动读取指针位置）
     *
     * @returns
     */
    peekUint16(): Promise<number>;
    /**
     * 读取 24 位无符号整数
     *
     * @returns
     */
    readUint24(): Promise<number>;
    /**
     * 读取 24 位无符号整数（不会移动读取指针位置）
     *
     * @returns
     */
    peekUint24(): Promise<number>;
    /**
     * 读取 32 位无符号整数
     *
     * @returns
     */
    readUint32(): Promise<number>;
    /**
     * 读取 32 位无符号整数（不会移动读取指针位置）
     *
     * @returns
     */
    peekUint32(): Promise<number>;
    /**
     * 读取 64 位无符号整数
     *
     * @returns
     */
    readUint64(): Promise<bigint>;
    /**
     * 读取 64 位无符号整数（不会移动读取指针位置）
     *
     * @returns
     */
    peekUint64(): Promise<bigint>;
    /**
     * 读取 8 位有符号整数
     *
     * @returns
     */
    readInt8(): Promise<number>;
    /**
     * 读取 8 位有符号整数（不会移动读取指针位置）
     *
     * @returns
     */
    peekInt8(): Promise<number>;
    /**
     * 读取 16 位有符号整数
     *
     * @returns
     */
    readInt16(): Promise<number>;
    /**
     * 读取 16 位有符号整数（不会移动读取指针位置）
     *
     * @returns
     */
    peekInt16(): Promise<number>;
    /**
     * 读取 24 位有符号整数
     *
     * @returns
     */
    readInt24(): Promise<number>;
    /**
     * 读取 24 位有符号整数（不会移动读取指针位置）
     *
     * @returns
     */
    peekInt24(): Promise<number>;
    /**
     * 读取 32 位有符号整数
     *
     * @returns
     */
    readInt32(): Promise<number>;
    /**
     * 读取 32 位有符号整数（不会移动读取指针位置）
     *
     * @returns
     */
    peekInt32(): Promise<number>;
    /**
     * 读取 64 位有符号整数
     *
     * @returns
     */
    readInt64(): Promise<bigint>;
    /**
     * 读取 64 位有符号整数（不会移动读取指针位置）
     *
     * @returns
     */
    peekInt64(): Promise<bigint>;
    /**
     * 读取单精度浮点数
     *
     * @returns
     */
    readFloat(): Promise<number>;
    /**
     * 读取单精度浮点数（不会移动读取指针位置）
     *
     * @returns
     */
    peekFloat(): Promise<number>;
    /**
     * 读取双精度浮点数
     *
     * @returns
     */
    readDouble(): Promise<number>;
    /**
     * 读取双精度浮点数（不会移动读取指针位置）
     *
     * @returns
     */
    peekDouble(): Promise<number>;
    /**
     * 读取指定长度的字节，并以 16 进制字符串返回
     *
     * @param length 默认 1
     * @returns
     */
    readHex(length?: number): Promise<string>;
    /**
     * 读取指定长度的字节，并以 16 进制字符串返回（不会移动读取指针位置）
     *
     * @param length 默认 1
     * @returns
     */
    peekHex(length?: number): Promise<string>;
    /**
     * 读取指定长度的二进制数据，不够抛错
     *
     * 第二个参数可传入预先分配的 buffer
     *
     * 返回读取的 Uint8Array
     *
     * @param length
     * @returns
     */
    readBuffer(length: number): Promise<Uint8Array>;
    readBuffer<T extends Uint8ArrayInterface>(length: number, buffer: T): Promise<T>;
    /**
     * 读取指定长度的二进制 buffer 数据（不会移动读取指针位置）
     *
     * @param length
     * @returns
     */
    peekBuffer(length: number): Promise<Uint8Array>;
    peekBuffer<T extends Uint8ArrayInterface>(length: number, buffer: T): Promise<T>;
    /**
     * 读取最多 length 字节的数据到指定 buffer，返回已写入的字节长度
     *
     * @param length
     * @param buffer
     * @returns
     */
    readToBuffer(length: number, buffer: Uint8ArrayInterface): Promise<number>;
    /**
     * 读取指定长度的字符串
     *
     * @param length 默认 1
     * @returns
     */
    readString(length?: number): Promise<string>;
    /**
     * 读取指定长度的字符串（不会移动读取指针位置）
     *
     * @param length 默认 1
     * @returns
     */
    peekString(length?: number): Promise<string>;
    /**
     * 读取一行字符
     */
    readLine(): Promise<string>;
    /**
     * 读取一行字符（不会移动读取指针位置）
     */
    peekLine(): Promise<string>;
    /**
     * 获取当前读取指针
     *
     * @returns
     */
    getPointer(): number;
    /**
     * 获取已读字节偏移
     *
     * @returns
     */
    getPos(): bigint;
    /**
     * 跳过指定字节长度
     *
     * @param length
     */
    skip(length: number): Promise<void>;
    /**
     * 获取剩余可读字节数
     *
     * @returns
     */
    remainingLength(): number;
    private flush_;
    /**
     * 重新填充剩余缓冲区
     *
     * @param need
     * @returns
     */
    flush(need?: number): Promise<void>;
    /**
     *
     * seek 到指定位置
     *
     * @param pos
     * @param force false 时可以在目前的缓冲区内 seek，否则丢弃缓冲区内容重新填充指定位置的数据，默认 false
     * @param flush 指定 seek 之后是否马上填充数据，否则只 seek 到目标位置，默认 true
     * @returns
     */
    seek(pos: bigint, force?: boolean, flush?: boolean): Promise<void>;
    /**
     * 获取缓冲区
     */
    getBuffer(): Uint8ArrayInterface;
    /**
     * 写入数据到缓冲区
     *
     * @param buffer
     */
    appendBuffer(buffer: Uint8Array): void;
    /**
     * 重置 reader
     */
    reset(): void;
    /**
     * 设置读取是小端还是大端
     *
     * @param bigEndian
     */
    setEndian(bigEndian: boolean): void;
    /**
     * 获取源总字节长度
     *
     * @returns
     */
    fileSize(): Promise<bigint>;
    /**
     * 获取缓冲区长度
     *
     * @returns
     */
    getBufferSize(): number;
    /**
     * 连接到 ioWriter
     *
     * @param ioWriter
     * @param length
     */
    pipe(ioWriter: IOWriter, length?: number): Promise<void>;
}
