import { Data } from 'common/types/type';
import AVCodecParameters from './struct/avcodecparameters';
import { AVPacketSideDataType } from './codec';
import { Rational } from './struct/rational';
export declare const enum AVDisposition {
    NONE = 0,
    DEFAULT = 1,
    DUB = 2,
    ORIGINAL = 4,
    COMMENT = 8,
    LYRICS = 16,
    KARAOKE = 32,
    /**
     * Track should be used during playback by default.
     * Useful for subtitle track that should be displayed
     * even when user did not explicitly ask for subtitles.
     */
    FORCED = 64,
    /**
     * stream for hearing impaired audiences
     */
    HEARING_IMPAIRED = 128,
    /**
     * stream for visual impaired audiences
     */
    VISUAL_IMPAIRED = 256,
    /**
     * stream without voice
     */
    CLEAN_EFFECTS = 512,
    /**
     * The stream is stored in the file as an attached picture/"cover art" (e.g.
     * APIC frame in ID3v2). The first (usually only) packet associated with it
     * will be returned among the first few packets read from the file unless
     * seeking takes place. It can also be accessed at any time in
     * AVStream.attached_pic.
     */
    ATTACHED_PIC = 1024,
    /**
     * The stream is sparse, and contains thumbnail images, often corresponding
     * to chapter markers. Only ever used with AV_DISPOSITION_ATTACHED_PIC.
     */
    TIMED_THUMBNAILS = 2048,
    /**
     * To specify text track kind (different from subtitles default).
     */
    CAPTIONS = 65536,
    DESCRIPTIONS = 131072,
    METADATA = 262144,
    /**
     * dependent audio stream (mix_type=0 in mpegts)
     */
    DEPENDENT = 524288,
    /**
     * still images in video stream (still_picture_flag=1 in mpegts
     */
    STILL_IMAGE = 1048576
}
/**
 * from FFmpeg
 *
 */
export default class AVStream {
    /**
     * stream index in AVFormatContext
     */
    index: int32;
    /**
     * Format-specific stream ID.
     * decoding: set by libavformat
     * encoding: set by the user, replaced by libavformat if left unset
     */
    id: int32;
    /**
     * format private data
     */
    privData: Data;
    /**
     * demuxer or muxer's private data
     */
    privateData2: Data;
    codecpar: AVCodecParameters;
    /**
     * An array of side data that applies to the whole stream (i.e. the
     * container does not allow it to change between packets).
     *
     * There may be no overlap between the side data in this array and side data
     * in the packets. I.e. a given side data is either exported by the muxer
     * (demuxing) / set by the caller (muxing) in this array, then it never
     * appears in the packets, or the side data is exported / sent through
     * the packets (always in the first packet where the value becomes known or
     * changes), then it does not appear in this array.
     *
     * - demuxing: Set by libavformat when the stream is created.
     * - muxing: May be set by the caller before write_header().
     *
     */
    sideData: Partial<Record<AVPacketSideDataType, Uint8Array>>;
    /**
     * number of frames in this stream if known or 0
     */
    nbFrames: int64;
    metadata: Data;
    /**
     * Decoding: duration of the stream, in stream time base.
     * If a source file does not specify a duration, but does specify
     * a bitrate, this value will be estimated from bitrate and file size.
     *
     * Encoding: May be set by the caller before avformat_write_header() to
     * provide a hint to the muxer about the estimated duration.
     */
    duration: int64;
    /**
     * Decoding: pts of the first frame of the stream in presentation order, in stream time base.
     * Only set this if you are absolutely 100% sure that the value you set
     * it to really is the pts of the first frame.
     * This may be undefined (AV_NOPTS_VALUE).
     * @note The ASF header does NOT contain a correct start_time the ASF
     * demuxer must NOT set this.
     */
    startTime: int64;
    /**
     * 第一个 packet 的 dts
     */
    firstDTS: int64;
    /**
     * AV_DISPOSITION_* bit field
     */
    disposition: AVDisposition;
    /**
     *
     * 封装时间基
     *
     * decoding: set by libavformat
     * encoding: May be set by the caller before avformat_write_header() to
     *           provide a hint to the muxer about the desired timebase. In
     *           avformat_write_header(), the muxer will overwrite this field
     *           with the timebase that will actually be used for the timestamps
     *           written into the file (which may or may not be related to the
     *           user-provided one, depending on the format).
     */
    timeBase: Rational;
    /**
     * 帧索引，可用于 seek
     */
    sampleIndexes: {
        dts: int64;
        pts: int64;
        pos: int64;
        size: int32;
        duration: int64;
        flags: int32;
    }[];
    /**
     * pos 到 sample index 的映射
     */
    sampleIndexesPosMap: Map<int64, int32>;
    destroy(): void;
}
export interface AVStreamInterface {
    index: number;
    id: number;
    codecpar: pointer<AVCodecParameters>;
    nbFrames: int64;
    metadata: Data;
    duration: int64;
    startTime: int64;
    disposition: int32;
    timeBase: Rational;
}
