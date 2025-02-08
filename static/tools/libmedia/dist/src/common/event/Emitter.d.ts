/**
 * https://github.com/yoxjs/yox-common/blob/master/src/util/Emitter.ts
 * MIT License
 *
 * @file 事件代理
 */
import { NativeListener, Task } from '../types/type';
export interface EmitterOptions extends Task {
    ns?: string;
    num?: number;
    max?: number;
    count?: number;
}
type Namespace = {
    type: string;
    ns?: string;
};
export default class Emitter {
    /**
     * 是否开启命名空间
     */
    ns: boolean;
    /**
     * 已注册的事件监听
     */
    listeners: Record<string, EmitterOptions[]>;
    /**
     * 原生事件监听，一个事件对应一个 listener
     */
    nativeListeners?: Record<string, NativeListener>;
    constructor(ns?: boolean);
    /**
     * 发射事件
     *
     * @param type 事件名称或命名空间
     * @param args 事件处理函数的参数列表
     * @param filter 自定义过滤器
     */
    fire(type: string | Namespace, args: any[] | void, filter?: (namespace: Namespace, args: any[] | void, options: EmitterOptions) => boolean | void): boolean;
    /**
     * 注册监听
     *
     * @param type
     * @param listener
     */
    on(type: string | Namespace, listener: Function | EmitterOptions): Emitter;
    one(type: string | Namespace, listener: Function | EmitterOptions): Emitter;
    /**
     * 取消监听
     *
     * @param type
     * @param listener
     */
    off(type?: string | Namespace, listener?: Function): void;
    /**
     * 是否已监听某个事件
     *
     * @param type
     * @param listener
     */
    has(type: string | Namespace, listener?: Function): boolean;
    /**
     * 把事件类型解析成命名空间格式
     *
     * @param type
     */
    parse(type: string): Namespace;
}
export {};
