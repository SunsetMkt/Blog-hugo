export declare const enum AVPixelFormat {
    AV_PIX_FMT_NONE = -1,
    /**
     * planar YUV 4:2:0, 12bpp, (1 Cr & Cb sample per 2x2 Y samples)
     */
    AV_PIX_FMT_YUV420P = 0,
    /**
     * packed YUV 4:2:2, 16bpp, Y0 Cb Y1 Cr
     */
    AV_PIX_FMT_YUYV422 = 1,
    /**
     * packed RGB 8:8:8, 24bpp, RGBRGB...
     */
    AV_PIX_FMT_RGB24 = 2,
    /**
     * packed RGB 8:8:8, 24bpp, BGRBGR...
     */
    AV_PIX_FMT_BGR24 = 3,
    /**
     * planar YUV 4:2:2, 16bpp, (1 Cr & Cb sample per 2x1 Y samples)
     */
    AV_PIX_FMT_YUV422P = 4,
    /**
     * planar YUV 4:4:4, 24bpp, (1 Cr & Cb sample per 1x1 Y samples)
     */
    AV_PIX_FMT_YUV444P = 5,
    /**
     * planar YUV 4:1:0,  9bpp, (1 Cr & Cb sample per 4x4 Y samples)
     */
    AV_PIX_FMT_YUV410P = 6,
    /**
     * planar YUV 4:1:1, 12bpp, (1 Cr & Cb sample per 4x1 Y samples)
     */
    AV_PIX_FMT_YUV411P = 7,
    /**
     * Y 8bpp
     */
    AV_PIX_FMT_GRAY8 = 8,
    /**
     * Y 1bpp, 0 is white, 1 is black, in each byte pixels are ordered from the msb to the lsb
     */
    AV_PIX_FMT_MONOWHITE = 9,
    /**
     *  Y ,  1bpp, 0 is black, 1 is white, in each byte pixels are ordered from the msb to the lsb
     */
    AV_PIX_FMT_MONOBLACK = 10,
    /**
     * 8 bits with AV_PIX_FMT_RGB32 palette
     */
    AV_PIX_FMT_PAL8 = 11,
    /**
     * planar YUV 4:2:0, 12bpp, full scale (JPEG), deprecated in favor of AV_PIX_FMT_YUV420P and setting color_range
     */
    AV_PIX_FMT_YUVJ420P = 12,
    /**
     * planar YUV 4:2:2, 16bpp, full scale (JPEG), deprecated in favor of AV_PIX_FMT_YUV422P and setting color_range
     */
    AV_PIX_FMT_YUVJ422P = 13,
    /**
     * planar YUV 4:4:4, 24bpp, full scale (JPEG), deprecated in favor of AV_PIX_FMT_YUV444P and setting color_range
     */
    AV_PIX_FMT_YUVJ444P = 14,
    /**
     * packed YUV 4:2:2, 16bpp, Cb Y0 Cr Y1
     */
    AV_PIX_FMT_UYVY422 = 15,
    /**
     * packed YUV 4:1:1, 12bpp, Cb Y0 Y1 Cr Y2 Y3
     */
    AV_PIX_FMT_UYYVYY411 = 16,
    /**
     * packed RGB 3:3:2,  8bpp, (msb)2B 3G 3R(lsb)
     */
    AV_PIX_FMT_BGR8 = 17,
    /**
     * packed RGB 1:2:1 bitstream,  4bpp, (msb)1B 2G 1R(lsb), a byte contains two pixels, the first pixel in the byte is the one composed by the 4 msb bits
     */
    AV_PIX_FMT_BGR4 = 18,
    /**
     * packed RGB 1:2:1,  8bpp, (msb)1B 2G 1R(lsb)
     */
    AV_PIX_FMT_BGR4_BYTE = 19,
    /**
     *
     */
    AV_PIX_FMT_RGB8 = 20,
    /**
     * packed RGB 1:2:1 bitstream,  4bpp, (msb)1R 2G 1B(lsb), a byte contains two pixels, the first pixel in the byte is the one composed by the 4 msb bits
     */
    AV_PIX_FMT_RGB4 = 21,
    /**
     * packed RGB 1:2:1,  8bpp, (msb)1R 2G 1B(lsb)
     */
    AV_PIX_FMT_RGB4_BYTE = 22,
    /**
     * planar YUV 4:2:0, 12bpp, 1 plane for Y and 1 plane for the UV components, which are interleaved (first byte U and the following byte V)
     */
    AV_PIX_FMT_NV12 = 23,
    /**
     * as above, but U and V bytes are swapped
     */
    AV_PIX_FMT_NV21 = 24,
    /**
     * packed ARGB 8:8:8:8, 32bpp, ARGBARGB...
     */
    AV_PIX_FMT_ARGB = 25,
    /**
     * packed RGBA 8:8:8:8, 32bpp, RGBARGBA...
     */
    AV_PIX_FMT_RGBA = 26,
    /**
     * packed ABGR 8:8:8:8, 32bpp, ABGRABGR...
     */
    AV_PIX_FMT_ABGR = 27,
    /**
     * packed BGRA 8:8:8:8, 32bpp, BGRABGRA...
     */
    AV_PIX_FMT_BGRA = 28,
    /**
     *  Y , 16bpp, big-endian
     */
    AV_PIX_FMT_GRAY16BE = 29,
    /**
     * Y , 16bpp, little-endian
     */
    AV_PIX_FMT_GRAY16LE = 30,
    /**
     * planar YUV 4:4:0 (1 Cr & Cb sample per 1x2 Y samples)
     */
    AV_PIX_FMT_YUV440P = 31,
    /**
     * planar YUV 4:4:0 full scale (JPEG), deprecated in favor of AV_PIX_FMT_YUV440P and setting color_range
     */
    AV_PIX_FMT_YUVJ440P = 32,
    /**
     * planar YUV 4:2:0, 20bpp, (1 Cr & Cb sample per 2x2 Y & A samples)
     */
    AV_PIX_FMT_YUVA420P = 33,
    /**
     * packed RGB 16:16:16, 48bpp, 16R, 16G, 16B, the 2-byte value for each R/G/B component is stored as big-endian
     */
    AV_PIX_FMT_RGB48BE = 34,
    /**
     * packed RGB 16:16:16, 48bpp, 16R, 16G, 16B, the 2-byte value for each R/G/B component is stored as little-endian
     */
    AV_PIX_FMT_RGB48LE = 35,
    /**
     * packed RGB 5:6:5, 16bpp, (msb)   5R 6G 5B(lsb), big-endian
     */
    AV_PIX_FMT_RGB565BE = 36,
    /**
     * packed RGB 5:6:5, 16bpp, (msb)   5R 6G 5B(lsb), little-endian
     */
    AV_PIX_FMT_RGB565LE = 37,
    /**
     * packed RGB 5:5:5, 16bpp, (msb)1X 5R 5G 5B(lsb), big-endian   , X=unused/undefined
     */
    AV_PIX_FMT_RGB555BE = 38,
    /**
     * packed RGB 5:5:5, 16bpp, (msb)1X 5R 5G 5B(lsb), little-endian, X=unused/undefined
     */
    AV_PIX_FMT_RGB555LE = 39,
    /**
     * packed BGR 5:6:5, 16bpp, (msb)   5B 6G 5R(lsb), big-endian
     */
    AV_PIX_FMT_BGR565BE = 40,
    /**
     * packed BGR 5:6:5, 16bpp, (msb)   5B 6G 5R(lsb), little-endian
     */
    AV_PIX_FMT_BGR565LE = 41,
    /**
     * packed BGR 5:5:5, 16bpp, (msb)1X 5B 5G 5R(lsb), big-endian   , X=unused/undefined
     */
    AV_PIX_FMT_BGR555BE = 42,
    /**
     * packed BGR 5:5:5, 16bpp, (msb)1X 5B 5G 5R(lsb), little-endian, X=unused/undefined
     */
    AV_PIX_FMT_BGR555LE = 43,
    /**
     *  Hardware acceleration through VA-API, data[3] contains a
     *  VASurfaceID.
     */
    AV_PIX_FMT_VAAPI = 44,
    /**
     * planar YUV 4:2:0, 24bpp, (1 Cr & Cb sample per 2x2 Y samples), little-endian
     */
    AV_PIX_FMT_YUV420P16LE = 45,
    /**
     * planar YUV 4:2:0, 24bpp, (1 Cr & Cb sample per 2x2 Y samples), big-endian
     */
    AV_PIX_FMT_YUV420P16BE = 46,
    /**
     * planar YUV 4:2:2, 32bpp, (1 Cr & Cb sample per 2x1 Y samples), little-endian
     */
    AV_PIX_FMT_YUV422P16LE = 47,
    /**
     *  planar YUV 4:2:2, 32bpp, (1 Cr & Cb sample per 2x1 Y samples), big-endian
     */
    AV_PIX_FMT_YUV422P16BE = 48,
    /**
     * planar YUV 4:4:4, 48bpp, (1 Cr & Cb sample per 1x1 Y samples), little-endian
     */
    AV_PIX_FMT_YUV444P16LE = 49,
    /**
     * planar YUV 4:4:4, 48bpp, (1 Cr & Cb sample per 1x1 Y samples), big-endian
     */
    AV_PIX_FMT_YUV444P16BE = 50,
    /**
     * HW decoding through DXVA2, Picture.data[3] contains a LPDIRECT3DSURFACE9 pointer
     */
    AV_PIX_FMT_DXVA2_VLD = 51,
    /**
     * packed RGB 4:4:4, 16bpp, (msb)4X 4R 4G 4B(lsb), little-endian, X=unused/undefined
     */
    AV_PIX_FMT_RGB444LE = 52,
    /**
     * packed RGB 4:4:4, 16bpp, (msb)4X 4R 4G 4B(lsb), big-endian,    X=unused/undefined
     */
    AV_PIX_FMT_RGB444BE = 53,
    /**
     * packed BGR 4:4:4, 16bpp, (msb)4X 4B 4G 4R(lsb), little-endian, X=unused/undefined
     */
    AV_PIX_FMT_BGR444LE = 54,
    /**
     * packed BGR 4:4:4, 16bpp, (msb)4X 4B 4G 4R(lsb), big-endian,    X=unused/undefined
     */
    AV_PIX_FMT_BGR444BE = 55,
    /**
     * 8 bits gray, 8 bits alpha
     */
    AV_PIX_FMT_YA8 = 56,
    /**
     * alias for AV_PIX_FMT_YA8
     */
    AV_PIX_FMT_Y400A = 56,
    /**
     * alias for AV_PIX_FMT_YA8
     */
    AV_PIX_FMT_GRAY8A = 56,
    /**
     * packed RGB 16:16:16, 48bpp, 16B, 16G, 16R, the 2-byte value for each R/G/B component is stored as big-endian
     */
    AV_PIX_FMT_BGR48BE = 57,
    /**
     * packed RGB 16:16:16, 48bpp, 16B, 16G, 16R, the 2-byte value for each R/G/B component is stored as little-endian
     */
    AV_PIX_FMT_BGR48LE = 58,
    /**
     * The following 12 formats have the disadvantage of needing 1 format for each bit depth.
     * Notice that each 9/10 bits sample is stored in 16 bits with extra padding.
     * If you want to support multiple bit depths, then using AV_PIX_FMT_YUV420P16* with the bpp stored separately is better.
     */
    /**
     * planar YUV 4:2:0, 13.5bpp, (1 Cr & Cb sample per 2x2 Y samples), big-endian
     */
    AV_PIX_FMT_YUV420P9BE = 59,
    /**
     * planar YUV 4:2:0, 13.5bpp, (1 Cr & Cb sample per 2x2 Y samples), little-endian
     */
    AV_PIX_FMT_YUV420P9LE = 60,
    /**
     * planar YUV 4:2:0, 15bpp, (1 Cr & Cb sample per 2x2 Y samples), big-endian
     */
    AV_PIX_FMT_YUV420P10BE = 61,
    /**
     * planar YUV 4:2:0, 15bpp, (1 Cr & Cb sample per 2x2 Y samples), little-endian
     */
    AV_PIX_FMT_YUV420P10LE = 62,
    /**
     * planar YUV 4:2:2, 20bpp, (1 Cr & Cb sample per 2x1 Y samples), big-endian
     */
    AV_PIX_FMT_YUV422P10BE = 63,
    /**
     * planar YUV 4:2:2, 20bpp, (1 Cr & Cb sample per 2x1 Y samples), little-endian
     */
    AV_PIX_FMT_YUV422P10LE = 64,
    /**
     *  planar YUV 4:4:4, 27bpp, (1 Cr & Cb sample per 1x1 Y samples), big-endian
     */
    AV_PIX_FMT_YUV444P9BE = 65,
    /**
     * planar YUV 4:4:4, 27bpp, (1 Cr & Cb sample per 1x1 Y samples), little-endian
     */
    AV_PIX_FMT_YUV444P9LE = 66,
    /**
     * planar YUV 4:4:4, 30bpp, (1 Cr & Cb sample per 1x1 Y samples), big-endian
     */
    AV_PIX_FMT_YUV444P10BE = 67,
    /**
     * planar YUV 4:4:4, 30bpp, (1 Cr & Cb sample per 1x1 Y samples), little-endian
     */
    AV_PIX_FMT_YUV444P10LE = 68,
    /**
     * planar YUV 4:2:2, 18bpp, (1 Cr & Cb sample per 2x1 Y samples), big-endian
     */
    AV_PIX_FMT_YUV422P9BE = 69,
    /**
     *  planar YUV 4:2:2, 18bpp, (1 Cr & Cb sample per 2x1 Y samples), little-endian
     */
    AV_PIX_FMT_YUV422P9LE = 70,
    /**
     * planar GBR 4:4:4 24bpp
     */
    AV_PIX_FMT_GBRP = 71,
    /**
     * alias for #AV_PIX_FMT_GBRP
     */
    AV_PIX_FMT_GBR24P = 71,
    /**
     * planar GBR 4:4:4 27bpp, big-endian
     */
    AV_PIX_FMT_GBRP9BE = 72,
    /**
     * planar GBR 4:4:4 27bpp, little-endian
     */
    AV_PIX_FMT_GBRP9LE = 73,
    /**
     * planar GBR 4:4:4 30bpp, big-endian
     */
    AV_PIX_FMT_GBRP10BE = 74,
    /**
     *  planar GBR 4:4:4 30bpp, little-endian
     */
    AV_PIX_FMT_GBRP10LE = 75,
    /**
     * planar GBR 4:4:4 48bpp, big-endian
     */
    AV_PIX_FMT_GBRP16BE = 76,
    /**
     * planar GBR 4:4:4 48bpp, little-endian
     */
    AV_PIX_FMT_GBRP16LE = 77,
    /**
     * planar YUV 4:2:2 24bpp, (1 Cr & Cb sample per 2x1 Y & A samples)
     */
    AV_PIX_FMT_YUVA422P = 78,
    /**
     * planar YUV 4:4:4 32bpp, (1 Cr & Cb sample per 1x1 Y & A samples)
     */
    AV_PIX_FMT_YUVA444P = 79,
    /**
     * planar YUV 4:2:0 22.5bpp, (1 Cr & Cb sample per 2x2 Y & A samples), big-endian
     */
    AV_PIX_FMT_YUVA420P9BE = 80,
    /**
     * planar YUV 4:2:0 22.5bpp, (1 Cr & Cb sample per 2x2 Y & A samples), little-endian
     */
    AV_PIX_FMT_YUVA420P9LE = 81,
    /**
     * planar YUV 4:2:2 27bpp, (1 Cr & Cb sample per 2x1 Y & A samples), big-endian
     */
    AV_PIX_FMT_YUVA422P9BE = 82,
    /**
     *  planar YUV 4:2:2 27bpp, (1 Cr & Cb sample per 2x1 Y & A samples), little-endian
     */
    AV_PIX_FMT_YUVA422P9LE = 83,
    /**
     * planar YUV 4:4:4 36bpp, (1 Cr & Cb sample per 1x1 Y & A samples), big-endian
     */
    AV_PIX_FMT_YUVA444P9BE = 84,
    /**
     * planar YUV 4:4:4 36bpp, (1 Cr & Cb sample per 1x1 Y & A samples), little-endian
     */
    AV_PIX_FMT_YUVA444P9LE = 85,
    /**
     * planar YUV 4:2:0 25bpp, (1 Cr & Cb sample per 2x2 Y & A samples, big-endian)
     */
    AV_PIX_FMT_YUVA420P10BE = 86,
    /**
     * planar YUV 4:2:0 25bpp, (1 Cr & Cb sample per 2x2 Y & A samples, little-endian)
     */
    AV_PIX_FMT_YUVA420P10LE = 87,
    /**
     * planar YUV 4:2:2 30bpp, (1 Cr & Cb sample per 2x1 Y & A samples, big-endian)
     */
    AV_PIX_FMT_YUVA422P10BE = 88,
    /**
     * planar YUV 4:2:2 30bpp, (1 Cr & Cb sample per 2x1 Y & A samples, little-endian)
     */
    AV_PIX_FMT_YUVA422P10LE = 89,
    /**
     * planar YUV 4:4:4 40bpp, (1 Cr & Cb sample per 1x1 Y & A samples, big-endian)
     */
    AV_PIX_FMT_YUVA444P10BE = 90,
    /**
     * planar YUV 4:4:4 40bpp, (1 Cr & Cb sample per 1x1 Y & A samples, little-endian)
     */
    AV_PIX_FMT_YUVA444P10LE = 91,
    /**
     * planar YUV 4:2:0 40bpp, (1 Cr & Cb sample per 2x2 Y & A samples, big-endian)
     */
    AV_PIX_FMT_YUVA420P16BE = 92,
    /**
     * planar YUV 4:2:0 40bpp, (1 Cr & Cb sample per 2x2 Y & A samples, little-endian)
     */
    AV_PIX_FMT_YUVA420P16LE = 93,
    /**
     * planar YUV 4:2:2 48bpp, (1 Cr & Cb sample per 2x1 Y & A samples, big-endian)
     */
    AV_PIX_FMT_YUVA422P16BE = 94,
    /**
     * planar YUV 4:2:2 48bpp, (1 Cr & Cb sample per 2x1 Y & A samples, little-endian)
     */
    AV_PIX_FMT_YUVA422P16LE = 95,
    /**
     * planar YUV 4:4:4 64bpp, (1 Cr & Cb sample per 1x1 Y & A samples, big-endian)
     */
    AV_PIX_FMT_YUVA444P16BE = 96,
    /**
     * planar YUV 4:4:4 64bpp, (1 Cr & Cb sample per 1x1 Y & A samples, little-endian)
     */
    AV_PIX_FMT_YUVA444P16LE = 97,
    /**
     * HW acceleration through VDPAU, Picture.data[3] contains a VdpVideoSurface
     */
    AV_PIX_FMT_VDPAU = 98,
    /**
     * packed XYZ 4:4:4, 36 bpp, (msb) 12X, 12Y, 12Z (lsb), the 2-byte value for each X/Y/Z is stored as little-endian, the 4 lower bits are set to 0
     */
    AV_PIX_FMT_XYZ12LE = 99,
    /**
     * packed XYZ 4:4:4, 36 bpp, (msb) 12X, 12Y, 12Z (lsb), the 2-byte value for each X/Y/Z is stored as big-endian, the 4 lower bits are set to 0
     */
    AV_PIX_FMT_XYZ12BE = 100,
    /**
     * interleaved chroma YUV 4:2:2, 16bpp, (1 Cr & Cb sample per 2x1 Y samples)
     */
    AV_PIX_FMT_NV16 = 101,
    /**
     * interleaved chroma YUV 4:2:2, 20bpp, (1 Cr & Cb sample per 2x1 Y samples), little-endian
     */
    AV_PIX_FMT_NV20LE = 102,
    /**
     * interleaved chroma YUV 4:2:2, 20bpp, (1 Cr & Cb sample per 2x1 Y samples), big-endian
     */
    AV_PIX_FMT_NV20BE = 103,
    /**
     * packed RGBA 16:16:16:16, 64bpp, 16R, 16G, 16B, 16A, the 2-byte value for each R/G/B/A component is stored as big-endian
     */
    AV_PIX_FMT_RGBA64BE = 104,
    /**
     * packed RGBA 16:16:16:16, 64bpp, 16R, 16G, 16B, 16A, the 2-byte value for each R/G/B/A component is stored as little-endian
     */
    AV_PIX_FMT_RGBA64LE = 105,
    /**
     * packed RGBA 16:16:16:16, 64bpp, 16B, 16G, 16R, 16A, the 2-byte value for each R/G/B/A component is stored as big-endian
     */
    AV_PIX_FMT_BGRA64BE = 106,
    /**
     * packed RGBA 16:16:16:16, 64bpp, 16B, 16G, 16R, 16A, the 2-byte value for each R/G/B/A component is stored as little-endian
     */
    AV_PIX_FMT_BGRA64LE = 107,
    /**
     * packed YUV 4:2:2, 16bpp, Y0 Cr Y1 Cb
     */
    AV_PIX_FMT_YVYU422 = 108,
    /**
     * 16 bits gray, 16 bits alpha (big-endian)
     */
    AV_PIX_FMT_YA16BE = 109,
    /**
     * 16 bits gray, 16 bits alpha (little-endian)
     */
    AV_PIX_FMT_YA16LE = 110,
    /**
     * planar GBRA 4:4:4:4 32bpp
     */
    AV_PIX_FMT_GBRAP = 111,
    /**
     * planar GBRA 4:4:4:4 64bpp, big-endian
     */
    AV_PIX_FMT_GBRAP16BE = 112,
    /**
     * planar GBRA 4:4:4:4 64bpp, little-endian
     */
    AV_PIX_FMT_GBRAP16LE = 113,
    /**
     * HW acceleration through QSV, data[3] contains a pointer to the
     * mfxFrameSurface1 structure.
     *
     * Before FFmpeg 5.0:
     * mfxFrameSurface1.Data.MemId contains a pointer when importing
     * the following frames as QSV frames:
     *
     * VAAPI:
     * mfxFrameSurface1.Data.MemId contains a pointer to VASurfaceID
     *
     * DXVA2:
     * mfxFrameSurface1.Data.MemId contains a pointer to IDirect3DSurface9
     *
     * FFmpeg 5.0 and above:
     * mfxFrameSurface1.Data.MemId contains a pointer to the mfxHDLPair
     * structure when importing the following frames as QSV frames:
     *
     * VAAPI:
     * mfxHDLPair.first contains a VASurfaceID pointer.
     * mfxHDLPair.second is always MFX_INFINITE.
     *
     * DXVA2:
     * mfxHDLPair.first contains IDirect3DSurface9 pointer.
     * mfxHDLPair.second is always MFX_INFINITE.
     *
     * D3D11:
     * mfxHDLPair.first contains a ID3D11Texture2D pointer.
     * mfxHDLPair.second contains the texture array index of the frame if the
     * ID3D11Texture2D is an array texture, or always MFX_INFINITE if it is a
     * normal texture.
     */
    AV_PIX_FMT_QSV = 114,
    /**
     * HW acceleration though MMAL, data[3] contains a pointer to the
     * MMAL_BUFFER_HEADER_T structure.
     */
    AV_PIX_FMT_MMAL = 115,
    /**
     * HW decoding through Direct3D11 via old API, Picture.data[3] contains a ID3D11VideoDecoderOutputView pointer
     */
    AV_PIX_FMT_D3D11VA_VLD = 116,
    /**
     * HW acceleration through CUDA. data[i] contain CUdeviceptr pointers
     * exactly as for system memory frames.
     */
    AV_PIX_FMT_CUDA = 117,
    /**
     * packed RGB 8:8:8, 32bpp, XRGBXRGB...   X=unused/undefined
     */
    AV_PIX_FMT_0RGB = 118,
    /**
     * packed RGB 8:8:8, 32bpp, RGBXRGBX...   X=unused/undefined
     */
    AV_PIX_FMT_RGB0 = 119,
    /**
     * packed BGR 8:8:8, 32bpp, XBGRXBGR...   X=unused/undefined
     */
    AV_PIX_FMT_0BGR = 120,
    /**
     * packed BGR 8:8:8, 32bpp, BGRXBGRX...   X=unused/undefined
     */
    AV_PIX_FMT_BGR0 = 121,
    /**
     * planar YUV 4:2:0,18bpp, (1 Cr & Cb sample per 2x2 Y samples), big-endian
     */
    AV_PIX_FMT_YUV420P12BE = 122,
    /**
     * planar YUV 4:2:0,18bpp, (1 Cr & Cb sample per 2x2 Y samples), little-endian
     */
    AV_PIX_FMT_YUV420P12LE = 123,
    /**
     * planar YUV 4:2:0,21bpp, (1 Cr & Cb sample per 2x2 Y samples), big-endian
     */
    AV_PIX_FMT_YUV420P14BE = 124,
    /**
     * planar YUV 4:2:0,21bpp, (1 Cr & Cb sample per 2x2 Y samples), little-endian
     */
    AV_PIX_FMT_YUV420P14LE = 125,
    /**
     * planar YUV 4:2:2,24bpp, (1 Cr & Cb sample per 2x1 Y samples), big-endian
     */
    AV_PIX_FMT_YUV422P12BE = 126,
    /**
     * planar YUV 4:2:2,24bpp, (1 Cr & Cb sample per 2x1 Y samples), little-endian
     */
    AV_PIX_FMT_YUV422P12LE = 127,
    /**
     * planar YUV 4:2:2,28bpp, (1 Cr & Cb sample per 2x1 Y samples), big-endian
     */
    AV_PIX_FMT_YUV422P14BE = 128,
    /**
     * planar YUV 4:2:2,28bpp, (1 Cr & Cb sample per 2x1 Y samples), little-endian
     */
    AV_PIX_FMT_YUV422P14LE = 129,
    /**
     * planar YUV 4:4:4,36bpp, (1 Cr & Cb sample per 1x1 Y samples), big-endian
     */
    AV_PIX_FMT_YUV444P12BE = 130,
    /**
     * planar YUV 4:4:4,36bpp, (1 Cr & Cb sample per 1x1 Y samples), little-endian
     */
    AV_PIX_FMT_YUV444P12LE = 131,
    /**
     * planar YUV 4:4:4,42bpp, (1 Cr & Cb sample per 1x1 Y samples), big-endian
     */
    AV_PIX_FMT_YUV444P14BE = 132,
    /**
     * planar YUV 4:4:4,42bpp, (1 Cr & Cb sample per 1x1 Y samples), little-endian
     */
    AV_PIX_FMT_YUV444P14LE = 133,
    /**
     * planar GBR 4:4:4 36bpp, big-endian
     */
    AV_PIX_FMT_GBRP12BE = 134,
    /**
     * planar GBR 4:4:4 36bpp, little-endian
     */
    AV_PIX_FMT_GBRP12LE = 135,
    /**
     * planar GBR 4:4:4 42bpp, big-endian
     */
    AV_PIX_FMT_GBRP14BE = 136,
    /**
     * planar GBR 4:4:4 42bpp, little-endian
     */
    AV_PIX_FMT_GBRP14LE = 137,
    /**
     * planar YUV 4:1:1, 12bpp, (1 Cr & Cb sample per 4x1 Y samples) full scale (JPEG), deprecated in favor of AV_PIX_FMT_YUV411P and setting color_range
     */
    AV_PIX_FMT_YUVJ411P = 138,
    /**
     * bayer, BGBG..(odd line), GRGR..(even line), 8-bit samples
     */
    AV_PIX_FMT_BAYER_BGGR8 = 139,
    /**
     * bayer, RGRG..(odd line), GBGB..(even line), 8-bit samples
     */
    AV_PIX_FMT_BAYER_RGGB8 = 140,
    /**
     * bayer, GBGB..(odd line), RGRG..(even line), 8-bit samples
     */
    AV_PIX_FMT_BAYER_GBRG8 = 141,
    /**
     * bayer, GRGR..(odd line), BGBG..(even line), 8-bit samples
     */
    AV_PIX_FMT_BAYER_GRBG8 = 142,
    /**
     * bayer, BGBG..(odd line), GRGR..(even line), 16-bit samples, little-endian
     */
    AV_PIX_FMT_BAYER_BGGR16LE = 143,
    /**
     * bayer, BGBG..(odd line), GRGR..(even line), 16-bit samples, big-endian
     */
    AV_PIX_FMT_BAYER_BGGR16BE = 144,
    /**
     * bayer, RGRG..(odd line), GBGB..(even line), 16-bit samples, little-endian
     */
    AV_PIX_FMT_BAYER_RGGB16LE = 145,
    /**
     * bayer, RGRG..(odd line), GBGB..(even line), 16-bit samples, big-endian
     */
    AV_PIX_FMT_BAYER_RGGB16BE = 146,
    /**
     * bayer, GBGB..(odd line), RGRG..(even line), 16-bit samples, little-endian
     */
    AV_PIX_FMT_BAYER_GBRG16LE = 147,
    /**
     * bayer, GBGB..(odd line), RGRG..(even line), 16-bit samples, big-endian
     */
    AV_PIX_FMT_BAYER_GBRG16BE = 148,
    /**
     *  bayer, GRGR..(odd line), BGBG..(even line), 16-bit samples, little-endian
     */
    AV_PIX_FMT_BAYER_GRBG16LE = 149,
    /**
     * bayer, GRGR..(odd line), BGBG..(even line), 16-bit samples, big-endian
     */
    AV_PIX_FMT_BAYER_GRBG16BE = 150,
    /**
     * XVideo Motion Acceleration via common packet passing
     */
    AV_PIX_FMT_XVMC = 151,
    /**
     * planar YUV 4:4:0,20bpp, (1 Cr & Cb sample per 1x2 Y samples), little-endian
     */
    AV_PIX_FMT_YUV440P10LE = 152,
    /**
     * planar YUV 4:4:0,20bpp, (1 Cr & Cb sample per 1x2 Y samples), big-endian
     */
    AV_PIX_FMT_YUV440P10BE = 153,
    /**
     * planar YUV 4:4:0,24bpp, (1 Cr & Cb sample per 1x2 Y samples), little-endian
     */
    AV_PIX_FMT_YUV440P12LE = 154,
    /**
     * planar YUV 4:4:0,24bpp, (1 Cr & Cb sample per 1x2 Y samples), big-endian
     */
    AV_PIX_FMT_YUV440P12BE = 155,
    /**
     * packed AYUV 4:4:4,64bpp (1 Cr & Cb sample per 1x1 Y & A samples), little-endian
     */
    AV_PIX_FMT_AYUV64LE = 156,
    /**
     * packed AYUV 4:4:4,64bpp (1 Cr & Cb sample per 1x1 Y & A samples), big-endian
     */
    AV_PIX_FMT_AYUV64BE = 157,
    /**
     * hardware decoding through Videotoolbox
     */
    AV_PIX_FMT_VIDEOTOOLBOX = 158,
    /**
     * like NV12, with 10bpp per component, data in the high bits, zeros in the low bits, little-endian
     */
    AV_PIX_FMT_P010LE = 159,
    /**
     * like NV12, with 10bpp per component, data in the high bits, zeros in the low bits, big-endian
     */
    AV_PIX_FMT_P010BE = 160,
    /**
     * planar GBR 4:4:4:4 48bpp, big-endian
     */
    AV_PIX_FMT_GBRAP12BE = 161,
    /**
     * planar GBR 4:4:4:4 48bpp, little-endian
     */
    AV_PIX_FMT_GBRAP12LE = 162,
    /**
     * planar GBR 4:4:4:4 40bpp, big-endian
     */
    AV_PIX_FMT_GBRAP10BE = 163,
    /**
     * planar GBR 4:4:4:4 40bpp, little-endian
     */
    AV_PIX_FMT_GBRAP10LE = 164,
    /**
     * hardware decoding through MediaCodec
     */
    AV_PIX_FMT_MEDIACODEC = 165,
    /**
     * Y , 12bpp, big-endian
     */
    AV_PIX_FMT_GRAY12BE = 166,
    /**
     *  Y , 12bpp, little-endian
     */
    AV_PIX_FMT_GRAY12LE = 167,
    /**
     * Y , 10bpp, big-endian
     */
    AV_PIX_FMT_GRAY10BE = 168,
    /**
     * Y , 10bpp, little-endian
     */
    AV_PIX_FMT_GRAY10LE = 169,
    /**
     * like NV12, with 16bpp per component, little-endian
     */
    AV_PIX_FMT_P016LE = 170,
    /**
     * like NV12, with 16bpp per component, big-endian
     */
    AV_PIX_FMT_P016BE = 171,
    /**
     * Hardware surfaces for Direct3D11.
     *
     * This is preferred over the legacy AV_PIX_FMT_D3D11VA_VLD. The new D3D11
     * hwaccel API and filtering support AV_PIX_FMT_D3D11 only.
     *
     * data[0] contains a ID3D11Texture2D pointer, and data[1] contains the
     * texture array index of the frame as intptr_t if the ID3D11Texture2D is
     * an array texture (or always 0 if it's a normal texture).
     */
    AV_PIX_FMT_D3D11 = 172,
    /**
     * Y, 9bpp, big-endian
     */
    AV_PIX_FMT_GRAY9BE = 173,
    /**
     *  Y , 9bpp, little-endian
     */
    AV_PIX_FMT_GRAY9LE = 174,
    /**
     * IEEE-754 single precision planar GBR 4:4:4,     96bpp, big-endian
     */
    AV_PIX_FMT_GBRPF32BE = 175,
    /**
     *  IEEE-754 single precision planar GBR 4:4:4,     96bpp, little-endian
     */
    AV_PIX_FMT_GBRPF32LE = 176,
    /**
     * IEEE-754 single precision planar GBRA 4:4:4:4, 128bpp, big-endian
     */
    AV_PIX_FMT_GBRAPF32BE = 177,
    /**
     * IEEE-754 single precision planar GBRA 4:4:4:4, 128bpp, little-endian
     */
    AV_PIX_FMT_GBRAPF32LE = 178,
    /**
     * DRM-managed buffers exposed through PRIME buffer sharing.
     *
     * data[0] points to an AVDRMFrameDescriptor.
     */
    AV_PIX_FMT_DRM_PRIME = 179,
    /**
     * Hardware surfaces for OpenCL.
     *
     * data[i] contain 2D image objects (typed in C as cl_mem, used
     * in OpenCL as image2d_t) for each plane of the surface.
     */
    AV_PIX_FMT_OPENCL = 180,
    /**
     * Y , 14bpp, big-endian
     */
    AV_PIX_FMT_GRAY14BE = 181,
    /**
     * Y 14bpp, little-endian
     */
    AV_PIX_FMT_GRAY14LE = 182,
    /**
     * IEEE-754 single precision Y, 32bpp, big-endian
     */
    AV_PIX_FMT_GRAYF32BE = 183,
    /**
     * IEEE-754 single precision Y, 32bpp, little-endian
     */
    AV_PIX_FMT_GRAYF32LE = 184,
    /**
     * lanar YUV 4:2:2,24bpp, (1 Cr & Cb sample per 2x1 Y samples), 12b alpha, big-endian
     */
    AV_PIX_FMT_YUVA422P12BE = 185,
    /**
     * planar YUV 4:2:2,24bpp, (1 Cr & Cb sample per 2x1 Y samples), 12b alpha, little-endian
     */
    AV_PIX_FMT_YUVA422P12LE = 186,
    /**
     * planar YUV 4:4:4,36bpp, (1 Cr & Cb sample per 1x1 Y samples), 12b alpha, big-endian
     */
    AV_PIX_FMT_YUVA444P12BE = 187,
    /**
     *  planar YUV 4:4:4,36bpp, (1 Cr & Cb sample per 1x1 Y samples), 12b alpha, little-endian
     */
    AV_PIX_FMT_YUVA444P12LE = 188,
    /**
     * planar YUV 4:4:4, 24bpp, 1 plane for Y and 1 plane for the UV components, which are interleaved (first byte U and the following byte V)
     */
    AV_PIX_FMT_NV24 = 189,
    /**
     * as above, but U and V bytes are swapped
     */
    AV_PIX_FMT_NV42 = 190,
    /**
     * Vulkan hardware images.
     *
     * data[0] points to an AVVkFrame
     */
    AV_PIX_FMT_VULKAN = 191,
    /**
     * packed YUV 4:2:2 like YUYV422, 20bpp, data in the high bits, big-endian
     */
    AV_PIX_FMT_Y210BE = 192,
    /**
     *  packed YUV 4:2:2 like YUYV422, 20bpp, data in the high bits, little-endian
     */
    AV_PIX_FMT_Y210LE = 193,
    /**
     * packed RGB 10:10:10, 30bpp, (msb)2X 10R 10G 10B(lsb), little-endian, X=unused/undefined
     */
    AV_PIX_FMT_X2RGB10LE = 194,
    /**
     * packed RGB 10:10:10, 30bpp, (msb)2X 10R 10G 10B(lsb), big-endian, X=unused/undefined
     */
    AV_PIX_FMT_X2RGB10BE = 195,
    /**
     *  packed BGR 10:10:10, 30bpp, (msb)2X 10B 10G 10R(lsb), little-endian, X=unused/undefined
     */
    AV_PIX_FMT_X2BGR10LE = 196,
    /**
     * packed BGR 10:10:10, 30bpp, (msb)2X 10B 10G 10R(lsb), big-endian, X=unused/undefined
     */
    AV_PIX_FMT_X2BGR10BE = 197,
    /**
     * interleaved chroma YUV 4:2:2, 20bpp, data in the high bits, big-endian
     */
    AV_PIX_FMT_P210BE = 198,
    /**
     * interleaved chroma YUV 4:2:2, 20bpp, data in the high bits, little-endian
     */
    AV_PIX_FMT_P210LE = 199,
    /**
     * interleaved chroma YUV 4:4:4, 30bpp, data in the high bits, big-endian
     */
    AV_PIX_FMT_P410BE = 200,
    /**
     * interleaved chroma YUV 4:4:4, 30bpp, data in the high bits, little-endian
     */
    AV_PIX_FMT_P410LE = 201,
    /**
     * interleaved chroma YUV 4:2:2, 32bpp, big-endian
     */
    AV_PIX_FMT_P216BE = 202,
    /**
     * interleaved chroma YUV 4:2:2, 32bpp, little-endian
     */
    AV_PIX_FMT_P216LE = 203,
    /**
     * interleaved chroma YUV 4:4:4, 48bpp, big-endian
     */
    AV_PIX_FMT_P416BE = 204,
    /**
     * interleaved chroma YUV 4:4:4, 48bpp, little-endian
     */
    AV_PIX_FMT_P416LE = 205,
    /**
     * packed VUYA 4:4:4, 32bpp, VUYAVUYA...
     */
    AV_PIX_FMT_VUYA = 206,
    /**
     * IEEE-754 half precision packed RGBA 16:16:16:16, 64bpp, RGBARGBA..., big-endian
     */
    AV_PIX_FMT_RGBAF16BE = 207,
    /**
     * IEEE-754 half precision packed RGBA 16:16:16:16, 64bpp, RGBARGBA..., little-endian
     */
    AV_PIX_FMT_RGBAF16LE = 208,
    /**
     * packed VUYX 4:4:4, 32bpp, Variant of VUYA where alpha channel is left undefined
     */
    AV_PIX_FMT_VUYX = 209,
    /**
     * like NV12, with 12bpp per component, data in the high bits, zeros in the low bits, little-endian
     */
    AV_PIX_FMT_P012LE = 210,
    /**
     * like NV12, with 12bpp per component, data in the high bits, zeros in the low bits, big-endian
     */
    AV_PIX_FMT_P012BE = 211,
    /**
     * packed YUV 4:2:2 like YUYV422, 24bpp, data in the high bits, zeros in the low bits, big-endian
     */
    AV_PIX_FMT_Y212BE = 212,
    /**
     * packed YUV 4:2:2 like YUYV422, 24bpp, data in the high bits, zeros in the low bits, little-endian
     */
    AV_PIX_FMT_Y212LE = 213,
    /**
     * packed XVYU 4:4:4, 32bpp, (msb)2X 10V 10Y 10U(lsb), big-endian, variant of Y410 where alpha channel is left undefined
     */
    AV_PIX_FMT_XV30BE = 214,
    /**
     * packed XVYU 4:4:4, 32bpp, (msb)2X 10V 10Y 10U(lsb), little-endian, variant of Y410 where alpha channel is left undefined
     */
    AV_PIX_FMT_XV30LE = 215,
    /**
     * packed XVYU 4:4:4, 48bpp, data in the high bits, zeros in the low bits, big-endian, variant of Y412 where alpha channel is left undefined
     */
    AV_PIX_FMT_XV36BE = 216,
    /**
     * packed XVYU 4:4:4, 48bpp, data in the high bits, zeros in the low bits, little-endian, variant of Y412 where alpha channel is left undefined
     */
    AV_PIX_FMT_XV36LE = 217,
    /**
     * IEEE-754 single precision packed RGB 32:32:32, 96bpp, RGBRGB..., big-endian
     */
    AV_PIX_FMT_RGBF32BE = 218,
    /**
     * IEEE-754 single precision packed RGB 32:32:32, 96bpp, RGBRGB..., little-endian
     */
    AV_PIX_FMT_RGBF32LE = 219,
    /**
     * IEEE-754 single precision packed RGBA 32:32:32:32, 128bpp, RGBARGBA..., big-endian
     */
    AV_PIX_FMT_RGBAF32BE = 220,
    /**
     * IEEE-754 single precision packed RGBA 32:32:32:32, 128bpp, RGBARGBA..., little-endian
     */
    AV_PIX_FMT_RGBAF32LE = 221,
    /**
     * interleaved chroma YUV 4:2:2, 24bpp, data in the high bits, big-endian
     */
    AV_PIX_FMT_P212BE = 222,
    /**
     * interleaved chroma YUV 4:2:2, 24bpp, data in the high bits, little-endian
     */
    AV_PIX_FMT_P212LE = 223,
    /**
     * interleaved chroma YUV 4:4:4, 36bpp, data in the high bits, big-endian
     */
    AV_PIX_FMT_P412BE = 224,
    /**
     * interleaved chroma YUV 4:4:4, 36bpp, data in the high bits, little-endian
     */
    AV_PIX_FMT_P412LE = 225,
    /**
     * planar GBR 4:4:4:4 56bpp, big-endian
     */
    AV_PIX_FMT_GBRAP14BE = 226,
    /**
     * planar GBR 4:4:4:4 56bpp, little-endian
     */
    AV_PIX_FMT_GBRAP14LE = 227,
    /**
     * Hardware surfaces for Direct3D 12.
     *
     * data[0] points to an AVD3D12VAFrame
     */
    AV_PIX_FMT_D3D12 = 228,
    /**
     * number of pixel formats, DO NOT USE THIS if you want to link with shared libav* because the number of formats might differ between versions
     */
    AV_PIX_FMT_NB = 229
}
/**
 * Chromaticity coordinates of the source primaries.
 * These values match the ones defined by ISO/IEC 23091-2_2019 subclause 8.1 and ITU-T H.273.
 */
export declare const enum AVColorPrimaries {
    AVCOL_PRI_RESERVED0 = 0,
    /**
     * also ITU-R BT1361 / IEC 61966-2-4 / SMPTE RP 177 Annex B
     */
    AVCOL_PRI_BT709 = 1,
    AVCOL_PRI_UNSPECIFIED = 2,
    AVCOL_PRI_RESERVED = 3,
    /**
     * also FCC Title 47 Code of Federal Regulations 73.682 (a)(20)
     */
    AVCOL_PRI_BT470M = 4,
    /**
     * also ITU-R BT601-6 625 / ITU-R BT1358 625 / ITU-R BT1700 625 PAL & SECAM
     */
    AVCOL_PRI_BT470BG = 5,
    /**
     * also ITU-R BT601-6 525 / ITU-R BT1358 525 / ITU-R BT1700 NTSC
     */
    AVCOL_PRI_SMPTE170M = 6,
    /**
     * identical to above, also called "SMPTE C" even though it uses D65
     */
    AVCOL_PRI_SMPTE240M = 7,
    /**
     * colour filters using Illuminant C
     */
    AVCOL_PRI_FILM = 8,
    /**
     * ITU-R BT2020
     */
    AVCOL_PRI_BT2020 = 9,
    /**
     * SMPTE ST 428-1 (CIE 1931 XYZ)
     */
    AVCOL_PRI_SMPTE428 = 10,
    AVCOL_PRI_SMPTEST428_1 = 10,
    /**
     * SMPTE ST 431-2 (2011) / DCI P3
     */
    AVCOL_PRI_SMPTE431 = 11,
    /**
     * SMPTE ST 432-1 (2010) / P3 D65 / Display P3
     */
    AVCOL_PRI_SMPTE432 = 12,
    /**
     * EBU Tech. 3213-E (nothing there) / one of JEDEC P22 group phosphors
     */
    AVCOL_PRI_EBU3213 = 22,
    AVCOL_PRI_JEDEC_P22 = 22,
    /**
     * Not part of ABI
     */
    AVCOL_PRI_NB = 23
}
/**
 * Color Transfer Characteristic.
 * These values match the ones defined by ISO/IEC 23091-2_2019 subclause 8.2.
 */
export declare const enum AVColorTransferCharacteristic {
    AVCOL_TRC_RESERVED0 = 0,
    /**
     * also ITU-R BT1361
     */
    AVCOL_TRC_BT709 = 1,
    AVCOL_TRC_UNSPECIFIED = 2,
    AVCOL_TRC_RESERVED = 3,
    /**
     * also ITU-R BT470M / ITU-R BT1700 625 PAL & SECAM
     */
    AVCOL_TRC_GAMMA22 = 4,
    /**
     * also ITU-R BT470BG
     */
    AVCOL_TRC_GAMMA28 = 5,
    /**
     * also ITU-R BT601-6 525 or 625 / ITU-R BT1358 525 or 625 / ITU-R BT1700 NTSC
     */
    AVCOL_TRC_SMPTE170M = 6,
    AVCOL_TRC_SMPTE240M = 7,
    /**
     * Linear transfer characteristics
     */
    AVCOL_TRC_LINEAR = 8,
    /**
     * Logarithmic transfer characteristic (100:1 range)
     */
    AVCOL_TRC_LOG = 9,
    /**
     * Logarithmic transfer characteristic (100 * Sqrt(10) : 1 range)
     */
    AVCOL_TRC_LOG_SQRT = 10,
    /**
     * IEC 61966-2-4
     */
    AVCOL_TRC_IEC61966_2_4 = 11,
    /**
     * ITU-R BT1361 Extended Colour Gamut
     */
    AVCOL_TRC_BT1361_ECG = 12,
    /**
     * IEC 61966-2-1 (sRGB or sYCC)
     */
    AVCOL_TRC_IEC61966_2_1 = 13,
    /**
     * ITU-R BT2020 for 10-bit system
     */
    AVCOL_TRC_BT2020_10 = 14,
    /**
     * ITU-R BT2020 for 12-bit system
     */
    AVCOL_TRC_BT2020_12 = 15,
    /**
     * SMPTE ST 2084 for 10-, 12-, 14- and 16-bit systems
     */
    AVCOL_TRC_SMPTE2084 = 16,
    AVCOL_TRC_SMPTEST2084 = 16,
    /**
     * SMPTE ST 428-1
     */
    AVCOL_TRC_SMPTE428 = 17,
    AVCOL_TRC_SMPTEST428_1 = 17,
    /**
     * ARIB STD-B67, known as "Hybrid log-gamma"
     */
    AVCOL_TRC_ARIB_STD_B67 = 18,
    /**
     * Not part of ABI
     */
    AVCOL_TRC_NB = 19
}
/**
 * YUV colorspace type.
 * These values match the ones defined by ISO/IEC 23091-2_2019 subclause 8.3.
 */
export declare const enum AVColorSpace {
    /**
     * order of coefficients is actually GBR, also IEC 61966-2-1 (sRGB), YZX and ST 428-1
     */
    AVCOL_SPC_RGB = 0,
    /**
     * also ITU-R BT1361 / IEC 61966-2-4 xvYCC709 / derived in SMPTE RP 177 Annex B
     */
    AVCOL_SPC_BT709 = 1,
    AVCOL_SPC_UNSPECIFIED = 2,
    /**
     * reserved for future use by ITU-T and ISO/IEC just like 15-255 are
     */
    AVCOL_SPC_RESERVED = 3,
    /**
     * FCC Title 47 Code of Federal Regulations 73.682 (a)(20)
     */
    AVCOL_SPC_FCC = 4,
    /**
     * also ITU-R BT601-6 625 / ITU-R BT1358 625 / ITU-R BT1700 625 PAL & SECAM / IEC 61966-2-4 xvYCC601
     */
    AVCOL_SPC_BT470BG = 5,
    /**
     * also ITU-R BT601-6 525 / ITU-R BT1358 525 / ITU-R BT1700 NTSC / functionally identical to above
     */
    AVCOL_SPC_SMPTE170M = 6,
    /**
     * derived from 170M primaries and D65 white point, 170M is derived from BT470 System M's primaries
     */
    AVCOL_SPC_SMPTE240M = 7,
    /**
     * used by Dirac / VC-2 and H.264 FRext, see ITU-T SG16
     */
    AVCOL_SPC_YCGCO = 8,
    AVCOL_SPC_YCOCG = 8,
    /**
     * ITU-R BT2020 non-constant luminance system
     */
    AVCOL_SPC_BT2020_NCL = 9,
    /**
     * ITU-R BT2020 constant luminance system
     */
    AVCOL_SPC_BT2020_CL = 10,
    /**
     * SMPTE 2085, Y'D'zD'x
     */
    AVCOL_SPC_SMPTE2085 = 11,
    /**
     * Chromaticity-derived non-constant luminance system
     */
    AVCOL_SPC_CHROMA_DERIVED_NCL = 12,
    /**
     * Chromaticity-derived constant luminance system
     */
    AVCOL_SPC_CHROMA_DERIVED_CL = 13,
    /**
     * ITU-R BT.2100-0, ICtCp
     */
    AVCOL_SPC_ICTCP = 14,
    /**
     * Not part of ABI
     */
    AVCOL_SPC_NB = 15
}
/**
 * Visual content value range.
 *
 * These values are based on definitions that can be found in multiple
 * specifications, such as ITU-T BT.709 (3.4 - Quantization of RGB, luminance
 * and colour-difference signals), ITU-T BT.2020 (Table 5 - Digital
 * Representation) as well as ITU-T BT.2100 (Table 9 - Digital 10- and 12-bit
 * integer representation). At the time of writing, the BT.2100 one is
 * recommended, as it also defines the full range representation.
 *
 * Common definitions:
 *   - For RGB and luma planes such as Y in YCbCr and I in ICtCp,
 *     'E' is the original value in range of 0.0 to 1.0.
 *   - For chroma planes such as Cb, Cr and Ct, Cp, 'E' is the original
 *     value in range of -0.5 to 0.5.
 *   - 'n' is the output bit depth.
 *   - For additional definitions such as rounding and clipping to valid n
 *     bit unsigned integer range, please refer to BT.2100 (Table 9).
 */
export declare const enum AVColorRange {
    AVCOL_RANGE_UNSPECIFIED = 0,
    /**
     * Narrow or limited range content.
     *
     * - For luma planes:
     *
     *       (219 * E + 16) * 2^(n-8)
     *
     *   F.ex. the range of 16-235 for 8 bits
     *
     * - For chroma planes:
     *
     *       (224 * E + 128) * 2^(n-8)
     *
     *   F.ex. the range of 16-240 for 8 bits
     */
    AVCOL_RANGE_MPEG = 1,
    /**
     * Full range content.
     *
     * - For RGB and luma planes:
     *
     *       (2^n - 1) * E
     *
     *   F.ex. the range of 0-255 for 8 bits
     *
     * - For chroma planes:
     *
     *       (2^n - 1) * E + 2^(n - 1)
     *
     *   F.ex. the range of 1-255 for 8 bits
     */
    AVCOL_RANGE_JPEG = 2,
    /**
     *  Not part of ABI
     */
    AVCOL_RANGE_NB = 3
}
/**
 * Location of chroma samples.
 *
 * Illustration showing the location of the first (top left) chroma sample of the
 * image, the left shows only luma, the right
 * shows the location of the chroma sample, the 2 could be imagined to overlay
 * each other but are drawn separately due to limitations of ASCII
 *
 *                1st 2nd       1st 2nd horizontal luma sample positions
 *                 v   v         v   v
 *                 ______        ______
 *1st luma line > |X   X ...    |3 4 X ...     X are luma samples,
 *                |             |1 2           1-6 are possible chroma positions
 *2nd luma line > |X   X ...    |5 6 X ...     0 is undefined/unknown position
 */
export declare const enum AVChromaLocation {
    AVCHROMA_LOC_UNSPECIFIED = 0,
    /**
     * MPEG-2/4 4:2:0, H.264 default for 4:2:0
     */
    AVCHROMA_LOC_LEFT = 1,
    /**
     * MPEG-1 4:2:0, JPEG 4:2:0, H.263 4:2:0
     */
    AVCHROMA_LOC_CENTER = 2,
    /**
     * ITU-R 601, SMPTE 274M 296M S314M(DV 4:1:1), mpeg2 4:2:2
     */
    AVCHROMA_LOC_TOPLEFT = 3,
    AVCHROMA_LOC_TOP = 4,
    AVCHROMA_LOC_BOTTOMLEFT = 5,
    AVCHROMA_LOC_BOTTOM = 6,
    /**
     *  Not part of ABI
     */
    AVCHROMA_LOC_NB = 7
}
export declare const enum AVFieldOrder {
    AV_FIELD_UNKNOWN = 0,
    AV_FIELD_PROGRESSIVE = 1,
    AV_FIELD_TT = 2,
    AV_FIELD_BB = 3,
    AV_FIELD_TB = 4,
    AV_FIELD_BT = 5
}
