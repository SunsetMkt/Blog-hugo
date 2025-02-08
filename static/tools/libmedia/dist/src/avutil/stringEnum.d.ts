import { AVFormat, IOType } from './avformat';
import { AVCodecID, AVMediaType } from './codec';
import { AVColorPrimaries, AVColorRange, AVColorSpace, AVColorTransferCharacteristic, AVPixelFormat } from './pixfmt';
import { AVSampleFormat } from './audiosamplefmt';
import { AVDisposition } from './AVStream';
export declare const enum AVStreamMetadataKey {
    /**
     * 表演者（歌手、乐队等）
     */
    ARTIST = "artist",
    /**
     * 自由文本评论
     */
    COMMENT = "comment",
    /**
     * 版权声明
     */
    COPYRIGHT = "copyright",
    /**
     * 发行年份（通常为 YYYY 格式）
     */
    DATE = "date",
    /**
     * 音乐流派
     */
    GENRE = "genre",
    /**
     * 语言
     */
    LANGUAGE = "language",
    /**
     * 语言描述
     */
    LANGUAGE_STRING = "languageString",
    /**
     * 歌曲或作品的标题
     */
    TITLE = "title",
    /**
     * 专辑名称
     */
    ALBUM = "album",
    /**
     * 曲目编号
     */
    TRACK = "track",
    /**
     * 用于编码音频文件的软件信息
     */
    ENCODER = "encoder",
    /**
     * 时间参数
     */
    TIME_CODE = "timecode",
    /**
     * 发行商
     */
    VENDOR = "vendor",
    /**
     * 发行商标识
     */
    VENDOR_ID = "vendorId",
    /**
     * 海报
     */
    POSTER = "poster",
    /**
     * 歌词
     */
    LYRICS = "lyrics",
    /**
     * 专辑的主要艺术家（与 ARTIST 区分开，适用于合集专辑）
     */
    ALBUM_ARTIST = "albumArtist",
    /**
     * 如果是多张 CD 的专辑，标识当前曲目所在的 CD
     */
    DISC = "disc",
    /**
     * 具体的演奏者或表演者
     */
    PERFORMER = "performer",
    /**
     * 发行者
     */
    PUBLISHER = "publisher",
    /**
     * 作曲者
     */
    COMPOSER = "composer",
    /**
     * 编曲者
     */
    COMPILATION = "compilation",
    /**
     * 创建时间
     */
    CREATION_TIME = "creationTime",
    /**
     * 最后更改时间
     */
    MODIFICATION_TIME = "modificationTime",
    /**
     * 专辑排序
     */
    ALBUM_SORT = "albumSort",
    /**
     * 表演者排序
     */
    ARTIST_SORT = "artistSort",
    /**
     * 标题排序
     */
    TITLE_SORT = "titleSort",
    /**
     * 分组
     */
    GROUPING = "grouping",
    /**
     * 额外的描述信息
     */
    DESCRIPTION = "description",
    /**
     * 许可信息
     */
    LICENSE = "license",
    /**
     * 国际标准录音代码
     */
    ISRC = "isrc",
    /**
     * 情绪标签，如 Happy、Sad
     */
    MOOD = "mood",
    /**
     * mp4 的 elst box 内容
     */
    ELST = "elst",
    /**
     * mp4 的旋转矩阵
     */
    MATRIX = "matrix",
    /**
     * 某些媒体的样式（如 webvtt）
     */
    STYLES = "styles",
    /**
     * 媒体的 mime
     */
    MIME = "mime",
    /**
     * mp4 的 handlerName
     */
    HANDLER_NAME = "handlerName"
}
export declare const CodecId2MimeType: {
    86017: string;
    86018: string;
    86021: string;
    86028: string;
    86076: string;
    65542: string;
    65543: string;
    225: string;
    27: string;
    173: string;
    196: string;
    139: string;
    167: string;
    12: string;
};
export declare const Ext2Format: Record<string, AVFormat>;
export declare const Ext2IOLoader: Record<string, IOType>;
export declare const VideoCodecString2CodecId: {
    copy: AVCodecID;
    h264: AVCodecID;
    avc: AVCodecID;
    hevc: AVCodecID;
    h265: AVCodecID;
    vvc: AVCodecID;
    h266: AVCodecID;
    av1: AVCodecID;
    vp9: AVCodecID;
    vp8: AVCodecID;
    mpeg4: AVCodecID;
    theora: AVCodecID;
    mpeg2video: AVCodecID;
};
export declare const AudioCodecString2CodecId: {
    copy: AVCodecID;
    aac: AVCodecID;
    ac3: AVCodecID;
    eac3: AVCodecID;
    dca: AVCodecID;
    mp3: AVCodecID;
    opus: AVCodecID;
    flac: AVCodecID;
    speex: AVCodecID;
    vorbis: AVCodecID;
    pcm_alaw: AVCodecID;
    pcm_mulaw: AVCodecID;
};
export declare const SubtitleCodecString2CodecId: {
    webvtt: AVCodecID;
    subrip: AVCodecID;
    ass: AVCodecID;
    ttml: AVCodecID;
    mov_text: AVCodecID;
    hdmv_pgs: AVCodecID;
    hdmv_text: AVCodecID;
    dvd: AVCodecID;
    dvb: AVCodecID;
    eia_608: AVCodecID;
};
export declare const PixfmtString2AVPixelFormat: {
    yuv420p: AVPixelFormat;
    yuv422p: AVPixelFormat;
    yuv444p: AVPixelFormat;
    yuva420p: AVPixelFormat;
    yuva422p: AVPixelFormat;
    yuva444p: AVPixelFormat;
    yuv420p10le: AVPixelFormat;
    yuv422p10le: AVPixelFormat;
    yuv444p10le: AVPixelFormat;
    yuva420p10le: AVPixelFormat;
    yuva422p10le: AVPixelFormat;
    yuva444p10le: AVPixelFormat;
    yuv420p10be: AVPixelFormat;
    yuv422p10be: AVPixelFormat;
    yuv444p10be: AVPixelFormat;
    yuva420p10be: AVPixelFormat;
    yuva422p10be: AVPixelFormat;
    yuva444p10be: AVPixelFormat;
};
export declare const SampleFmtString2SampleFormat: {
    u8: AVSampleFormat;
    'u8-planar': AVSampleFormat;
    s16: AVSampleFormat;
    's16-planar': AVSampleFormat;
    s32: AVSampleFormat;
    's32-planar': AVSampleFormat;
    s64: AVSampleFormat;
    's64-planar': AVSampleFormat;
    float: AVSampleFormat;
    'float-planar': AVSampleFormat;
    double: AVSampleFormat;
    'double-planar': AVSampleFormat;
};
export declare const Format2AVFormat: Record<string, AVFormat>;
export declare const colorRange2AVColorRange: Record<string, AVColorRange>;
export declare const colorSpace2AVColorSpace: Record<string, AVColorSpace>;
export declare const colorPrimaries2AVColorPrimaries: Record<string, AVColorPrimaries>;
export declare const colorTrc2AVColorTransferCharacteristic: Record<string, AVColorTransferCharacteristic>;
export declare const mediaType2AVMediaType: Record<string, AVMediaType>;
export declare const disposition2AVDisposition: Record<string, AVDisposition>;
