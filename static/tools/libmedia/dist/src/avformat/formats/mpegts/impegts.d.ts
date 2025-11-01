import type { MpegtsContext } from './type';
import { TSPacket } from './struct';
import type IOReader from 'common/io/IOReader';
export declare function getPacketSize(ioReader: IOReader): Promise<number>;
export declare function parseTSPacket(ioReader: IOReader, mpegtsContext: MpegtsContext): Promise<TSPacket>;
