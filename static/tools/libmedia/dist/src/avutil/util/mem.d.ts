export declare function avMalloc(len: size): pointer<void>;
export declare function avMallocz(len: size): pointer<void>;
export declare function avFree(p: pointer<void>): void;
export declare function avFreep(p: pointer<pointer<void>>): void;
export declare function avRealloc(p: pointer<void>, size: size): pointer<void>;
