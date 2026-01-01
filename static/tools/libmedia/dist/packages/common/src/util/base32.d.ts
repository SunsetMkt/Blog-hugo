/**
 * base32 解密
 */
export declare function decode(text: string): Uint8Array;
/**
 * base32 加密
 */
export declare function encode(buffer: Uint8Array, padding?: boolean): string;
