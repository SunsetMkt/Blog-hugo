/**
 * 获取函数的返回类型
 */
export type ReturnType<T> = T extends (...args: any[]) => infer P ? P : void;
/**
 * 获取函数的参数类型
 */
export type ParamType<T> = T extends (...args: infer P) => any ? P : never;
/**
 * 获取 Promise 的参数类型
 */
export type PromiseType<T> = T extends Promise<infer P> ? P : T;
/**
 * 类构造函数类型
 */
export type Constructor<T> = new (...args: any[]) => T;
/**
 * 将联合类型变成交叉类型
 */
export type UnionToIoF<U> = (U extends any ? (k: (x: U) => void) => void : never) extends ((k: infer I) => void) ? I : never;
/**
 * 返回联合类型中的最后一个类型
 */
export type UnionPop<U> = UnionToIoF<U> extends (a: infer A) => void ? A : never;
/**
 * 将类型 U prepend 进元组 T 中
 */
export type Prepend<U, T extends any[]> = ((a: U, ...r: T) => void) extends (...r: infer R) => void ? R : never;
/**
 * 联合类型
 */
type UnionToTupleRecursively<Union, Result extends any[]> = {
    1: Result;
    0: UnionToTupleRecursively_<Union, UnionPop<Union>, Result>;
}[[Union] extends [never] ? 1 : 0];
type UnionToTupleRecursively_<Union, Element, Result extends any[]> = UnionToTupleRecursively<Exclude<Union, Element>, Prepend<Element, Result>>;
/**
 * 联合类型变成元组类型
 */
export type UnionToTuple<U> = UnionToTupleRecursively<U, []>;
export type SetFunctionKeys<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];
export type SetOmitFunctions<T> = Omit<T, SetFunctionKeys<T>>;
export type RemoveNeverProperties<T> = {
    [K in keyof T as T[K] extends never ? never : K]: T[K];
};
export type AsyncReturnWithoutProperties<T> = RemoveNeverProperties<{
    [K in keyof T]: T[K] extends (...args: any[]) => any ? (T[K] extends (...args: any[]) => Promise<any> ? T[K] : (...args: Parameters<T[K]>) => Promise<ReturnType<T[K]>>) : never;
}>;
export type UnwrapArray<T> = T extends (infer U)[] ? U : never;
export type IsAny<T> = unknown extends T ? [T] extends [string] ? true : false : false;
export {};
