import type AVCodecParameters from '../struct/avcodecparameters';
export { default as isHdr } from '../function/isHdr';
export { default as hasAlphaChannel } from '../function/hasAlphaChannel';
export declare function copyCodecParameters(dst: pointer<AVCodecParameters>, src: pointer<AVCodecParameters>): void;
export declare function resetCodecParameters(par: pointer<AVCodecParameters>): void;
export declare function freeCodecParameters(par: pointer<AVCodecParameters>): void;
