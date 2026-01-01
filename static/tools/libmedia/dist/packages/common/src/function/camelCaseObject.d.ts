/**
 * @file 把对象的所有属性转成小驼峰形式
 */
/**
 * 把对象的所有属性转成驼峰形式
 *
 * @param obj 待转换对象
 * @param reg 匹配规则（默认匹配下划线）
 *
 * @returns 转转之后的对象
 */
export default function camelCaseObject<T extends Array<any> | {
    [key: string]: any;
}>(obj: T, reg?: RegExp): Partial<T>;
