import Stream from 'avutil/AVStream';
import { AVIFormatContext } from '../AVFormatContext';
import AVPacket from 'avutil/struct/avpacket';
import { AVFormat } from 'avutil/avformat';
export default abstract class IFormat {
    type: AVFormat;
    onStreamAdd: (stream: Stream) => void;
    abstract init(formatContext: AVIFormatContext): void;
    destroy(formatContext: AVIFormatContext): Promise<void>;
    abstract getAnalyzeStreamsCount(): number;
    abstract readHeader(formatContext: AVIFormatContext): Promise<number>;
    abstract readAVPacket(formatContext: AVIFormatContext, avpacket: pointer<AVPacket>): Promise<number>;
    /**
     * seek
     *
     * @param context
     * @param stream
     * @param timestamp 毫秒时间戳
     * @param flags
     *
     * @returns 返回 seek 之前的下一个 avpacket pos（若不知道返回 0n 方便之后可以再 seek 回来）返回负数表示 seek 失败
     */
    abstract seek(formatContext: AVIFormatContext, stream: Stream, timestamp: int64, flags: int32): Promise<int64>;
}
