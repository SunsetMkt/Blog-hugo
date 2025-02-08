import AVPacket from 'avutil/struct/avpacket';
import { AVIFormatContext } from './AVFormatContext';
export interface DemuxOptions {
    /**
     * 只分析流的必要参数（设置 true 将不会分析视频帧率和音频每帧采用点数等参数）
     */
    fastOpen?: boolean;
    /**
     * 最大流分析时长（毫秒）
     */
    maxAnalyzeDuration?: number;
}
export declare const DefaultDemuxOptions: {
    fastOpen: boolean;
    maxAnalyzeDuration: number;
};
/**
 * 打开流
 *
 * @param formatContext
 * @param options DemuxOptions 选项
 * @returns 成功返回 0，否则返回错误码
 */
export declare function open(formatContext: AVIFormatContext, options?: DemuxOptions): Promise<int32>;
/**
 * 分析流 stream
 *
 * @param formatContext
 * @returns 成功返回 0，否则返回错误码
 */
export declare function analyzeStreams(formatContext: AVIFormatContext): Promise<int32>;
/**
 * 读取一个包
 *
 * @param formatContext AVIFormatContext 上下文
 * @param avpacket
 * @returns 成功返回 0，否则返回错误码
 */
export declare function readAVPacket(formatContext: AVIFormatContext, avpacket: pointer<AVPacket>): Promise<int32>;
/**
 *
 * seek 到指定位置
 *
 * @param formatContext AVIFormatContext 上下文
 * @param streamIndex 指定流 index
 * @param timestamp seek 的位置或时间戳（毫秒）
 * @param flags AVSeekFlags 标志
 * @returns 错误返回负数，否则返回 seek 之前的 pos，方便 seek 回来
 */
export declare function seek(formatContext: AVIFormatContext, streamIndex: number, timestamp: int64, flags: int32): Promise<int64>;
