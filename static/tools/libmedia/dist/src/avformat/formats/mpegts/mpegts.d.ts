import { AVCodecID, AVMediaType } from 'avutil/codec';
export declare const TS_FEC_PACKET_SIZE = 204;
export declare const TS_DVHS_PACKET_SIZE = 192;
export declare const TS_PACKET_SIZE = 188;
export declare const TS_MAX_PACKET_SIZE = 204;
export declare const NB_PID_MAX = 8192;
export declare const USUAL_SECTION_SIZE = 1024;
export declare const MAX_SECTION_SIZE = 4096;
export declare const PROBE_PACKET_MAX_BUF = 8192;
export declare const PROBE_PACKET_MARGIN = 5;
/**
 * maximum size in which we look for synchronization if
 * synchronization is lost
 */
export declare const MAX_RESYNC_SIZE = 65536;
export declare const MAX_PES_PAYLOAD: number;
export declare const MAX_MP4_DESCR_COUNT = 16;
export declare const REGISTRATION_DESCRIPTOR = 5;
export declare const ISO_639_LANGUAGE_DESCRIPTOR = 10;
export declare const enum TSPid {
    /**
     * Program Association Table
     */
    PAT = 0,
    /**
     * Conditional Access Table
     */
    CAT = 1,
    /**
     * Transport Stream Description Table
     */
    TSDT = 2,
    IPMP = 3,
    /**
     * PID from 0x0004 to 0x000F are reserved
     */
    /**
     * Network Information Table
     */
    NIT = 16,
    /**
     * Service Description Table
     */
    SDT = 17,
    /**
     * Bouquet Association Table
     */
    BAT = 17,
    /**
     * Event Information Table
     */
    EIT = 18,
    /**
     * Running Status Table
     */
    RST = 19,
    /**
     * Time and Date Table
     */
    TDT = 20,
    TOT = 20,
    NET_SYNC = 21,
    /**
     * RAR Notification Table
     */
    RNT = 22,
    /**
     * PID from 0x0017 to 0x001B are reserved for future use
     *
     */
    /**
     * PID value 0x001C allocated to link-local inband signalling shall not be
     * used on any broadcast signals. It shall only be used between devices in a
     * controlled environment.
     */
    LINK_LOCAL = 28,
    MEASUREMENT = 29,
    /**
     * Discontinuity Information Table
     */
    DIT = 30,
    /**
     * Selection Information Table
     */
    SIT = 31,
    /**
     * PID from 0x0020 to 0x1FFA may be assigned as needed to PMT, elementary
     * streams and other data tables
     */
    FIRST_OTHER = 32,
    LAST_OTHER = 8186,
    /**
     * PID 0x1FFB is used by DigiCipher 2/ATSC MGT metadata
     * PID from 0x1FFC to 0x1FFE may be assigned as needed to PMT, elementary
     * streams and other data tables
     */
    /**
     * Null packet (used for fixed bandwidth padding)
     */
    NULL = 8191,
    /**
     * m2ts pids
     */
    M2TS_PMT = 256,
    M2TS_PCR = 4097,
    M2TS_VIDEO = 4113,
    M2TS_AUDIO_START = 4352,
    M2TS_PGSSUB_START = 4608,
    M2TS_TEXTSUB = 6144,
    M2TS_SECONDARY_AUDIO_START = 6656,
    M2TS_SECONDARY_VIDEO_START = 6912
}
export declare const enum TSTid {
    /**
     * Program Association section
     */
    PAT = 0,
    /**
     * Conditional Access section
     */
    CAT = 1,
    /**
     * Program Map section
     */
    PMT = 2,
    /**
     * Transport Stream Description section
     */
    TSDT = 3,
    /**
     * TID from 0x04 to 0x3F are reserved
     */
    M4OD = 5,
    /**
     * Network Information section - actual network
     */
    NIT = 64,
    /**
     * Network Information section - actual network
     */
    ONIT = 65,
    /**
     * Service Description section - actual TS
     */
    SDT = 66,
    /**
     * TID from 0x43 to 0x45 are reserved for future use
     */
    /**
     * Service Descrition section - other TS
     */
    OSDT = 70,
    /**
     * TID from 0x47 to 0x49 are reserved for future use
     */
    /**
     * Bouquet Association section
     */
    BAT = 74,
    /**
     * Update Notification Table section
     */
    UNT = 75,
    /**
     * Downloadable Font Info section
     */
    DFI = 76,
    /**
     * TID 0x4D is reserved for future use
     */
    /**
     * Event Information section - actual TS
     */
    EIT = 78,
    /**
     * Event Information section - other TS
     */
    OEIT = 79,
    /**
     * Event Information section schedule - actual TS
     */
    EITS_START = 80,
    /**
     * Event Information section schedule - actual TS
     */
    EITS_END = 95,
    /**
     *  Event Information section schedule - other TS
     */
    OEITS_START = 96,
    /**
     * Event Information section schedule - other TS
     */
    OEITS_END = 111,
    /**
     * Time Date section
     */
    TDT = 112,
    /**
     * Running Status section
     */
    RST = 113,
    /**
     * Stuffing section
     */
    ST = 114,
    /**
     * Time Offset section
     */
    TOT = 115,
    /**
     * Application Inforamtion section
     */
    AIT = 116,
    /**
     * Container section
     */
    CT = 117,
    /**
     * Related Content section
     */
    RCT = 118,
    /**
     * Related Content section
     */
    CIT = 119,
    /**
     * MPE-FEC section
     */
    MPE_FEC = 120,
    /**
     * Resolution Provider Notification section
     */
    RPNT = 121,
    /**
     * MPE-IFEC section
     */
    MPE_IFEC = 122,
    /**
     * Protection Message section
     */
    PROTMT = 123,
    /**
     * TID from 0x7C to 0x7D are reserved for future use
     */
    /**
     * Discontinuity Information section
     */
    DIT = 126,
    /**
     * Selection Information section
     */
    SIT = 127
    /**
     * TID from 0x80 to 0xFE are user defined
     * TID 0xFF is reserved
     */
}
export declare const enum TSStreamType {
    NONE = 0,
    VIDEO_MPEG1 = 1,
    VIDEO_MPEG2 = 2,
    AUDIO_MPEG1 = 3,
    AUDIO_MPEG2 = 4,
    PRIVATE_SECTION = 5,
    PRIVATE_DATA = 6,
    AUDIO_AAC = 15,
    AUDIO_AAC_LATM = 17,
    VIDEO_MPEG4 = 16,
    METADATA = 21,
    VIDEO_H264 = 27,
    VIDEO_HEVC = 36,
    VIDEO_VVC = 51,
    VIDEO_CAVS = 66,
    VIDEO_VC1 = 234,
    VIDEO_DIRAC = 209,
    AUDIO_AC3 = 129,
    AUDIO_DTS = 130,
    AUDIO_TRUEHD = 131,
    kSCTE35 = 134,
    AUDIO_EAC3 = 135
}
/**
 * ISO/IEC 13818-1 Table 2-22
 */
export declare const enum TSStreamId {
    PROGRAM_STREAM_MAP = 188,
    PRIVATE_STREAM_1 = 189,
    PADDING_STREAM = 190,
    PRIVATE_STREAM_2 = 191,
    AUDIO_STREAM_0 = 192,
    VIDEO_STREAM_0 = 224,
    ECM_STREAM = 240,
    EMM_STREAM = 241,
    DSMCC_STREAM = 242,
    TYPE_E_STREAM = 248,
    METADATA_STREAM = 252,
    EXTENDED_STREAM_ID = 253,
    PROGRAM_STREAM_DIRECTORY = 255
}
/**
 * ISO/IEC 13818-1 Table 2-45
 */
export declare const enum TSDescriptor {
    VIDEO_STREAM = 2,
    REGISTRATION = 5,
    ISO_639_LANGUAGE = 10,
    IOD = 29,
    SL = 30,
    FMC = 31,
    METADATA = 38,
    METADATA_STD = 39
}
export declare const StreamType2AVCodecId: Partial<Record<TSStreamType, [AVMediaType, AVCodecID]>>;
