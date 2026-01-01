import type { AVDictionary } from '../struct/avdict';
import { AVDictionaryEntry } from '../struct/avdict';
export declare function freeAVDict(pm: pointer<pointer<AVDictionary>>): void;
export declare function freeAVDict2(m: pointer<AVDictionary>): void;
export declare function avDictCount(m: pointer<AVDictionary>): 0 | int32;
export declare function avDictIterate(m: pointer<AVDictionary>, prev: pointer<AVDictionaryEntry>): pointer<AVDictionaryEntry>;
export declare function avDictGet(m: pointer<AVDictionary>, key: string, prev?: pointer<AVDictionaryEntry>, flags?: int32): pointer<AVDictionaryEntry>;
export declare function avDictSet(m: pointer<AVDictionary>, key: string, value: string, flags?: int32): number;
export declare function avDictCopy(dst: pointer<pointer<AVDictionary>>, src: pointer<AVDictionary>, flags: int32): number;
