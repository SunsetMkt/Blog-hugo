import type { FrameInfo } from './type';
import type { BitReader } from '@libmedia/common/io';
export declare const MAX_FRAME_HEADER_SIZE = 16;
export declare const MAX_FRAME_VERIFY_SIZE: number;
export declare function getUtf8(reader: BitReader): int64 | -1n;
export declare function decodeFrameHeader(bitReader: BitReader, info: Partial<FrameInfo>, check?: boolean): 0 | -2;
