/**
 * @file cookie 操作
 */
/**
 * 读取 cookie 的键值
 *
 * 如果不传 key，则返回完整的 cookie 键值对象
 *
 * @param key
 * @return
 */
export declare function get(key: string): string | Object | void;
/**
 * 写入 cookie
 *
 * @param key 如果 key 是 string，则必须传 value 如果 key 是 Object，可批量写入
 * @param value
 * @param options
 * @param options.expires 过期小时数，如 1 表示 1 小时后过期
 * @param options.path
 * @param options.domain
 * @param options.secure
 */
export declare function set(key: string | Object, value?: any, options?: {
    path?: string;
    domain?: string;
    secure?: boolean;
    expires?: number | Date;
}): void;
/**
 * 删除某个 cookie
 */
export declare function remove(key: string, options?: {
    path?: string;
    domain?: string;
    secure?: boolean;
    expires?: number | Date;
}): void;
