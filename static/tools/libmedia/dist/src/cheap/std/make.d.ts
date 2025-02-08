import { Data } from 'common/types/type';
/**
 * 创建一个 struct 实例
 *
 * @param target
 * @returns
 */
export default function make<T>(init?: Data, struct?: new (...args: any[]) => T): T;
