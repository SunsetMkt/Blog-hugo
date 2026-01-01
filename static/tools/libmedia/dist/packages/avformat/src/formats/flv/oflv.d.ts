import type { FlvTag } from './flv';
import type { FlvContext } from './type';
import { AVPacketFlags, AVCodecID, type AVStream, type AVRational } from '@libmedia/avutil';
import { type IOWriterSync } from '@libmedia/common/io';
export declare function updateSize(ioWriter: IOWriterSync, pos: int64, size: int32): void;
export declare function writeTag(ioWriter: IOWriterSync, type: FlvTag, timestamp: int64, dataHeader?: (ioWriter: IOWriterSync) => void, data?: Uint8Array | ((ioWriter: IOWriterSync) => void), previousTagSizeCallback?: (previousTagSize: int32) => void): void;
export declare function isEnhancedCodecId(codecId: AVCodecID): boolean;
export declare function writeVideoHeader(ioWriter: IOWriterSync, stream: AVStream, context: FlvContext, enhanced: boolean, type: uint8, flags: AVPacketFlags, timestamp: int64, timeBase: pointer<AVRational>, ct?: int32): void;
export declare function writeAudioHeader(ioWriter: IOWriterSync, stream: AVStream, context: FlvContext, enhanced: boolean, type: uint8, timestamp: int64, timeBase: pointer<AVRational>): void;
