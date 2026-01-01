/**
 * from https://github.com/kuu/hls-parser/blob/master/utils.ts
 * MIT license
 */
declare function toNumber(str: string, radix?: number): number;
declare function hexToByteSequence(str: string): Uint8Array;
declare function splitAt(str: string, delimiter: string, index?: number): [string] | [string, string];
declare function trim(str: string | undefined, char?: string): string;
declare function splitByCommaWithPreservingQuotes(str: string): string[];
declare function camelify(str: string): string;
export { toNumber, hexToByteSequence, splitAt, trim, splitByCommaWithPreservingQuotes, camelify };
