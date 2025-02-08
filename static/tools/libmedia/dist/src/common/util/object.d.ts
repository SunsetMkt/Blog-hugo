/**
 * @file 对象操作
 */
import { Data } from '../types/type';
/**
 * 获取对象的 key 的数组
 *
 * @param object
 * @return
 */
export declare function keys<T>(object: T): string[];
/**
 * 排序对象的 key
 *
 * @param object
 * @param desc 是否逆序，默认从小到大排序
 * @return
 */
export declare function sort(object: Data, desc?: boolean): string[];
/**
 * 遍历对象
 *
 * @param object
 * @param callback 返回 false 可停止遍历
 */
export declare function each<T extends Data>(object: T, callback: (value: T[keyof T], key: string) => boolean | void): void;
/**
 * 清空对象所有的键值对
 *
 * @param object
 */
export declare function clear(object: Data): void;
/**
 * 扩展对象
 *
 * @return
 */
export declare function extend<T, U, V>(original: T, object: U, object2?: V): T & U & V;
/**
 * 合并对象
 *
 * @return
 */
export declare function merge(object1: Data | void, object2: Data | void): Data | void;
/**
 * 拷贝对象
 *
 * @param object
 * @param deep 是否需要深拷贝
 * @return
 */
export declare function copy(object: any, deep?: boolean): any;
/**
 * 从对象中查找一个 keypath
 *
 * 返回值是空时，表示没找到值
 *
 * @param object
 * @param keypath
 * @return
 */
export declare function get(object: any, keypath: string, defaultValue?: any): any;
/**
 * 为对象设置一个键值对
 *
 * @param object
 * @param keypath
 * @param value
 * @param autofill 是否自动填充不存在的对象，默认自动填充
 */
export declare function set(object: Data, keypath: string, value: any, autofill?: boolean): void;
/**
 * 对象是否包含某个 key
 *
 * @param object
 * @param key
 * @return
 */
export declare function has<T extends Data>(object: T, key: keyof T): boolean;
/**
 * 是否是空对象
 *
 * @param object
 * @return
 */
export declare function falsy(object: any): boolean;
/**
 * 获取两个对象的 value 不同的 key
 *
 * @param obj1
 * @param obj2
 */
export declare function diff(obj1: Object, obj2: Object): string[];
/**
 * 序列化对象
 *
 * @param data
 */
export declare function param(data: Object | Array<any>): string;
/**
 * 将 object 的 value 变成数组
 */
export declare function toArray(data: Object): any[];
/**
 *
 * 更新两个同一类型的对象
 *
 * @param obj1
 * @param obj2
 * @returns
 */
export declare function update(obj1: Object, obj2: Object): Object;
/**
 * 反转 object 的 key value
 */
export declare function reverse(obj: Record<number | string | symbol, number | string | symbol>): {};
