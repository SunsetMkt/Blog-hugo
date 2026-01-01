import type { AVOFormatContext } from './AVFormatContext';
import { type AVPacket } from '@libmedia/avutil';
export type MuxOptions = {
    zeroStart?: boolean;
    nonnegative?: boolean;
};
export declare function open(formatContext: AVOFormatContext, options?: MuxOptions): number;
export declare function writeHeader(formatContext: AVOFormatContext): number;
export declare function writeAVPacket(formatContext: AVOFormatContext, avpacket: pointer<AVPacket>): number;
export declare function writeTrailer(formatContext: AVOFormatContext): number;
export declare function flush(formatContext: AVOFormatContext): void;
