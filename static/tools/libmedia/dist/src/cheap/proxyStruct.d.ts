import { KeyMeta } from './typedef';
export declare function findKeyMeta<T>(prototype: new () => T, key: string): KeyMeta;
export declare function proxyStruct<T>(address: pointer<void>, struct: (new () => T) | {}): T;
export declare function revokeProxyStruct<T>(target: T): void;
