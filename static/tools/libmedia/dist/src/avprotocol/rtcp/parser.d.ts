import BufferReader from 'common/io/BufferReader';
import type { Uint8ArrayInterface } from 'common/io/interface';
import type { RTCPCommonHeader } from './RTCPPacket';
import { RTCPSendReport } from './RTCPPacket';
export declare function parseHeader(packet: RTCPCommonHeader, reader: BufferReader): void;
export declare function parseRTCPSendReport(data: Uint8ArrayInterface): RTCPSendReport;
