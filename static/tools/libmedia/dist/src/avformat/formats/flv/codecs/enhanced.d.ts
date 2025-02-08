import Stream from 'avutil/AVStream';
import { AVPacketFlags } from 'avutil/struct/avpacket';
import IOWriter from 'common/io/IOWriterSync';
import { AVCodecID } from 'avutil/codec';
export declare function writeCodecTagHeader(ioWriter: IOWriter, codecId: AVCodecID): void;
/**
 * 写 extradata 数据
 *
 * @param ioWriter
 * @param stream
 * @param data
 * @param metadata
 */
export declare function writeExtradata(ioWriter: IOWriter, stream: Stream, extradata: Uint8Array, flags: AVPacketFlags, timestamp: int64): number;
