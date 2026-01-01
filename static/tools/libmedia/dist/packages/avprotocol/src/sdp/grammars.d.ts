/**
 * from https://github.com/clux/sdp-transform
 */
import { type Data } from '@libmedia/common';
export type SdpGrammar = {
    name?: string;
    push?: string;
    reg: RegExp;
    names?: string[];
    format: string | ((data: Data) => string);
};
export declare const defaultReg: RegExp;
export declare const defaultFormat = "%s";
export declare const grammars: Record<string, SdpGrammar[]>;
export declare function addGrammar(attar: string, grammar: SdpGrammar[]): void;
