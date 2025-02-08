import Stream from 'avutil/AVStream';
import { AVPacketFlags } from 'avutil/struct/avpacket';
import IOWriter from 'common/io/IOWriterSync';
import { FlvTag, PacketTypeExt } from './flv';
export declare function writeTagHeader(ioWriter: IOWriter, type: FlvTag, size: number, timestamp: bigint): void;
/**
 *
 *   0  1  2  3    4    5      6         7
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |SoundFormat|SoundRate|SoundSize| SoundType| SoundData
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *
 * @param ioWriter
 * @param stream
 */
export declare function writeAudioTagDataHeader(ioWriter: IOWriter, stream: Stream): void;
/**
 *
 *   0 1  2  3  4 5 6 7
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
 *  |FrameType|CodecID| VideoData
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * @param ioWriter
 * @param stream
 */
export declare function writeVideoTagDataHeader(ioWriter: IOWriter, stream: Stream, flags: AVPacketFlags): void;
export declare function writeVideoTagExtDataHeader(ioWriter: IOWriter, stream: Stream, type: PacketTypeExt, flags: AVPacketFlags): void;
