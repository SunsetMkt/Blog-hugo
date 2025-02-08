import AVStream from '../AVStream';
import AVPacket from '../struct/avpacket';
import { Uint8ArrayInterface } from 'common/io/interface';
export declare function parseAVCodecParameters(stream: AVStream, extradata?: Uint8ArrayInterface): void;
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
export declare function isIDR(avpacket: pointer<AVPacket>): boolean;
