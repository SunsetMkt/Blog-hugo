import { AVCodecID } from 'avutil/codec';
import { H264PayloadContext, HEVCPayloadContext, Mpeg4PayloadContext } from './rtp';
import { Data } from 'common/types/type';
import AVStream from 'avutil/AVStream';
export declare function parseH264Fmtp(stream: AVStream, config: string): Partial<H264PayloadContext>;
export declare function parseHevcFmtp(stream: AVStream, config: string): Partial<HEVCPayloadContext>;
export declare function parseMpeg4Fmtp(stream: AVStream, config: string): Partial<Mpeg4PayloadContext>;
export declare function parseAacLatmFmtp(stream: AVStream, config: string): Partial<Mpeg4PayloadContext>;
export declare const CodecIdFmtpHandler: Partial<Record<AVCodecID, (stream: AVStream, config: string) => Data>>;
