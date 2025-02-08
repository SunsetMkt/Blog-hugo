/**
 * 访问 struct 指针
 *
 * @param target
 * @param address
 * @returns
 */
export default function structAccess<T>(address: pointer<void>, struct: new (...args: any[]) => T): T;
