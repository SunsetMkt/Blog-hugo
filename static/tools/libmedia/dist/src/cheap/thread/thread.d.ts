import { PromiseType, RemoveNeverProperties } from 'common/types/advanced';
import IPCPort from 'common/network/IPCPort';
type AsyncReturnWithoutProperties<T> = RemoveNeverProperties<{
    [K in keyof T]: T[K] extends (...args: any[]) => any ? (T[K] extends (...args: any[]) => Promise<any> ? T[K] & {
        transfer: (...transfer: Transferable[]) => {
            invoke: T[K];
        };
    } : (...args: Parameters<T[K]>) => Promise<ReturnType<T[K]>>) & {
        transfer: (...transfer: Transferable[]) => {
            invoke: T[K];
        };
    } : never;
}>;
type ThreadType = 'class' | 'function' | 'module';
export type Thread<T, U = never> = {
    $worker: Worker;
    $ipc?: IPCPort;
    $channel?: MessageChannel;
    $moduleId: string | Worker;
    $stackPointer: pointer<void>;
    $retval?: Promise<U>;
    $instance?: any;
    $type: ThreadType;
} & AsyncReturnWithoutProperties<T>;
export interface ThreadOptions {
    name?: string;
    stackSize?: number;
    disableWorker?: boolean;
    dispatchToWorker?: boolean;
}
export declare function createThreadFromClass<T, U extends any[]>(entity: new (...args: U) => T, workerize: () => Worker): {
    run: (...args: U) => Promise<Thread<T>>;
    transfer: (...transfer: Transferable[]) => {
        run: (...args: U) => Promise<Thread<T>>;
    };
};
export declare function createThreadFromClass<T, U extends any[]>(entity: new (...args: U) => T, options: ThreadOptions, workerize: () => Worker): {
    run: (...args: U) => Promise<Thread<T>>;
    transfer: (...transfer: Transferable[]) => {
        run: (...args: U) => Promise<Thread<T>>;
    };
};
export declare function createThreadFromClass<T, U extends any[], args = [moduleId<'0'>]>(entity: new (...args: U) => T, options?: ThreadOptions): {
    run: (...args: U) => Promise<Thread<T>>;
    transfer: (...transfer: Transferable[]) => {
        run: (...args: U) => Promise<Thread<T>>;
    };
};
export declare function createThreadFromFunction<T extends any[], U extends any>(entity: (...args: T) => U, options: ThreadOptions, workerize: () => Worker): {
    run: (...args: T) => Promise<Thread<{}, U>>;
    transfer: (...transfer: Transferable[]) => {
        run: (...args: T) => Promise<Thread<{}, U>>;
    };
};
export declare function createThreadFromFunction<T extends any[], U extends any>(entity: (...args: T) => U, workerize: () => Worker): {
    run: (...args: T) => Promise<Thread<{}, U>>;
    transfer: (...transfer: Transferable[]) => {
        run: (...args: T) => Promise<Thread<{}, U>>;
    };
};
export declare function createThreadFromFunction<T extends any[], U extends any, args = [moduleId<'0'>]>(entity: (...args: T) => U, options?: ThreadOptions): {
    run: (...args: T) => Promise<Thread<{}, U>>;
    transfer: (...transfer: Transferable[]) => {
        run: (...args: T) => Promise<Thread<{}, U>>;
    };
};
export declare function createThreadFromModule<T extends Object>(entity: T, workerize: () => Worker): {
    run: () => Promise<Thread<T>>;
};
export declare function createThreadFromModule<T extends Object>(entity: T, options: ThreadOptions, workerize: () => Worker): {
    run: () => Promise<Thread<T>>;
};
export declare function createThreadFromModule<T extends Object, args = [moduleId<'0'>]>(entity: T, options?: ThreadOptions): {
    run: () => Promise<Thread<T>>;
};
export declare function closeThread<T, U>(thread: Thread<T, U>): void;
export declare function joinThread<T, U>(thread: Thread<{}, U>): Promise<PromiseType<U>>;
export {};
