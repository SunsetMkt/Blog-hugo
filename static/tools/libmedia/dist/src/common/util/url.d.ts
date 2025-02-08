/**
 * @file url 操作
 */
/**
 * 把查询字符串解析成对象
 * @param queryStr
 */
export declare function parseQuery(queryStr: string, separator?: string): Record<string, string>;
/**
 * 把对象序列化成查询字符串
 *
 * @param query
 * @return
 */
export declare function stringifyQuery(query: Record<string, string | number | boolean>, separator?: string): string;
/**
 * 解析 url，返回格式遵循 location 属性的命名
 *
 * @param url 如果不传，使用当前地址
 */
export declare function parse(url: string): {
    protocol: string;
    file: string;
    host: string;
    port: string;
    user: string;
    password: string;
    origin: string;
    pathname: string;
    search: string;
    hash: string;
};
/**
 * 把参数混入一个 url
 *
 * @param query
 * @param url
 * @param applyHash
 */
export declare function mixin(query: Record<string, any>, applyHash: boolean, url?: string): string;
export declare function normalizePath(path: string): string;
/**
 * from https://github.com/tjenkinson/url-toolkit
 *
 */
export declare function buildAbsoluteURL(baseURL: string, relativeURL: string, opts?: {
    alwaysNormalize?: boolean;
}): string;
