import { type Uint8ArrayInterface, BufferReader } from '@libmedia/common/io';
import type { RTCPCommonHeader } from './RTCPPacket';
import { RTCPSendReport } from './RTCPPacket';
export declare function parseHeader(packet: RTCPCommonHeader, reader: BufferReader): void;
export declare function parseRTCPSendReport(data: Uint8ArrayInterface): RTCPSendReport;
