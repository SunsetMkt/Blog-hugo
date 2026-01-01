/**
 * @file 判断
 */
/**
 * Check if value is a function.
 *
 * @param value
 * @return
 */
export declare function func(value: any): value is Function;
/**
 * Check if value is an array.
 *
 * @param value
 * @return
 */
export declare function array<T>(value: any): value is Array<T>;
/**
 * Check if value is an object.
 *
 * @param value
 * @return
 */
export declare function object(value: any): value is Object;
/**
 * Check if value is a string.
 *
 * @param value
 * @return
 */
export declare function string(value: any): value is string;
/**
 * Check if value is a number.
 *
 * @param value
 * @return
 */
export declare function number(value: any): value is number;
/**
 * Check if value is a bigint.
 *
 * @param value
 * @return
 */
export declare function bigint(value: any): value is bigint;
/**
 * Check if value is boolean.
 *
 * @param value
 * @return
 */
export declare function boolean(value: any): value is boolean;
/**
 * Check if value is numeric.
 *
 * @param value
 * @return
 */
export declare function numeric(value: any): value is (number | string);
/**
 * 判断是不是普通字面量对象
 *
 * @param {*} target
 * @return {boolean}
 */
export declare function isPlainObject(target: any): target is Object;
/**
 * 判断 value 是否在指定范围中
 *
 * @param value 待判断值
 * @param min 范围左区间
 * @param max 范围右区间
 */
export declare function range(value: number, min: number, max: number): boolean;
/**
 * Check if value is ArrayBuffer.
 *
 * @param value
 * @returns
 */
export declare function arrayBuffer(value: any): value is ArrayBuffer;
