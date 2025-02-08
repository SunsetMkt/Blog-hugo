import { AVPixelFormat } from './pixfmt';
export declare const enum PixelFormatFlags {
    /**
     * Pixel format is big-endian.
     */
    BIG_ENDIAN = 1,
    /**
     * Pixel format has a palette in data[1], values are indexes in this palette.
     */
    PALETTE = 2,
    /**
     * All values of a component are bit-wise packed end to end.
     */
    BIT_STREAM = 4,
    /**
     * At least one pixel component is not in the first data plane.
     */
    PLANER = 16,
    /**
     * The pixel format contains RGB-like data (as opposed to YUV/grayscale).
     */
    RGB = 32,
    /**
     * The pixel format has an alpha channel. This is set on all formats that
     * support alpha in some way, including AV_PIX_FMT_PAL8. The alpha is always
     * straight, never pre-multiplied.
     *
     * If a codec or a filter does not support alpha, it should set all alpha to
     * opaque, or use the equivalent pixel formats without alpha component, e.g.
     * AV_PIX_FMT_RGB0 (or AV_PIX_FMT_RGB24 etc.) instead of AV_PIX_FMT_RGBA.
     */
    ALPHA = 128,
    /**
     * The pixel format is following a Bayer pattern
     */
    BAYER = 256,
    /**
     * The pixel format contains IEEE-754 floating point values. Precision (double,
     * single, or half) should be determined by the pixel size (64, 32, or 16 bits).
     */
    FLOAT = 512
}
export type PixelFormatDescriptor = {
    nbComponents: number;
    /**
     * Amount to shift the luma width right to find the chroma width.
     * For YV12 this is 1 for example.
     * chroma_width = AV_CEIL_RSHIFT(luma_width, log2_chroma_w)
     * The note above is needed to ensure rounding up.
     * This value only refers to the chroma components.
     */
    log2ChromaW: number;
    /**
     * Amount to shift the luma height right to find the chroma height.
     * For YV12 this is 1 for example.
     * chroma_height= AV_CEIL_RSHIFT(luma_height, log2_chroma_h)
     * The note above is needed to ensure rounding up.
     * This value only refers to the chroma components.
     */
    log2ChromaH: number;
    /**
     * Combination of AV_PIX_FMT_FLAG_... flags.
     */
    flags: number;
    /**
     * Parameters that describe how pixels are packed.
     * If the format has 1 or 2 components, then luma is 0.
     * If the format has 3 or 4 components:
     *   if the RGB flag is set then 0 is red, 1 is green and 2 is blue;
     *   otherwise 0 is luma, 1 is chroma-U and 2 is chroma-V.
     *
     * If present, the Alpha channel is always the last component.
     */
    comp: {
        /**
         * Which of the 4 planes contains the component.
         */
        plane: number;
        /**
         * Number of elements between 2 horizontally consecutive pixels.
         * Elements are bits for bitstream formats, bytes otherwise.
         */
        step: number;
        /**
         * Number of elements before the component of the first pixel.
         * Elements are bits for bitstream formats, bytes otherwise.
         */
        offset: number;
        /**
         * Number of least significant bits that must be shifted away
         * to get the value.
         */
        shift: number;
        /**
         * Number of bits in the component.
         */
        depth: number;
    }[];
};
export declare const PixelFormatDescriptorsMap: Partial<Record<AVPixelFormat, PixelFormatDescriptor>>;
