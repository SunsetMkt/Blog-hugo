/**
 * 销毁一个 struct 实例，调用 make 创建的对象必须调用 unmake，否则内存泄漏
 *
 * @param target
 */
export default function unmake<T extends Object>(target: T): void;
