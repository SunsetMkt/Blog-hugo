import OFormat from './OFormat';
import type { AVOFormatContext } from '../AVFormatContext';
import { Mp4FragmentMode, Mp4Mode } from './isobmff/isobmff';
import { AVFormat, AVCodecID, type AVPacket, type AVStreamMetadataEncryption } from '@libmedia/avutil';
export { Mp4FragmentMode, Mp4Mode };
export interface OIsobmffFormatOptions {
    /**
     * fragment 按 gop 分段还是按帧分段
     */
    fragmentMode?: Mp4FragmentMode;
    /**
     * mp4 还是 mov
     */
    mp4Mode?: Mp4Mode;
    /**
     * fragment 模式
     */
    fragment?: boolean;
    /**
     * moov 放到文件开头
     */
    fastOpen?: boolean;
    /**
     * data offset 基于 moof box(mse 使用）
     */
    defaultBaseIsMoof?: boolean;
    /**
     * 忽略 editlist box 的约束
     */
    ignoreEditlist?: boolean;
    /**
     * drm 加密信息
     */
    encryption?: AVStreamMetadataEncryption;
    /**
     * 保留 avcc 码流中的 sps，用于封装 sps 中途更改的流
     */
    reverseSpsInAvcc?: boolean;
    /**
     * 忽略 drm 数据写入
     */
    ignoreEncryption?: boolean;
    /**
     * fragment 最短时长（只有音频时使用，默认 5 秒）
     */
    minFragmentLength?: number;
    /**
     * fragment index 最短时长（只有音频时使用，默认 5 秒）
     */
    minFragmentIndexLength?: number;
    /**
     * fragment 结束时是否追加 tfra 用于 seek
     */
    hasTfra?: boolean;
    /**
     * Use mdta atom for metadata
     */
    useMetadataTags?: boolean;
    /**
     * 新的 fragment 开始
     *
     * @returns
     */
    onFragmentStart?: () => void;
}
export default class OIsobmffFormat extends OFormat {
    type: AVFormat;
    private context;
    options: OIsobmffFormatOptions;
    private annexb2AvccFilter;
    private avpacket;
    constructor(options?: OIsobmffFormatOptions);
    init(formatContext: AVOFormatContext): number;
    destroy(formatContext: AVOFormatContext): Promise<void>;
    private enableStreams;
    writeHeader(formatContext: AVOFormatContext): number;
    private updateCurrentChunk;
    private updateCurrentFragment;
    private handleEAC3;
    private writeTrackData;
    writeAVPacket(formatContext: AVOFormatContext, avpacket: pointer<AVPacket>): number;
    writeTrailer(formatContext: AVOFormatContext): number;
    flush(formatContext: AVOFormatContext): number;
    getCapabilities(): AVCodecID[];
    static Capabilities: AVCodecID[];
}
