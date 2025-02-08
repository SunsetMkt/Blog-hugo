import IOWriter from 'common/io/IOWriterSync';
import { PAT, PES, PMT, SectionPacket, TSPacket } from './struct';
import { MpegtsContext } from './type';
import * as mpegts from './mpegts';
import Stream from 'avutil/AVStream';
export declare function getStreamType(stream: Stream): mpegts.TSStreamType.VIDEO_MPEG2 | mpegts.TSStreamType.AUDIO_MPEG1 | mpegts.TSStreamType.AUDIO_MPEG2 | mpegts.TSStreamType.PRIVATE_DATA | mpegts.TSStreamType.AUDIO_AAC | mpegts.TSStreamType.AUDIO_AAC_LATM | mpegts.TSStreamType.VIDEO_MPEG4 | mpegts.TSStreamType.VIDEO_H264 | mpegts.TSStreamType.VIDEO_HEVC | mpegts.TSStreamType.VIDEO_VVC | mpegts.TSStreamType.VIDEO_CAVS | mpegts.TSStreamType.VIDEO_VC1 | mpegts.TSStreamType.VIDEO_DIRAC | mpegts.TSStreamType.AUDIO_AC3 | mpegts.TSStreamType.AUDIO_DTS | mpegts.TSStreamType.AUDIO_TRUEHD | mpegts.TSStreamType.AUDIO_EAC3;
export declare function getStreamId(stream: Stream): mpegts.TSStreamId.PRIVATE_STREAM_1 | mpegts.TSStreamId.AUDIO_STREAM_0 | mpegts.TSStreamId.VIDEO_STREAM_0 | mpegts.TSStreamId.METADATA_STREAM | mpegts.TSStreamId.EXTENDED_STREAM_ID;
export declare function getPATPayload(pat: PAT): Uint8Array<ArrayBuffer>;
export declare function getPMTPayload(pmt: PMT, streams: Stream[]): Uint8Array<ArrayBuffer>;
export declare function getSDTPayload(): Uint8Array<ArrayBuffer>;
export declare function writeTSPacket(ioWriter: IOWriter, tsPacket: TSPacket, mpegtsContext: MpegtsContext): void;
export declare function writePES(ioWriter: IOWriter, pes: PES, pesSlices: {
    total: number;
    buffers: Uint8Array[];
}, stream: Stream, mpegtsContext: MpegtsContext): void;
export declare function writeSection(ioWriter: IOWriter, packet: SectionPacket, mpegtsContext: MpegtsContext): void;
