/**
 * @file 路径操作
 */
/**
 * 判断 keypath 是否以 prefix 开头，如果是，返回匹配上的前缀长度，否则返回 -1
 *
 * @param keypath
 * @param prefix
 * @return
 */
export declare function match(keypath: string, prefix: string): number;
/**
 * 遍历 keypath 的每个部分
 *
 * @param keypath
 * @param callback 返回 false 可中断遍历
 */
export declare function each(keypath: string, callback: (key: string, isLast: boolean) => boolean | void): void;
/**
 * 路径组合
 *
 * @param keypath1
 * @param keypath2
 */
export declare function join(keypath1: string, keypath2: string): string;
/**
 * 是否是模糊匹配
 *
 * @param keypath
 */
export declare function isFuzzy(keypath: string): boolean;
/**
 * 模糊匹配 keypath
 *
 * @param keypath 待匹配路径
 * @param pattern 匹配规则
 */
export declare function matchFuzzy(keypath: string, pattern: string): string | void;
/**
 * 返回 keypath 的根路径
 *
 * @param keypath
 */
export declare function rootPath(keypath: string): string;
