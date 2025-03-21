export declare const enum AVMediaType {
    /**
     * Usually treated as AVMEDIA_TYPE_DATA
     */
    AVMEDIA_TYPE_UNKNOWN = -1,
    AVMEDIA_TYPE_VIDEO = 0,
    AVMEDIA_TYPE_AUDIO = 1,
    /**
     * Opaque data information usually continuous
     */
    AVMEDIA_TYPE_DATA = 2,
    AVMEDIA_TYPE_SUBTITLE = 3,
    /**
     * Opaque data information usually sparse
     */
    AVMEDIA_TYPE_ATTACHMENT = 4,
    AVMEDIA_TYPE_NB = 5
}
export declare const enum AVCodecID {
    AV_CODEC_ID_NONE = 0,
    /**
     * video codecs
     */
    AV_CODEC_ID_MPEG1VIDEO = 1,
    /**
     * preferred ID for MPEG-1/2 video decoding
     */
    AV_CODEC_ID_MPEG2VIDEO = 2,
    AV_CODEC_ID_H261 = 3,
    AV_CODEC_ID_H263 = 4,
    AV_CODEC_ID_RV10 = 5,
    AV_CODEC_ID_RV20 = 6,
    AV_CODEC_ID_MJPEG = 7,
    AV_CODEC_ID_MJPEGB = 8,
    AV_CODEC_ID_LJPEG = 9,
    AV_CODEC_ID_SP5X = 10,
    AV_CODEC_ID_JPEGLS = 11,
    AV_CODEC_ID_MPEG4 = 12,
    AV_CODEC_ID_RAWVIDEO = 13,
    AV_CODEC_ID_MSMPEG4V1 = 14,
    AV_CODEC_ID_MSMPEG4V2 = 15,
    AV_CODEC_ID_MSMPEG4V3 = 16,
    AV_CODEC_ID_WMV1 = 17,
    AV_CODEC_ID_WMV2 = 18,
    AV_CODEC_ID_H263P = 19,
    AV_CODEC_ID_H263I = 20,
    AV_CODEC_ID_FLV1 = 21,
    AV_CODEC_ID_SVQ1 = 22,
    AV_CODEC_ID_SVQ3 = 23,
    AV_CODEC_ID_DVVIDEO = 24,
    AV_CODEC_ID_HUFFYUV = 25,
    AV_CODEC_ID_CYUV = 26,
    AV_CODEC_ID_H264 = 27,
    AV_CODEC_ID_INDEO3 = 28,
    AV_CODEC_ID_VP3 = 29,
    AV_CODEC_ID_THEORA = 30,
    AV_CODEC_ID_ASV1 = 31,
    AV_CODEC_ID_ASV2 = 32,
    AV_CODEC_ID_FFV1 = 33,
    AV_CODEC_ID_4XM = 34,
    AV_CODEC_ID_VCR1 = 35,
    AV_CODEC_ID_CLJR = 36,
    AV_CODEC_ID_MDEC = 37,
    AV_CODEC_ID_ROQ = 38,
    AV_CODEC_ID_INTERPLAY_VIDEO = 39,
    AV_CODEC_ID_XAN_WC3 = 40,
    AV_CODEC_ID_XAN_WC4 = 41,
    AV_CODEC_ID_RPZA = 42,
    AV_CODEC_ID_CINEPAK = 43,
    AV_CODEC_ID_WS_VQA = 44,
    AV_CODEC_ID_MSRLE = 45,
    AV_CODEC_ID_MSVIDEO1 = 46,
    AV_CODEC_ID_IDCIN = 47,
    AV_CODEC_ID_8BPS = 48,
    AV_CODEC_ID_SMC = 49,
    AV_CODEC_ID_FLIC = 50,
    AV_CODEC_ID_TRUEMOTION1 = 51,
    AV_CODEC_ID_VMDVIDEO = 52,
    AV_CODEC_ID_MSZH = 53,
    AV_CODEC_ID_ZLIB = 54,
    AV_CODEC_ID_QTRLE = 55,
    AV_CODEC_ID_TSCC = 56,
    AV_CODEC_ID_ULTI = 57,
    AV_CODEC_ID_QDRAW = 58,
    AV_CODEC_ID_VIXL = 59,
    AV_CODEC_ID_QPEG = 60,
    AV_CODEC_ID_PNG = 61,
    AV_CODEC_ID_PPM = 62,
    AV_CODEC_ID_PBM = 63,
    AV_CODEC_ID_PGM = 64,
    AV_CODEC_ID_PGMYUV = 65,
    AV_CODEC_ID_PAM = 66,
    AV_CODEC_ID_FFVHUFF = 67,
    AV_CODEC_ID_RV30 = 68,
    AV_CODEC_ID_RV40 = 69,
    AV_CODEC_ID_VC1 = 70,
    AV_CODEC_ID_WMV3 = 71,
    AV_CODEC_ID_LOCO = 72,
    AV_CODEC_ID_WNV1 = 73,
    AV_CODEC_ID_AASC = 74,
    AV_CODEC_ID_INDEO2 = 75,
    AV_CODEC_ID_FRAPS = 76,
    AV_CODEC_ID_TRUEMOTION2 = 77,
    AV_CODEC_ID_BMP = 78,
    AV_CODEC_ID_CSCD = 79,
    AV_CODEC_ID_MMVIDEO = 80,
    AV_CODEC_ID_ZMBV = 81,
    AV_CODEC_ID_AVS = 82,
    AV_CODEC_ID_SMACKVIDEO = 83,
    AV_CODEC_ID_NUV = 84,
    AV_CODEC_ID_KMVC = 85,
    AV_CODEC_ID_FLASHSV = 86,
    AV_CODEC_ID_CAVS = 87,
    AV_CODEC_ID_JPEG2000 = 88,
    AV_CODEC_ID_VMNC = 89,
    AV_CODEC_ID_VP5 = 90,
    AV_CODEC_ID_VP6 = 91,
    AV_CODEC_ID_VP6F = 92,
    AV_CODEC_ID_TARGA = 93,
    AV_CODEC_ID_DSICINVIDEO = 94,
    AV_CODEC_ID_TIERTEXSEQVIDEO = 95,
    AV_CODEC_ID_TIFF = 96,
    AV_CODEC_ID_GIF = 97,
    AV_CODEC_ID_DXA = 98,
    AV_CODEC_ID_DNXHD = 99,
    AV_CODEC_ID_THP = 100,
    AV_CODEC_ID_SGI = 101,
    AV_CODEC_ID_C93 = 102,
    AV_CODEC_ID_BETHSOFTVID = 103,
    AV_CODEC_ID_PTX = 104,
    AV_CODEC_ID_TXD = 105,
    AV_CODEC_ID_VP6A = 106,
    AV_CODEC_ID_AMV = 107,
    AV_CODEC_ID_VB = 108,
    AV_CODEC_ID_PCX = 109,
    AV_CODEC_ID_SUNRAST = 110,
    AV_CODEC_ID_INDEO4 = 111,
    AV_CODEC_ID_INDEO5 = 112,
    AV_CODEC_ID_MIMIC = 113,
    AV_CODEC_ID_RL2 = 114,
    AV_CODEC_ID_ESCAPE124 = 115,
    AV_CODEC_ID_DIRAC = 116,
    AV_CODEC_ID_BFI = 117,
    AV_CODEC_ID_CMV = 118,
    AV_CODEC_ID_MOTIONPIXELS = 119,
    AV_CODEC_ID_TGV = 120,
    AV_CODEC_ID_TGQ = 121,
    AV_CODEC_ID_TQI = 122,
    AV_CODEC_ID_AURA = 123,
    AV_CODEC_ID_AURA2 = 124,
    AV_CODEC_ID_V210X = 125,
    AV_CODEC_ID_TMV = 126,
    AV_CODEC_ID_V210 = 127,
    AV_CODEC_ID_DPX = 128,
    AV_CODEC_ID_MAD = 129,
    AV_CODEC_ID_FRWU = 130,
    AV_CODEC_ID_FLASHSV2 = 131,
    AV_CODEC_ID_CDGRAPHICS = 132,
    AV_CODEC_ID_R210 = 133,
    AV_CODEC_ID_ANM = 134,
    AV_CODEC_ID_BINKVIDEO = 135,
    AV_CODEC_ID_IFF_ILBM = 136,
    AV_CODEC_ID_IFF_BYTERUN1 = 136,
    AV_CODEC_ID_KGV1 = 137,
    AV_CODEC_ID_YOP = 138,
    AV_CODEC_ID_VP8 = 139,
    AV_CODEC_ID_PICTOR = 140,
    AV_CODEC_ID_ANSI = 141,
    AV_CODEC_ID_A64_MULTI = 142,
    AV_CODEC_ID_A64_MULTI5 = 143,
    AV_CODEC_ID_R10K = 144,
    AV_CODEC_ID_MXPEG = 145,
    AV_CODEC_ID_LAGARITH = 146,
    AV_CODEC_ID_PRORES = 147,
    AV_CODEC_ID_JV = 148,
    AV_CODEC_ID_DFA = 149,
    AV_CODEC_ID_WMV3IMAGE = 150,
    AV_CODEC_ID_VC1IMAGE = 151,
    AV_CODEC_ID_UTVIDEO = 152,
    AV_CODEC_ID_BMV_VIDEO = 153,
    AV_CODEC_ID_VBLE = 154,
    AV_CODEC_ID_DXTORY = 155,
    AV_CODEC_ID_V410 = 156,
    AV_CODEC_ID_XWD = 157,
    AV_CODEC_ID_CDXL = 158,
    AV_CODEC_ID_XBM = 159,
    AV_CODEC_ID_ZEROCODEC = 160,
    AV_CODEC_ID_MSS1 = 161,
    AV_CODEC_ID_MSA1 = 162,
    AV_CODEC_ID_TSCC2 = 163,
    AV_CODEC_ID_MTS2 = 164,
    AV_CODEC_ID_CLLC = 165,
    AV_CODEC_ID_MSS2 = 166,
    AV_CODEC_ID_VP9 = 167,
    AV_CODEC_ID_AIC = 168,
    AV_CODEC_ID_ESCAPE130 = 169,
    AV_CODEC_ID_G2M = 170,
    AV_CODEC_ID_WEBP = 171,
    AV_CODEC_ID_HNM4_VIDEO = 172,
    AV_CODEC_ID_HEVC = 173,
    AV_CODEC_ID_H265 = 173,
    AV_CODEC_ID_FIC = 174,
    AV_CODEC_ID_ALIAS_PIX = 175,
    AV_CODEC_ID_BRENDER_PIX = 176,
    AV_CODEC_ID_PAF_VIDEO = 177,
    AV_CODEC_ID_EXR = 178,
    AV_CODEC_ID_VP7 = 179,
    AV_CODEC_ID_SANM = 180,
    AV_CODEC_ID_SGIRLE = 181,
    AV_CODEC_ID_MVC1 = 182,
    AV_CODEC_ID_MVC2 = 183,
    AV_CODEC_ID_HQX = 184,
    AV_CODEC_ID_TDSC = 185,
    AV_CODEC_ID_HQ_HQA = 186,
    AV_CODEC_ID_HAP = 187,
    AV_CODEC_ID_DDS = 188,
    AV_CODEC_ID_DXV = 189,
    AV_CODEC_ID_SCREENPRESSO = 190,
    AV_CODEC_ID_RSCC = 191,
    AV_CODEC_ID_AVS2 = 192,
    AV_CODEC_ID_PGX = 193,
    AV_CODEC_ID_AVS3 = 194,
    AV_CODEC_ID_MSP2 = 195,
    AV_CODEC_ID_VVC = 196,
    AV_CODEC_ID_H266 = 196,
    AV_CODEC_ID_Y41P = 197,
    AV_CODEC_ID_AVRP = 198,
    AV_CODEC_ID_012V = 199,
    AV_CODEC_ID_AVUI = 200,
    AV_CODEC_ID_TARGA_Y216 = 201,
    AV_CODEC_ID_V308 = 202,
    AV_CODEC_ID_V408 = 203,
    AV_CODEC_ID_YUV4 = 204,
    AV_CODEC_ID_AVRN = 205,
    AV_CODEC_ID_CPIA = 206,
    AV_CODEC_ID_XFACE = 207,
    AV_CODEC_ID_SNOW = 208,
    AV_CODEC_ID_SMVJPEG = 209,
    AV_CODEC_ID_APNG = 210,
    AV_CODEC_ID_DAALA = 211,
    AV_CODEC_ID_CFHD = 212,
    AV_CODEC_ID_TRUEMOTION2RT = 213,
    AV_CODEC_ID_M101 = 214,
    AV_CODEC_ID_MAGICYUV = 215,
    AV_CODEC_ID_SHEERVIDEO = 216,
    AV_CODEC_ID_YLC = 217,
    AV_CODEC_ID_PSD = 218,
    AV_CODEC_ID_PIXLET = 219,
    AV_CODEC_ID_SPEEDHQ = 220,
    AV_CODEC_ID_FMVC = 221,
    AV_CODEC_ID_SCPR = 222,
    AV_CODEC_ID_CLEARVIDEO = 223,
    AV_CODEC_ID_XPM = 224,
    AV_CODEC_ID_AV1 = 225,
    AV_CODEC_ID_BITPACKED = 226,
    AV_CODEC_ID_MSCC = 227,
    AV_CODEC_ID_SRGC = 228,
    AV_CODEC_ID_SVG = 229,
    AV_CODEC_ID_GDV = 230,
    AV_CODEC_ID_FITS = 231,
    AV_CODEC_ID_IMM4 = 232,
    AV_CODEC_ID_PROSUMER = 233,
    AV_CODEC_ID_MWSC = 234,
    AV_CODEC_ID_WCMV = 235,
    AV_CODEC_ID_RASC = 236,
    AV_CODEC_ID_HYMT = 237,
    AV_CODEC_ID_ARBC = 238,
    AV_CODEC_ID_AGM = 239,
    AV_CODEC_ID_LSCR = 240,
    AV_CODEC_ID_VP4 = 241,
    AV_CODEC_ID_IMM5 = 242,
    AV_CODEC_ID_MVDV = 243,
    AV_CODEC_ID_MVHA = 244,
    AV_CODEC_ID_CDTOONS = 245,
    AV_CODEC_ID_MV30 = 246,
    AV_CODEC_ID_NOTCHLC = 247,
    AV_CODEC_ID_PFM = 248,
    AV_CODEC_ID_MOBICLIP = 249,
    AV_CODEC_ID_PHOTOCD = 250,
    AV_CODEC_ID_IPU = 251,
    AV_CODEC_ID_ARGO = 252,
    AV_CODEC_ID_CRI = 253,
    AV_CODEC_ID_SIMBIOSIS_IMX = 254,
    AV_CODEC_ID_SGA_VIDEO = 255,
    AV_CODEC_ID_GEM = 256,
    AV_CODEC_ID_VBN = 257,
    AV_CODEC_ID_JPEGXL = 258,
    AV_CODEC_ID_QOI = 259,
    AV_CODEC_ID_PHM = 260,
    AV_CODEC_ID_RADIANCE_HDR = 261,
    AV_CODEC_ID_WBMP = 262,
    AV_CODEC_ID_MEDIA100 = 263,
    AV_CODEC_ID_VQC = 264,
    AV_CODEC_ID_PDV = 265,
    AV_CODEC_ID_EVC = 266,
    AV_CODEC_ID_RTV1 = 267,
    AV_CODEC_ID_VMIX = 268,
    AV_CODEC_ID_LEAD = 269,
    /**
     * various PCM "codecs"
     */
    /**
     * A dummy id pointing at the start of audio codecs
     */
    AV_CODEC_ID_FIRST_AUDIO = 65536,
    AV_CODEC_ID_PCM_S16LE = 65536,
    AV_CODEC_ID_PCM_S16BE = 65537,
    AV_CODEC_ID_PCM_U16LE = 65538,
    AV_CODEC_ID_PCM_U16BE = 65539,
    AV_CODEC_ID_PCM_S8 = 65540,
    AV_CODEC_ID_PCM_U8 = 65541,
    AV_CODEC_ID_PCM_MULAW = 65542,
    AV_CODEC_ID_PCM_ALAW = 65543,
    AV_CODEC_ID_PCM_S32LE = 65544,
    AV_CODEC_ID_PCM_S32BE = 65545,
    AV_CODEC_ID_PCM_U32LE = 65546,
    AV_CODEC_ID_PCM_U32BE = 65547,
    AV_CODEC_ID_PCM_S24LE = 65548,
    AV_CODEC_ID_PCM_S24BE = 65549,
    AV_CODEC_ID_PCM_U24LE = 65550,
    AV_CODEC_ID_PCM_U24BE = 65551,
    AV_CODEC_ID_PCM_S24DAUD = 65552,
    AV_CODEC_ID_PCM_ZORK = 65553,
    AV_CODEC_ID_PCM_S16LE_PLANAR = 65554,
    AV_CODEC_ID_PCM_DVD = 65555,
    AV_CODEC_ID_PCM_F32BE = 65556,
    AV_CODEC_ID_PCM_F32LE = 65557,
    AV_CODEC_ID_PCM_F64BE = 65558,
    AV_CODEC_ID_PCM_F64LE = 65559,
    AV_CODEC_ID_PCM_BLURAY = 65560,
    AV_CODEC_ID_PCM_LXF = 65561,
    AV_CODEC_ID_S302M = 65562,
    AV_CODEC_ID_PCM_S8_PLANAR = 65563,
    AV_CODEC_ID_PCM_S24LE_PLANAR = 65564,
    AV_CODEC_ID_PCM_S32LE_PLANAR = 65565,
    AV_CODEC_ID_PCM_S16BE_PLANAR = 65566,
    AV_CODEC_ID_PCM_S64LE = 65567,
    AV_CODEC_ID_PCM_S64BE = 65568,
    AV_CODEC_ID_PCM_F16LE = 65569,
    AV_CODEC_ID_PCM_F24LE = 65570,
    AV_CODEC_ID_PCM_VIDC = 65571,
    AV_CODEC_ID_PCM_SGA = 65572,
    /**
     * various ADPCM codecs
     */
    AV_CODEC_ID_ADPCM_IMA_QT = 69632,
    AV_CODEC_ID_ADPCM_IMA_WAV = 69633,
    AV_CODEC_ID_ADPCM_IMA_DK3 = 69634,
    AV_CODEC_ID_ADPCM_IMA_DK4 = 69635,
    AV_CODEC_ID_ADPCM_IMA_WS = 69636,
    AV_CODEC_ID_ADPCM_IMA_SMJPEG = 69637,
    AV_CODEC_ID_ADPCM_MS = 69638,
    AV_CODEC_ID_ADPCM_4XM = 69639,
    AV_CODEC_ID_ADPCM_XA = 69640,
    AV_CODEC_ID_ADPCM_ADX = 69641,
    AV_CODEC_ID_ADPCM_EA = 69642,
    AV_CODEC_ID_ADPCM_G726 = 69643,
    AV_CODEC_ID_ADPCM_CT = 69644,
    AV_CODEC_ID_ADPCM_SWF = 69645,
    AV_CODEC_ID_ADPCM_YAMAHA = 69646,
    AV_CODEC_ID_ADPCM_SBPRO_4 = 69647,
    AV_CODEC_ID_ADPCM_SBPRO_3 = 69648,
    AV_CODEC_ID_ADPCM_SBPRO_2 = 69649,
    AV_CODEC_ID_ADPCM_THP = 69650,
    AV_CODEC_ID_ADPCM_IMA_AMV = 69651,
    AV_CODEC_ID_ADPCM_EA_R1 = 69652,
    AV_CODEC_ID_ADPCM_EA_R3 = 69653,
    AV_CODEC_ID_ADPCM_EA_R2 = 69654,
    AV_CODEC_ID_ADPCM_IMA_EA_SEAD = 69655,
    AV_CODEC_ID_ADPCM_IMA_EA_EACS = 69656,
    AV_CODEC_ID_ADPCM_EA_XAS = 69657,
    AV_CODEC_ID_ADPCM_EA_MAXIS_XA = 69658,
    AV_CODEC_ID_ADPCM_IMA_ISS = 69659,
    AV_CODEC_ID_ADPCM_G722 = 69660,
    AV_CODEC_ID_ADPCM_IMA_APC = 69661,
    AV_CODEC_ID_ADPCM_VIMA = 69662,
    AV_CODEC_ID_ADPCM_AFC = 69663,
    AV_CODEC_ID_ADPCM_IMA_OKI = 69664,
    AV_CODEC_ID_ADPCM_DTK = 69665,
    AV_CODEC_ID_ADPCM_IMA_RAD = 69666,
    AV_CODEC_ID_ADPCM_G726LE = 69667,
    AV_CODEC_ID_ADPCM_THP_LE = 69668,
    AV_CODEC_ID_ADPCM_PSX = 69669,
    AV_CODEC_ID_ADPCM_AICA = 69670,
    AV_CODEC_ID_ADPCM_IMA_DAT4 = 69671,
    AV_CODEC_ID_ADPCM_MTAF = 69672,
    AV_CODEC_ID_ADPCM_AGM = 69673,
    AV_CODEC_ID_ADPCM_ARGO = 69674,
    AV_CODEC_ID_ADPCM_IMA_SSI = 69675,
    AV_CODEC_ID_ADPCM_ZORK = 69676,
    AV_CODEC_ID_ADPCM_IMA_APM = 69677,
    AV_CODEC_ID_ADPCM_IMA_ALP = 69678,
    AV_CODEC_ID_ADPCM_IMA_MTF = 69679,
    AV_CODEC_ID_ADPCM_IMA_CUNNING = 69680,
    AV_CODEC_ID_ADPCM_IMA_MOFLEX = 69681,
    AV_CODEC_ID_ADPCM_IMA_ACORN = 69682,
    AV_CODEC_ID_ADPCM_XMD = 69683,
    /**
     * AMR
     */
    AV_CODEC_ID_AMR_NB = 73728,
    AV_CODEC_ID_AMR_WB = 73729,
    /**
     *  RealAudio codecs
     */
    AV_CODEC_ID_RA_144 = 77824,
    AV_CODEC_ID_RA_288 = 77825,
    /**
     * various DPCM codecs
     */
    AV_CODEC_ID_ROQ_DPCM = 81920,
    AV_CODEC_ID_INTERPLAY_DPCM = 81921,
    AV_CODEC_ID_XAN_DPCM = 81922,
    AV_CODEC_ID_SOL_DPCM = 81923,
    AV_CODEC_ID_SDX2_DPCM = 81924,
    AV_CODEC_ID_GREMLIN_DPCM = 81925,
    AV_CODEC_ID_DERF_DPCM = 81926,
    AV_CODEC_ID_WADY_DPCM = 81927,
    AV_CODEC_ID_CBD2_DPCM = 81928,
    /**
     * audio codecs
     */
    AV_CODEC_ID_MP2 = 86016,
    /**
     * preferred ID for decoding MPEG audio layer 1, 2 or 3
     */
    AV_CODEC_ID_MP3 = 86017,
    AV_CODEC_ID_AAC = 86018,
    AV_CODEC_ID_AC3 = 86019,
    AV_CODEC_ID_DTS = 86020,
    AV_CODEC_ID_VORBIS = 86021,
    AV_CODEC_ID_DVAUDIO = 86022,
    AV_CODEC_ID_WMAV1 = 86023,
    AV_CODEC_ID_WMAV2 = 86024,
    AV_CODEC_ID_MACE3 = 86025,
    AV_CODEC_ID_MACE6 = 86026,
    AV_CODEC_ID_VMDAUDIO = 86027,
    AV_CODEC_ID_FLAC = 86028,
    AV_CODEC_ID_MP3ADU = 86029,
    AV_CODEC_ID_MP3ON4 = 86030,
    AV_CODEC_ID_SHORTEN = 86031,
    AV_CODEC_ID_ALAC = 86032,
    AV_CODEC_ID_WESTWOOD_SND1 = 86033,
    /**
     * as in Berlin toast format
     */
    AV_CODEC_ID_GSM = 86034,
    AV_CODEC_ID_QDM2 = 86035,
    AV_CODEC_ID_COOK = 86036,
    AV_CODEC_ID_TRUESPEECH = 86037,
    AV_CODEC_ID_TTA = 86038,
    AV_CODEC_ID_SMACKAUDIO = 86039,
    AV_CODEC_ID_QCELP = 86040,
    AV_CODEC_ID_WAVPACK = 86041,
    AV_CODEC_ID_DSICINAUDIO = 86042,
    AV_CODEC_ID_IMC = 86043,
    AV_CODEC_ID_MUSEPACK7 = 86044,
    AV_CODEC_ID_MLP = 86045,
    /**
     * as found in WAV
     */
    AV_CODEC_ID_GSM_MS = 86046,
    AV_CODEC_ID_ATRAC3 = 86047,
    AV_CODEC_ID_APE = 86048,
    AV_CODEC_ID_NELLYMOSER = 86049,
    AV_CODEC_ID_MUSEPACK8 = 86050,
    AV_CODEC_ID_SPEEX = 86051,
    AV_CODEC_ID_WMAVOICE = 86052,
    AV_CODEC_ID_WMAPRO = 86053,
    AV_CODEC_ID_WMALOSSLESS = 86054,
    AV_CODEC_ID_ATRAC3P = 86055,
    AV_CODEC_ID_EAC3 = 86056,
    AV_CODEC_ID_SIPR = 86057,
    AV_CODEC_ID_MP1 = 86058,
    AV_CODEC_ID_TWINVQ = 86059,
    AV_CODEC_ID_TRUEHD = 86060,
    AV_CODEC_ID_MP4ALS = 86061,
    AV_CODEC_ID_ATRAC1 = 86062,
    AV_CODEC_ID_BINKAUDIO_RDFT = 86063,
    AV_CODEC_ID_BINKAUDIO_DCT = 86064,
    AV_CODEC_ID_AAC_LATM = 86065,
    AV_CODEC_ID_QDMC = 86066,
    AV_CODEC_ID_CELT = 86067,
    AV_CODEC_ID_G723_1 = 86068,
    AV_CODEC_ID_G729 = 86069,
    AV_CODEC_ID_8SVX_EXP = 86070,
    AV_CODEC_ID_8SVX_FIB = 86071,
    AV_CODEC_ID_BMV_AUDIO = 86072,
    AV_CODEC_ID_RALF = 86073,
    AV_CODEC_ID_IAC = 86074,
    AV_CODEC_ID_ILBC = 86075,
    AV_CODEC_ID_OPUS = 86076,
    AV_CODEC_ID_COMFORT_NOISE = 86077,
    AV_CODEC_ID_TAK = 86078,
    AV_CODEC_ID_METASOUND = 86079,
    AV_CODEC_ID_PAF_AUDIO = 86080,
    AV_CODEC_ID_ON2AVC = 86081,
    AV_CODEC_ID_DSS_SP = 86082,
    AV_CODEC_ID_CODEC2 = 86083,
    AV_CODEC_ID_FFWAVESYNTH = 86084,
    AV_CODEC_ID_SONIC = 86085,
    AV_CODEC_ID_SONIC_LS = 86086,
    AV_CODEC_ID_EVRC = 86087,
    AV_CODEC_ID_SMV = 86088,
    AV_CODEC_ID_DSD_LSBF = 86089,
    AV_CODEC_ID_DSD_MSBF = 86090,
    AV_CODEC_ID_DSD_LSBF_PLANAR = 86091,
    AV_CODEC_ID_DSD_MSBF_PLANAR = 86092,
    AV_CODEC_ID_4GV = 86093,
    AV_CODEC_ID_INTERPLAY_ACM = 86094,
    AV_CODEC_ID_XMA1 = 86095,
    AV_CODEC_ID_XMA2 = 86096,
    AV_CODEC_ID_DST = 86097,
    AV_CODEC_ID_ATRAC3AL = 86098,
    AV_CODEC_ID_ATRAC3PAL = 86099,
    AV_CODEC_ID_DOLBY_E = 86100,
    AV_CODEC_ID_APTX = 86101,
    AV_CODEC_ID_APTX_HD = 86102,
    AV_CODEC_ID_SBC = 86103,
    AV_CODEC_ID_ATRAC9 = 86104,
    AV_CODEC_ID_HCOM = 86105,
    AV_CODEC_ID_ACELP_KELVIN = 86106,
    AV_CODEC_ID_MPEGH_3D_AUDIO = 86107,
    AV_CODEC_ID_SIREN = 86108,
    AV_CODEC_ID_HCA = 86109,
    AV_CODEC_ID_FASTAUDIO = 86110,
    AV_CODEC_ID_MSNSIREN = 86111,
    AV_CODEC_ID_DFPWM = 86112,
    AV_CODEC_ID_BONK = 86113,
    AV_CODEC_ID_MISC4 = 86114,
    AV_CODEC_ID_APAC = 86115,
    AV_CODEC_ID_FTR = 86116,
    AV_CODEC_ID_WAVARC = 86117,
    AV_CODEC_ID_RKA = 86118,
    AV_CODEC_ID_AC4 = 86119,
    AV_CODEC_ID_OSQ = 86120,
    AV_CODEC_ID_QOA = 86121,
    /**
     * subtitle codecs
     */
    /**
     * A dummy ID pointing at the start of subtitle codecs.
     */
    AV_CODEC_ID_FIRST_SUBTITLE = 94208,
    AV_CODEC_ID_DVD_SUBTITLE = 94208,
    AV_CODEC_ID_DVB_SUBTITLE = 94209,
    /**
     * raw UTF-8 text
     */
    AV_CODEC_ID_TEXT = 94210,
    AV_CODEC_ID_XSUB = 94211,
    AV_CODEC_ID_SSA = 94212,
    AV_CODEC_ID_MOV_TEXT = 94213,
    AV_CODEC_ID_HDMV_PGS_SUBTITLE = 94214,
    AV_CODEC_ID_DVB_TELETEXT = 94215,
    AV_CODEC_ID_SRT = 94216,
    AV_CODEC_ID_MICRODVD = 94217,
    AV_CODEC_ID_EIA_608 = 94218,
    AV_CODEC_ID_JACOSUB = 94219,
    AV_CODEC_ID_SAMI = 94220,
    AV_CODEC_ID_REALTEXT = 94221,
    AV_CODEC_ID_STL = 94222,
    AV_CODEC_ID_SUBVIEWER1 = 94223,
    AV_CODEC_ID_SUBVIEWER = 94224,
    AV_CODEC_ID_SUBRIP = 94225,
    AV_CODEC_ID_WEBVTT = 94226,
    AV_CODEC_ID_MPL2 = 94227,
    AV_CODEC_ID_VPLAYER = 94228,
    AV_CODEC_ID_PJS = 94229,
    AV_CODEC_ID_ASS = 94230,
    AV_CODEC_ID_HDMV_TEXT_SUBTITLE = 94231,
    AV_CODEC_ID_TTML = 94232,
    AV_CODEC_ID_ARIB_CAPTION = 94233,
    /**
     * A dummy ID pointing at the start of various fake codecs.
     */
    AV_CODEC_ID_FIRST_UNKNOWN = 98304,
    AV_CODEC_ID_TTF = 98304,
    /**
     * Contain timestamp estimated through PCR of program stream.
     */
    AV_CODEC_ID_SCTE_35 = 98305,
    AV_CODEC_ID_EPG = 98306,
    AV_CODEC_ID_BINTEXT = 98307,
    AV_CODEC_ID_XBIN = 98308,
    AV_CODEC_ID_IDF = 98309,
    AV_CODEC_ID_OTF = 98310,
    AV_CODEC_ID_SMPTE_KLV = 98311,
    AV_CODEC_ID_DVD_NAV = 98312,
    AV_CODEC_ID_TIMED_ID3 = 98313,
    AV_CODEC_ID_BIN_DATA = 98314,
    AV_CODEC_ID_SMPTE_2038 = 98315,
    /**
     *  codec_id is not known (like AV_CODEC_ID_NONE) but lavf should attempt to identify it
     */
    AV_CODEC_ID_PROBE = 102400,
    /**
     * _FAKE_ codec to indicate a raw MPEG-2 TS stream (only used by libavformat)
     */
    AV_CODEC_ID_MPEG2TS = 131072,
    /**
     * _FAKE_ codec to indicate a MPEG-4 Systems stream (only used by libavformat)
     */
    AV_CODEC_ID_MPEG4SYSTEMS = 131073,
    /**
     * Dummy codec for streams containing only metadata information.
     */
    AV_CODEC_ID_FFMETADATA = 135168,
    /**
     * Passthrough codec, AVFrames wrapped in AVPacket
     */
    AV_CODEC_ID_WRAPPED_AVFRAME = 135169,
    /**
     * Dummy null video codec, useful mainly for development and debugging.
     * Null encoder/decoder discard all input and never return any output.
     */
    AV_CODEC_ID_VNULL = 135170,
    /**
     * Dummy null audio codec, useful mainly for development and debugging.
     * Null encoder/decoder discard all input and never return any output.
     */
    AV_CODEC_ID_ANULL = 135171
}
export declare const enum AVPacketSideDataType {
    AV_PKT_DATA_UNKNOWN = -1,
    /**
     * An AV_PKT_DATA_PALETTE side data packet contains exactly AVPALETTE_SIZE
     * bytes worth of palette. This side data signals that a new palette is
     * present.
     */
    AV_PKT_DATA_PALETTE = 0,
    /**
     * The AV_PKT_DATA_NEW_EXTRADATA is used to notify the codec or the format
     * that the extradata buffer was changed and the receiving side should
     * act upon it appropriately. The new extradata is embedded in the side
     * data buffer and should be immediately used for processing the current
     * frame or packet.
     */
    AV_PKT_DATA_NEW_EXTRADATA = 1,
    /**
     * An AV_PKT_DATA_PARAM_CHANGE side data packet is laid out as follows:
     * @code
     * u32le param_flags
     * if (param_flags & AV_SIDE_DATA_PARAM_CHANGE_CHANNEL_COUNT)
     *     s32le channel_count
     * if (param_flags & AV_SIDE_DATA_PARAM_CHANGE_CHANNEL_LAYOUT)
     *     u64le channel_layout
     * if (param_flags & AV_SIDE_DATA_PARAM_CHANGE_SAMPLE_RATE)
     *     s32le sample_rate
     * if (param_flags & AV_SIDE_DATA_PARAM_CHANGE_DIMENSIONS)
     *     s32le width
     *     s32le height
     * @endcode
     */
    AV_PKT_DATA_PARAM_CHANGE = 2,
    /**
     * An AV_PKT_DATA_H263_MB_INFO side data packet contains a number of
     * structures with info about macroblocks relevant to splitting the
     * packet into smaller packets on macroblock edges (e.g. as for RFC 2190).
     * That is, it does not necessarily contain info about all macroblocks,
     * as long as the distance between macroblocks in the info is smaller
     * than the target payload size.
     * Each MB info structure is 12 bytes, and is laid out as follows:
     * @code
     * u32le bit offset from the start of the packet
     * u8    current quantizer at the start of the macroblock
     * u8    GOB number
     * u16le macroblock address within the GOB
     * u8    horizontal MV predictor
     * u8    vertical MV predictor
     * u8    horizontal MV predictor for block number 3
     * u8    vertical MV predictor for block number 3
     * @endcode
     */
    AV_PKT_DATA_H263_MB_INFO = 3,
    /**
     * This side data should be associated with an audio stream and contains
     * ReplayGain information in form of the AVReplayGain struct.
     */
    AV_PKT_DATA_REPLAYGAIN = 4,
    /**
     * This side data contains a 3x3 transformation matrix describing an affine
     * transformation that needs to be applied to the decoded video frames for
     * correct presentation.
     *
     * See libcommon/display.h for a detailed description of the data.
     */
    AV_PKT_DATA_DISPLAYMATRIX = 5,
    /**
     * This side data should be associated with a video stream and contains
     * Stereoscopic 3D information in form of the AVStereo3D struct.
     */
    AV_PKT_DATA_STEREO3D = 6,
    /**
     * This side data should be associated with an audio stream and corresponds
     * to enum AVAudioServiceType.
     */
    AV_PKT_DATA_AUDIO_SERVICE_TYPE = 7,
    /**
     * This side data contains quality related information from the encoder.
     * @code
     * u32le quality factor of the compressed frame. Allowed range is between 1 (good) and FF_LAMBDA_MAX (bad).
     * u8    picture type
     * u8    error count
     * u16   reserved
     * u64le[error count] sum of squared differences between encoder in and output
     * @endcode
     */
    AV_PKT_DATA_QUALITY_STATS = 8,
    /**
     * This side data contains an integer value representing the stream index
     * of a "fallback" track.  A fallback track indicates an alternate
     * track to use when the current track can not be decoded for some reason.
     * e.g. no decoder available for codec.
     */
    AV_PKT_DATA_FALLBACK_TRACK = 9,
    /**
     * This side data corresponds to the AVCPBProperties struct.
     */
    AV_PKT_DATA_CPB_PROPERTIES = 10,
    /**
     * Recommmends skipping the specified number of samples
     * @code
     * u32le number of samples to skip from start of this packet
     * u32le number of samples to skip from end of this packet
     * u8    reason for start skip
     * u8    reason for end   skip (0=padding silence, 1=convergence)
     * @endcode
     */
    AV_PKT_DATA_SKIP_SAMPLES = 11,
    /**
     * An AV_PKT_DATA_JP_DUALMONO side data packet indicates that
     * the packet may contain "dual mono" audio specific to Japanese DTV
     * and if it is true, recommends only the selected channel to be used.
     * @code
     * u8    selected channels (0=mail/left, 1=sub/right, 2=both)
     * @endcode
     */
    AV_PKT_DATA_JP_DUALMONO = 12,
    /**
     * A list of zero terminated key/value strings. There is no end marker for
     * the list, so it is required to rely on the side data size to stop.
     */
    AV_PKT_DATA_STRINGS_METADATA = 13,
    /**
     * Subtitle event position
     * @code
     * u32le x1
     * u32le y1
     * u32le x2
     * u32le y2
     * @endcode
     */
    AV_PKT_DATA_SUBTITLE_POSITION = 14,
    /**
     * Data found in BlockAdditional element of matroska container. There is
     * no end marker for the data, so it is required to rely on the side data
     * size to recognize the end. 8 byte id (as found in BlockAddId) followed
     * by data.
     */
    AV_PKT_DATA_MATROSKA_BLOCKADDITIONAL = 15,
    /**
     * The optional first identifier line of a WebVTT cue.
     */
    AV_PKT_DATA_WEBVTT_IDENTIFIER = 16,
    /**
     * The optional settings (rendering instructions) that immediately
     * follow the timestamp specifier of a WebVTT cue.
     */
    AV_PKT_DATA_WEBVTT_SETTINGS = 17,
    /**
     * A list of zero terminated key/value strings. There is no end marker for
     * the list, so it is required to rely on the side data size to stop. This
     * side data includes updated metadata which appeared in the stream.
     */
    AV_PKT_DATA_METADATA_UPDATE = 18,
    /**
     * MPEGTS stream ID as uint8_t, this is required to pass the stream ID
     * information from the demuxer to the corresponding muxer.
     */
    AV_PKT_DATA_MPEGTS_STREAM_ID = 19,
    /**
     * Mastering display metadata (based on SMPTE-2086:2014). This metadata
     * should be associated with a video stream and contains data in the form
     * of the AVMasteringDisplayMetadata struct.
     */
    AV_PKT_DATA_MASTERING_DISPLAY_METADATA = 20,
    /**
     * This side data should be associated with a video stream and corresponds
     * to the AVSphericalMapping structure.
     */
    AV_PKT_DATA_SPHERICAL = 21,
    /**
     * Content light level (based on CTA-861.3). This metadata should be
     * associated with a video stream and contains data in the form of the
     * AVContentLightMetadata struct.
     */
    AV_PKT_DATA_CONTENT_LIGHT_LEVEL = 22,
    /**
     * ATSC A53 Part 4 Closed Captions. This metadata should be associated with
     * a video stream. A53 CC bitstream is stored as uint8_t in AVPacketSideData.data.
     * The number of bytes of CC data is AVPacketSideData.size.
     */
    AV_PKT_DATA_A53_CC = 23,
    /**
     * This side data is encryption initialization data.
     * The format is not part of ABI, use av_encryption_init_info_* methods to
     * access.
     */
    AV_PKT_DATA_ENCRYPTION_INIT_INFO = 24,
    /**
     * This side data contains encryption info for how to decrypt the packet.
     * The format is not part of ABI, use av_encryption_info_* methods to access.
     */
    AV_PKT_DATA_ENCRYPTION_INFO = 25,
    /**
     * Active Format Description data consisting of a single byte as specified
     * in ETSI TS 101 154 using AVActiveFormatDescription enum.
     */
    AV_PKT_DATA_AFD = 26,
    /**
     * Producer Reference Time data corresponding to the AVProducerReferenceTime struct,
     * usually exported by some encoders (on demand through the prft flag set in the
     * AVCodecContext export_side_data field).
     */
    AV_PKT_DATA_PRFT = 27,
    /**
     * ICC profile data consisting of an opaque octet buffer following the
     * format described by ISO 15076-1.
     */
    AV_PKT_DATA_ICC_PROFILE = 28,
    /**
     * DOVI configuration
     * ref:
     * dolby-vision-bitstreams-within-the-iso-base-media-file-format-v2.1.2, section 2.2
     * dolby-vision-bitstreams-in-mpeg-2-transport-stream-multiplex-v1.2, section 3.3
     * Tags are stored in struct AVDOVIDecoderConfigurationRecord.
     */
    AV_PKT_DATA_DOVI_CONF = 29,
    /**
     * Timecode which conforms to SMPTE ST 12-1:2014. The data is an array of 4 uint32_t
     * where the first uint32_t describes how many (1-3) of the other timecodes are used.
     * The timecode format is described in the documentation of av_timecode_get_smpte_from_framenum()
     * function in libcommon/timecode.h.
     */
    AV_PKT_DATA_S12M_TIMECODE = 30,
    /**
     * HDR10+ dynamic metadata associated with a video frame. The metadata is in
     * the form of the AVDynamicHDRPlus struct and contains
     * information for color volume transform - application 4 of
     * SMPTE 2094-40:2016 standard.
     */
    AV_PKT_DATA_DYNAMIC_HDR10_PLUS = 31,
    /**
     * The number of side data types.
     * This is not part of the public API/ABI in the sense that it may
     * change when new side data types are added.
     * This must stay the last enum value.
     * If its value becomes huge, some code using it
     * needs to be updated as it assumes it to be smaller than other limits.
     */
    AV_PKT_DATA_NB = 32
}
