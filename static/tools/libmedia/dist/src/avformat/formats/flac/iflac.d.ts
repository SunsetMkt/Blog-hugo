import BitReader from 'common/io/BitReader';
import { FrameInfo } from './type';
export declare function getUtf8(reader: BitReader): int64 | -1n;
export declare function decodeFrameHeader(bitReader: BitReader, info: Partial<FrameInfo>, check?: boolean): 0 | -2;
