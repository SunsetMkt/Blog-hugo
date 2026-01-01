import { type IOReader } from '@libmedia/common/io';
import type { MpegtsContext } from './type';
import { TSPacket } from './struct';
export declare function getPacketSize(ioReader: IOReader): Promise<number>;
export declare function parseTSPacket(ioReader: IOReader, mpegtsContext: MpegtsContext): Promise<TSPacket>;
