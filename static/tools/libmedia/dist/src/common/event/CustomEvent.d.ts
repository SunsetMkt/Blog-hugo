/**
 * https://github.com/yoxjs/yox-common/blob/master/src/util/CustomEvent.ts
 * MIT License
 *
 * @file 事件
 */
import { CustomEventInterface } from '../types/type';
export default class CustomEvent implements CustomEventInterface {
    static PHASE_CURRENT: number;
    static PHASE_UPWARD: number;
    static PHASE_DOWNWARD: number;
    type: string;
    phase: number;
    ns?: string;
    target?: any;
    originalEvent?: CustomEventInterface | Event;
    isPrevented?: true;
    isStopped?: true;
    listener?: Function;
    /**
     * 构造函数
     *
     * 可以传事件名称，也可以传原生事件对象
     */
    constructor(type: string, originalEvent?: CustomEventInterface | Event);
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
