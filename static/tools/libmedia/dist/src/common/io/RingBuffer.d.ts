import { TypeArrayConstructor, TypeArray } from '../types/type';
/**
 * 环形缓冲区
 */
export default class RingBuffer<T extends TypeArray> {
    private size;
    private length;
    private valid;
    private tail;
    private data;
    private pos;
    private constructorFunction;
    constructor(size: number, constructor: TypeArrayConstructor);
    /**
     * 写入数据到缓冲区
     *
     * @param data
     * @returns
     */
    write(data: T): void;
    /**
     * 从缓冲区读取指定长度的数据
     *
     * @param length
     * @returns
     */
    read(length: number): T;
    /**
     * 读取指定区间的数据
     *
     * @param start
     * @param end
     * @returns
     */
    readByRange(start: number, end: number): T;
    /**
     * 获取当前读取指针
     *
     * @returns
     */
    getCurrentPointer(): number;
    /**
     * 读取一个字节
     *
     * @returns
     */
    readByte(): number;
    /**
     * 读取指定位置的数据
     *
     * @param index
     * @returns
     */
    getByteByIndex(index: number): number;
    /**
     * 获取缓冲区大小
     *
     * @returns
     */
    getSize(): number;
    /**
     * 获取数据大小
     *
     * @returns
     */
    getLength(): number;
    /**
     * 获取当前读取位置
     *
     * @returns
     */
    getPos(): number;
    /**
     * 获取缓冲区剩余长度
     *
     * @returns
     */
    getRemainingSize(): number;
    /**
     * 将读取指针回退指定长度
     *
     * @param length
     */
    back(length: number): void;
    /**
     * 跳过指定长度
     *
     * @param length
     */
    skip(length: number): void;
    /**
     * 重置缓冲区
     */
    clear(): void;
}
