import AVPacket from '../struct/avpacket';
import AVStream from '../AVStream';
import { Uint8ArrayInterface } from 'common/io/interface';
export declare const H264_MAX_DPB_FRAMES = 16;
export declare const NALULengthSizeMinusOne = 3;
export declare const enum PictureType {
    I = 1,
    P = 2,
    B = 3,
    SPS = 4,
    PPS = 5,
    SEI = 6
}
export declare const enum H264NaluType {
    kUnspecified = 0,
    kSliceNonIDR = 1,
    kSliceDPA = 2,
    kSliceDPB = 3,
    kSliceDPC = 4,
    kSliceIDR = 5,
    kSliceSEI = 6,
    kSliceSPS = 7,
    kSlicePPS = 8,
    kSliceAUD = 9,
    kEndOfSequence = 10,
    kEndOfStream = 11,
    kFiller = 12,
    kSPSExt = 13,
    kReserved0 = 14
}
export declare const enum H264SliceType {
    kSliceNone = -1,
    kSliceP = 0,
    kSliceB = 1,
    kSliceI = 2,
    kSliceSP = 5,
    kSliceSB = 6,
    kSliceSI = 7
}
export declare const enum H264Profile {
    kBaseline = 66,
    kMain = 77,
    kHigh = 100,
    kConstrained = 66,
    kHigh10 = 110,
    kHigh422 = 122,
    kHigh444 = 244
}
export declare const H264Profile2Name: Record<H264Profile, string>;
export declare const LevelCapabilities: {
    level: number;
    maxResolution: number;
    maxFrameRate: number;
}[];
export declare function getLevelByResolution(width: number, height: number, fps: number): number;
/**
 *
 * avcc 格式的 extradata 转 annexb sps pps
 *
 * bits
 * - 8   version ( always 0x01 )
 * - 8   avc profile ( sps[0][1] )
 * - 8   avc compatibility ( sps[0][2] )
 * - 8   avc level ( sps[0][3] )
 * - 6   reserved ( all bits on )
 * - 2   NALULengthSizeMinusOne
 * - 3   reserved ( all bits on )
 * - 5   number of SPS NALUs (usually 1)
 * - repeated once per SPS:
 *   - 16         SPS size
 *   - variable   SPS NALU data
 * - 8 number of PPS NALUs (usually 1)
 * - repeated once per PPS:
 *   - 16       PPS size
 *   - variable PPS NALU data
 *
 * - ext (profile !== 66 && profile !== 77 && profile !== 88)
 *  - 6 reserved ( all bits on )
 *  - 2 chroma_format_idc
 *  - 5 reserved ( all bits on )
 *  - 3 bit_depth_luma_minus8
 *  - 5 reserved ( all bits on )
 *  - 3 bit_depth_chroma_minus8
 *  - 8 number of SPS_EXT NALUs
 *    - 16 SPS_EXT size
 *    - variable   SPS_EXT NALU data
 *
 */
export declare function extradata2SpsPps(extradata: Uint8ArrayInterface): {
    spss: Uint8ArrayInterface[];
    ppss: Uint8ArrayInterface[];
    spsExts: Uint8ArrayInterface[];
};
/**
 * annexb sps pps 转 avcc 格式的 extradata
 *
 * @param spss
 * @param ppss
 * @param spsExts
 * @returns
 */
export declare function spsPps2Extradata(spss: Uint8ArrayInterface[], ppss: Uint8ArrayInterface[], spsExts?: Uint8ArrayInterface[]): Uint8Array<ArrayBuffer>;
/**
 * annexb extradata 转 avcc extradata
 *
 * @param data
 * @returns
 */
export declare function annexbExtradata2AvccExtradata(data: Uint8ArrayInterface): Uint8Array<ArrayBuffer>;
/**
 * 从 annexb 码流里面生成 annexb extradata
 *
 * 提取出 sps 和 pps
 *
 * @param data
 * @returns
 */
export declare function generateAnnexbExtradata(data: Uint8ArrayInterface): Uint8Array<ArrayBufferLike>;
/**
 *
 * annexb 格式的 NALU 转 avcc NALU
 *
 * 需要保证 data 是 safe 的
 */
export declare function annexb2Avcc(data: Uint8ArrayInterface, reverseSps?: boolean): {
    bufferPointer: pointer<uint8>;
    length: number;
    key: boolean;
    extradata: Uint8Array<ArrayBufferLike>;
};
/**
 * 需要保证 data 是 safe 的
 *
 * @param spss
 * @param ppss
 * @param spsExts
 * @param seis
 * @param others
 * @returns
 */
export declare function nalus2Annexb(spss: Uint8ArrayInterface[], ppss: Uint8ArrayInterface[], spsExts: Uint8ArrayInterface[], seis: Uint8ArrayInterface[], others: Uint8ArrayInterface[]): {
    bufferPointer: pointer<uint8>;
    length: number;
};
/**
 * annexb 添加 sps pps
 *
 * @param data
 * @param extradata
 */
export declare function annexbAddExtradata(data: Uint8ArrayInterface, extradata: Uint8ArrayInterface): {
    bufferPointer: pointer<uint8>;
    length: number;
};
/**
 * avcc 格式的 NALU 转 annexb NALU
 *
 * 需要保证 data 是 safe 的
 */
export declare function avcc2Annexb(data: Uint8ArrayInterface, extradata?: Uint8ArrayInterface): {
    key: boolean;
    bufferPointer: pointer<uint8>;
    length: number;
};
export declare function parseAVCodecParameters(stream: AVStream, extradata?: Uint8ArrayInterface): void;
export declare function isIDR(avpacket: pointer<AVPacket>, naluLengthSize?: int32): boolean;
export interface H264SPS {
    profile: number;
    level: number;
    width: number;
    height: number;
    chromaFormatIdc: number;
    bitDepthLumaMinus8: number;
    bitDepthChromaMinus8: number;
    frameMbsOnlyFlag: number;
    picOrderCntType: number;
    log2MaxPicOrderCntLsbMinus4: number;
    deltaPicOrderAlwaysZeroFlag: number;
    log2MaxFrameNumMinus4: number;
    videoDelay: number;
}
export declare function parseSPS(sps: Uint8ArrayInterface): H264SPS;
