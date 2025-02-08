type AnyModule = {
    [key: string]: any;
};
/**
 * 子线程运行入口方法
 *
 * @param entity
 */
export default function runThread(entity: (new (...args: any[]) => any) | ((...args: any[]) => any) | AnyModule): void;
export {};
