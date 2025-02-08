/**
 * @file string 操作
 */
/**
 * 首字母大写
 *
 * @param str
 * @return
 */
export declare function capitalize(str: string): string;
/**
 * 清除两侧空白符
 *
 * @param str
 * @return 清除两侧空白符的字符串
 */
export declare function trim(str: any): string;
/**
 * 截取字符串
 *
 * @param str
 * @param start
 * @param end
 * @return
 */
export declare function slice(str: string, start: number, end?: number): string;
/**
 * 获取子串的起始位置
 *
 * @param str
 * @param part
 * @param start
 * @return
 */
export declare function indexOf(str: string, part: string, start?: number): number;
/**
 * 获取子串的起始位置
 *
 * @param str
 * @param part
 * @param end
 * @return
 */
export declare function lastIndexOf(str: string, part: string, end?: number): number;
/**
 * str 是否以 part 开头
 *
 * @param str
 * @param part
 * @return
 */
export declare function startsWith(str: string, part: string): boolean;
/**
 * str 是否以 part 结束
 *
 * @param str
 * @param part
 * @return
 */
export declare function endsWith(str: string, part: string): boolean;
/**
 * 获取某个位置的字符
 */
export declare function charAt(str: string, index?: number): string;
/**
 * 获取某个位置的字符编码
 */
export declare function codeAt(str: string, index?: number): number;
/**
 * 大写格式
 */
export declare function upper(str: string): string;
/**
 * 小写格式
 */
export declare function lower(str: string): string;
/**
 * str 是否包含 part
 *
 * @param str
 * @param part
 * @return 是否包含
 */
export declare function has(str: string, part: string): boolean;
/**
 * 判断长度大于 0 的字符串
 *
 * @param str
 * @return
 */
export declare function falsy(str: any): boolean;
/**
 * 格式化输出
 *
 * @param string
 * @param args
 * @returns
 */
export declare function format(string: string, ...args: any[]): string;
