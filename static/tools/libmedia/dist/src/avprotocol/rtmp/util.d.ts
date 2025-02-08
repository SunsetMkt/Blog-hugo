import IOWriter from 'common/io/IOWriter';
import { RtmpPacket } from './RtmpPacket';
import IOReader from 'common/io/IOReader';
export declare function sendRtmpPacket(ioWriter: IOWriter, chunkSize: int32, packet: RtmpPacket, prevPacket: RtmpPacket): Promise<void>;
export declare function readRtmpPacket(ioReader: IOReader, chunkSize: int32, prevPacketMap: Map<int32, RtmpPacket>): Promise<RtmpPacket>;
