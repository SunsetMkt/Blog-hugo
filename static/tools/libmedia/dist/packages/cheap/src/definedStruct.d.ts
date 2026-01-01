export declare function definedStruct<T>(address: pointer<void>, struct: (new () => T) | {}): T;
export declare function revokeDefinedStruct<T>(target: T): void;
