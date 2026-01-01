export declare function avMalloc<T = void>(len: size): pointer<T>;
export declare function avMallocz<T = void>(len: size): pointer<T>;
export declare function avFree(p: pointer<void>): void;
export declare function avFreep(p: pointer<pointer<void>>): void;
export declare function avRealloc<T = void>(p: pointer<T>, size: size): pointer<T>;
