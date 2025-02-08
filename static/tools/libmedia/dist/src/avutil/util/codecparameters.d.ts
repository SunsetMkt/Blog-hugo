import AVCodecParameters from '../struct/avcodecparameters';
export declare function copyCodecParameters(dst: pointer<AVCodecParameters>, src: pointer<AVCodecParameters>): void;
export declare function resetCodecParameters(par: pointer<AVCodecParameters>): void;
export declare function freeCodecParameters(par: pointer<AVCodecParameters>): void;
