/**
 * 发送 post 请求
 *
 * @internal
 * @param path fetch 路径
 * @param data post 发送 data
 * @returns 返回数据
 */
export declare function post(path: string, data: Object, contentType?: string, headers?: Object): Promise<any>;
/**
 * 发送 get 请求
 *
 * @internal
 * @param path fetch 路径
 * @param data get 发送 data
 * @returns 返回数据
 */
export declare function get(path: string, data: Object, contentType?: string, headers?: Object): Promise<any>;
