/**
 * @file 串行操作
 */
/**
 * 串行操作，将一组函数依次调用
 *
 * @param actions 函数数组
 * @param interval 间隔时间
 * @returns 中断函数
 */
export default function serial(actions: Function[], interval: number): Function;
