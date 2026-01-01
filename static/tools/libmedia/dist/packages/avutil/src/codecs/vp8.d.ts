import type AVCodecParameters from '../struct/avcodecparameters';
import { AVPacketSideDataType } from '../codec';
import type AVPacket from '../struct/avpacket';
import { type Uint8ArrayInterface } from '@libmedia/common/io';
export declare function parseAVCodecParameters(stream: {
    codecpar: AVCodecParameters;
    sideData: Partial<Record<AVPacketSideDataType, Uint8Array>>;
}, extradata?: Uint8ArrayInterface): void;
/**
 * - 1 byte profile
 * - 1 byte level
 * - 4 bit bitdepth
 * - 3 bit chroma_subsampling
 * - 1 bit full_range_flag
 * - 1 byte color_primaries
 * - 1 byte color_trc
 * - 1 byte color_space
 *
 * @param extradata
 */
export declare function parseExtraData(extradata: Uint8ArrayInterface): {
    profile: number;
    level: number;
    bitDepth: number;
    chromaSubsampling: number;
    fullRangeFlag: number;
    colorPrimaries: number;
    colorTrc: number;
    colorSpace: number;
};
/**
 * 判断是否是随机访问点
 *
 * @param avpacket
 * @returns
 */
export declare function isRAP(avpacket: pointer<AVPacket>): boolean;
