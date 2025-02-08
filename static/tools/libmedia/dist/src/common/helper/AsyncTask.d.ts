/**
 * @file 异步任务队列
 */
import { Task, Fn } from '../types/type';
export default class NextTask {
    /**
     * 全局单例
     */
    static shared(): NextTask;
    /**
     * 异步队列
     */
    tasks: Task[];
    constructor();
    /**
     * 在队尾添加异步任务
     */
    append(func: Fn, context?: any): void;
    /**
     * 在队首添加异步任务
     */
    prepend(func: Fn, context?: any): void;
    /**
     * 清空异步队列
     */
    clear(): void;
    /**
     * 立即执行异步任务，并清空队列
     */
    run(): void;
}
