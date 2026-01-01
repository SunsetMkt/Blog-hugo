import { AVPacketSideDataType } from '../codec';
import type AVCodecParameters from '../struct/avcodecparameters';
import type AVPacket from '../struct/avpacket';
import { type Uint8ArrayInterface } from '@libmedia/common/io';
export declare const enum VP9Profile {
    Profile0 = 0,
    Profile1 = 1,
    Profile2 = 2,
    Profile3 = 3
}
export declare const VP9Profile2Name: Record<VP9Profile, string>;
export declare const LevelCapabilities: {
    level: number;
    maxResolution: number;
    maxFrameRate: number;
}[];
export declare function getLevelByResolution(width: number, height: number, fps: number): number;
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
export declare function generateExtradata(codecpar: pointer<AVCodecParameters>): Uint8Array<ArrayBufferLike>;
/**
 * 判断是否是随机访问点
 *
 * @param avpacket
 * @returns
 */
export declare function isRAP(avpacket: pointer<AVPacket>): boolean;
