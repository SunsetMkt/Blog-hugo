export declare const enum AVDictFlags {
    MATCH_CASE = 1,
    IGNORE_SUFFIX = 2,
    DONT_OVERWRITE = 16,
    APPEND = 32,
    MULTIKEY = 64
}
export declare class AVDictionaryEntry {
    key: pointer<void>;
    value: pointer<void>;
}
export declare class AVDictionary {
    count: int32;
    elems: pointer<AVDictionaryEntry>;
}
