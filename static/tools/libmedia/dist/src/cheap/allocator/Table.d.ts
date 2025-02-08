interface Node {
    pointer: pointer<void>;
    length: size;
    free: boolean;
}
export declare const enum BuiltinTableSlot {
    FREE = 1,
    MALLOC = 2,
    CALLOC = 3,
    REALLOC = 4,
    ALIGNED_ALLOC = 5,
    SLOT_NB = 6
}
export declare class WebassemblyTable {
    table: WebAssembly.Table;
    pointer: pointer<void>;
    private nodes;
    constructor();
    getPointer(): pointer<void>;
    alloc(count: size): pointer<void>;
    free(pointer: pointer<void>): void;
    get<T extends (...args: any[]) => any>(index: pointer<T>): T;
    set<T extends (...args: any[]) => any>(index: pointer<T>, value: T): void;
    inspect(): Node[];
    private findFree;
    private findNode;
}
export {};
