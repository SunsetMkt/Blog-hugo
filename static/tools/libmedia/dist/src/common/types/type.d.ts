export type Data = Record<string | number | symbol, any>;
export type ThisTask<This> = (this: This) => void;
export type ThisListener<This> = (this: This, event: CustomEventInterface, data?: Data) => false | void;
export type Listener = (event: CustomEventInterface, data?: Data) => false | void;
export type NativeListener = (event: CustomEventInterface | Event) => false | void;
export type Fn = (...args: any[]) => any;
export type Timeout = null | ReturnType<typeof setTimeout>;
export interface Range {
    from: number;
    to: number;
}
export type ValueHolder = {
    keypath?: string;
    value: any;
};
export type Task = {
    fn: Fn;
    ctx?: any;
};
export interface CustomEventInterface {
    type: string;
    phase: number;
    ns?: string;
    target?: any;
    originalEvent?: CustomEventInterface | Event;
    isPrevented?: true;
    isStopped?: true;
    listener?: Function;
    /**
     * 阻止事件的默认行为
     */
    preventDefault(): this;
    /**
     * 停止事件广播
     */
    stopPropagation(): this;
    prevent(): this;
    stop(): this;
}
export interface OS {
    /**
     * os 平台
     */
    name: string;
    /**
     * os 版本号
     */
    version: string;
    /**
     * 是否是 ios 系统
     */
    ios?: boolean;
    /**
     * 系统判断
     */
    iphone?: boolean;
    ipad?: boolean;
    itouch?: boolean;
    android?: boolean;
    wp?: boolean;
    windows?: boolean;
    linux?: boolean;
    mac?: boolean;
    harmony?: boolean;
    mobile?: boolean;
}
export interface Browser {
    /**
     * browser 平台
     */
    name: string;
    /**
     * browser 版本号
     */
    version: string;
    /**
     * 主版本号
     */
    majorVersion: string;
    /**
     * 检查版本
     * @param version 待检查版本号
     * @param checkVersion 检查条件
     * @param equal 是否包括等于（默认大于）
     */
    checkVersion: (version: string, checkVersion: string, equal?: boolean) => boolean;
    /**
     * 浏览器判断
     */
    alipay?: boolean;
    wechat?: boolean;
    baiduApp?: boolean;
    baidu?: boolean;
    uc?: boolean;
    qq?: boolean;
    qqApp?: boolean;
    ie?: boolean;
    edge?: boolean;
    chrome?: boolean;
    firefox?: boolean;
    opera?: boolean;
    safari?: boolean;
    newEdge?: boolean;
    dingtalk?: boolean;
}
export interface Network {
    /**
     * 网络类型
     */
    name: string;
}
export interface WXFile {
    /**
     * 选择的文件名称
     */
    name: string;
    /**
     * 本地临时文件路径 （本地路径）
     */
    path: string;
    /**
     * 本地临时文件大小，单位 B
     */
    size: number;
    /**
     * 选择的文件的会话发送时间，Unix 时间戳，工具暂不支持此属性
     */
    time: number;
    /**
     * 选择的文件类型
     *
     * 可选值：
     * - 'video': 选择了视频文件；
     * - 'image': 选择了图片文件；
     * - 'file': 选择了除图片和视频的文件；
     */
    type: 'video' | 'image' | 'file';
}
export type TransportInterfaceSendData = string | object | ArrayBuffer;
export interface HttpOptions {
    headers?: Data;
    credentials?: RequestCredentials;
    referrerPolicy?: ReferrerPolicy;
}
/**
 * WebSocket 实例接口
 */
export declare class TransportInterface {
    onopen: Function;
    onclose: Function;
    onerror: Function;
    onmessage: Function;
    constructor(url: string, options?: Object);
    send(data: TransportInterfaceSendData): void;
    close(): void;
    /**
     * 用于清理资源
     */
    clear?: () => void;
}
/**
 * Transport server 接口
 */
export interface TransportServer {
    url?: string;
    ip?: string;
    port?: number;
    name?: string;
    wssIp?: string;
    wssPort?: number;
}
/**
 * WebSocket 实现
 */
export interface TransportOptions {
    seqPrefix?: string;
    /**
     * WebSocket 的底层实现类，不同环境会有不同的实现，比如小程序
     */
    native?: typeof TransportInterface;
    /**
     * native 配置，用于实例化
     */
    nativeOptions?: Object;
    /**
     * 尝试连接多个服务器时的间隔
     */
    interval?: number;
    /**
     * 连接单个服务器的超时时间
     */
    timeout?: number;
    /**
     * 当连接不成功时，尝试重连的最大次数
     */
    retryCount?: number;
    /**
     * 连接中断时，是否自动重连
     */
    connectOnClose?: boolean;
    /**
     * 成功建立连接
     */
    onOpen?: (data: {
        server: TransportServer;
        reconnect: boolean;
    }) => void;
    /**
     * 连接被关闭
     */
    onClose?: (e: CloseEvent) => void;
    /**
     * 发出消息
     */
    onSend?: (data: TransportInterfaceSendData) => void;
    /**
     * 收到消息
     */
    onReceive?: (data: string | ArrayBuffer) => void;
    /**
     * 连接发生错误
     */
    onError?: (data: {
        server: TransportServer;
    }) => void;
    /**
     * 连接超时
     */
    onTimeout?: (data: {
        server: TransportServer;
    }) => void;
    /**
     * 正在重连
     */
    onReconnecting?: () => void;
    tag?: string;
    /**
     * 关闭 socket 连接时若 queue 中有消息，等待全部发送之后再发送
     */
    refreshQueueOnClose?: boolean;
    /**
     * 缓存队列最大值
     */
    queueMax?: number;
    /**
     * 消息收发日志输出等级，默认 trace
     */
    logLevel?: number;
}
export type TypeArray = Uint8Array | Int8Array | Uint16Array | Int16Array | Uint32Array | Int32Array | Float32Array | Float64Array;
export type TypeArrayConstructor = Uint8ArrayConstructor | Int8ArrayConstructor | Uint16ArrayConstructor | Int16ArrayConstructor | Uint32ArrayConstructor | Int32ArrayConstructor | Float32ArrayConstructor | Float64ArrayConstructor;
export type ArrayBufferSource = Uint8Array | Int8Array | Uint16Array | Int16Array | Uint32Array | Int32Array | Float32Array | Float64Array | BigInt64Array | BigUint64Array | ArrayBufferLike;
