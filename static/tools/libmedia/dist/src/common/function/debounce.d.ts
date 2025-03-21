/**
 * @file 防抖函数
 */
import { Fn } from '../types/type';
/**
 * 防抖函数
 *
 * @param fn 需要节制调用的函数
 * @param delay 调用的时间间隔，单位毫秒
 * @param immediate 是否立即触发
 * @return 节流函数
 */
export default function debounce<T extends Fn>(fn: T, delay: number, immediate?: boolean, last?: boolean): T;
