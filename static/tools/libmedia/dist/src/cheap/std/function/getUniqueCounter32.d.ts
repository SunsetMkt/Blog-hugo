/**
 * 获取全局唯一的 uint32 计数器，在页面的生命周期内返回的值是唯一的
 *
 * 线程安全但需要注意回环
 *
 * @returns
 */
export default function getUniqueCounter32(): uint32;
