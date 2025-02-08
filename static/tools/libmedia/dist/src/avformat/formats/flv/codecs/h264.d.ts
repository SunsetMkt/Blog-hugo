import Stream from 'avutil/AVStream';
import { AVPacketFlags } from 'avutil/struct/avpacket';
import { AVCPacketType } from '../flv';
import IOWriter from 'common/io/IOWriterSync';
export declare function writeDataHeader(ioWriter: IOWriter, type: AVCPacketType, ct: number): void;
/**
 * 写 extradata 数据
 *
 * @param ioWriter
 * @param stream
 * @param data
 * @param metadata
 */
export declare function writeExtradata(ioWriter: IOWriter, stream: Stream, extradata: Uint8Array, flags: AVPacketFlags, timestamp: int64): number;
