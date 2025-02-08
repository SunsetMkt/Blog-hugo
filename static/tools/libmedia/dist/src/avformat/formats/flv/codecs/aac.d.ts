import Stream from 'avutil/AVStream';
import IOWriter from 'common/io/IOWriterSync';
export declare const enum AACPacketType {
    AAC_SEQUENCE_HEADER = 0,
    AAC_RAW = 1
}
export declare function writeDataHeader(ioWriter: IOWriter, type: AACPacketType): void;
export declare function writeExtradata(ioWriter: IOWriter, stream: Stream, metadata: Uint8Array, timestamp: int64): number;
