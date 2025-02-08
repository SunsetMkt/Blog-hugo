import { Rational } from './rational';
export declare const enum AVSubtitleType {
    SUBTITLE_NONE = 0,
    /**
     * Plain text, the text field must be set by the decoder and is
     * authoritative. ass and pict fields may contain approximations.
     */
    SUBTITLE_TEXT = 1,
    /**
     * Formatted webvtt, the ass field must be set by the decoder and is
     * authoritative. pict and text fields may contain approximations.
     */
    SUBTITLE_WEBVTT = 2,
    /**
     * Formatted text, the ass field must be set by the decoder and is
     * authoritative. pict and text fields may contain approximations.
     */
    SUBTITLE_ASS = 3
}
export interface AVSubtitleRect {
    flags: int32;
    type: AVSubtitleType;
    text: string;
}
export interface AVSubtitle {
    pts: int64;
    duration: int64;
    timeBase: Rational;
    rects: AVSubtitleRect[];
}
