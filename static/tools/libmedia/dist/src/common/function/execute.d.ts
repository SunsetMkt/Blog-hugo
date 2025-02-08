/**
 * @file 使用指定上下文执行函数
 */
import { ReturnType, ParamType } from '../types/advanced';
import { Fn } from '../types/type';
/**
 * 任性地执行一个函数，不管它有没有、是不是
 *
 * @param fn 调用的函数
 * @param context 执行函数时的 this 指向
 * @param args 调用函数的参数，多参数时传入数组
 * @return 调用函数的返回值
 */
export default function execute<T extends Fn>(fn: T, context?: any, args?: ParamType<T> | void): ReturnType<T>;
