import AVPacket from '../struct/avpacket';
import AVStream from '../AVStream';
import { Uint8ArrayInterface } from 'common/io/interface';
import { Data } from 'common/types/type';
export declare const enum VVCNaluType {
    kTRAIL_NUT = 0,
    kSTSA_NUT = 1,
    kRADL_NUT = 2,
    kRASL_NUT = 3,
    kRSV_VCL_4 = 4,
    kRSV_VCL_5 = 5,
    kRSV_VCL_6 = 6,
    kIDR_W_RADL = 7,
    kIDR_N_LP = 8,
    kCRA_NUT = 9,
    kGDR_NUT = 10,
    kRSV_IRAP_11 = 11,
    kOPI_NUT = 12,
    kDCI_NUT = 13,
    kVPS_NUT = 14,
    kSPS_NUT = 15,
    kPPS_NUT = 16,
    kPREFIX_APS_NUT = 17,
    kSUFFIX_APS_NUT = 18,
    kPH_NUT = 19,
    kAUD_NUT = 20,
    kEOS_NUT = 21,
    kEOB_NUT = 22,
    kPREFIX_SEI_NUT = 23,
    kSUFFIX_SEI_NUT = 24,
    kFD_NUT = 25,
    kRSV_NVCL_26 = 26,
    kRSV_NVCL_27 = 27,
    kUNSPEC_28 = 28,
    kUNSPEC_29 = 29,
    kUNSPEC_30 = 30,
    kUNSPEC_31 = 31
}
export declare const enum VVCSliceType {
    kSliceNone = -1,
    kSliceB = 0,
    kSliceP = 1,
    kSliceI = 2
}
export declare const enum VVCAPSType {
    kALF = 0,
    kLMCS = 1,
    kSCALING = 2
}
/**
 *
 * vvcc 格式的 extradata 转 annexb vps sps pps
 *
 * bits
 * - 5   reserved (11111)
 * - 2   lengthSizeMinusOne
 * - 1   ptl_present_flag
 * if ptl_present_flag
 *   - 9   ols_idx
 *   - 3  num_sublayers
 *   - 2  constant_frame_rate
 *   - 2  chroma_format_idc
 *   - 3  bit_depth_minus8
 *   - 5  reserved (11111)
 *   VvcPTLRecord
 *   - 2 reserved (11)
 *   - 6 num_bytes_constraint_info
 *   - 7 general_profile_idc
 *   - 1 general_tier_flag
 *   - 8 general_level_idc
 *   - 1 general_level_idc
 *   - 1 ptl_multilayer_enabled_flag
 *   if num_bytes_constraint_info > 0
 *      for (i = 0; i < num_bytes_constraint_info - 1; i++)
 *        - 8 general_constraint_info[i]
 *      - 6 general_constraint_info[num_bytes_constraint_info - 1]
 *   else
 *      - 6 reserved
 *   if num_sublayers > 1
 *      - num_sublayers - 2 ptl_sublayer_level_present_flag
 *      - 8 - num_sublayers + 1 ptl_reserved_zero_bit
 *      for (i = num_sublayers -2; i >= 0; i--)
 *        if ptl_sublayer_present_mask & (1 << i)
 *          - 8 sublayer_level_idc[i]
 *    - 8 ptl_num_sub_profiles
 *    if ptl_num_sub_profiles
 *      for (i = 0; i < ptl_num_sub_profiles; i++)
 *        - 32 general_sub_profile_idc[i]
 *    - 16 max_picture_width
 *    - 16 max_picture_height
 *    - 16 avg_frame_rate
 * - 8   numOfArrays
 * - repeated of array (vps/sps/pps)
 * - 1   array_completeness
 * - 2   reserved (0)
 * - 5   NAL_unit_type
 * if nalu_type != VVC_NALU_DEC_PARAM && nalu_type != VVC_NALU_OPI
 *    - 16  numNalus
 * else
 *   numNalus = 1
 * - repeated once per NAL
 * - 16  nalUnitLength
 * - N   NALU data
 *
 */
export declare function extradata2VpsSpsPps(extradata: Uint8ArrayInterface): {
    vpss: Uint8ArrayInterface[];
    spss: Uint8ArrayInterface[];
    ppss: Uint8ArrayInterface[];
};
/**
 * annexb vps sps pps 转 avcc 格式的 extradata
 *
 * @param vpss
 * @param spss
 * @param ppss
 * @returns
 */
export declare function vpsSpsPps2Extradata(vpss: Uint8ArrayInterface[], spss: Uint8ArrayInterface[], ppss: Uint8ArrayInterface[]): Uint8Array<ArrayBuffer>;
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
 * 提取出 vps、 sps 和 pps
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
 *
 */
export declare function annexb2Avcc(data: Uint8ArrayInterface, reverseSps?: boolean): {
    bufferPointer: pointer<uint8>;
    length: number;
    extradata: Uint8Array<ArrayBufferLike>;
    key: boolean;
};
/**
 *
 * 需要保证 data 是 safe 的
 *
 * @param vpss
 * @param spss
 * @param ppss
 * @param nalus
 * @returns
 */
export declare function nalus2Annexb(vpss: Uint8ArrayInterface[], spss: Uint8ArrayInterface[], ppss: Uint8ArrayInterface[], nalus: Uint8ArrayInterface[], key: boolean): {
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
 *
 */
export declare function avcc2Annexb(data: Uint8ArrayInterface, extradata?: Uint8ArrayInterface): {
    key: boolean;
    bufferPointer: pointer<uint8>;
    length: number;
};
export declare function parseAVCodecParametersBySps(stream: AVStream, sps: Uint8ArrayInterface): void;
export declare function parseAVCodecParameters(stream: AVStream, extradata?: Uint8ArrayInterface): void;
export declare function isIDR(avpacket: pointer<AVPacket>, naluLengthSize?: int32): boolean;
export interface VvcSPS {
    profile: number;
    level: number;
    width: number;
    height: number;
    videoDelay: number;
    chromaFormatIdc: number;
    bitDepthMinus8: number;
    generalProfileSpace: number;
    tierFlag: number;
    generalConstraintInfo: number[];
    generalSubProfileIdc: number[];
    ptlFrameOnlyConstraintFlag: number;
    ptlMultilayerEnabledFlag: number;
    spsMaxSublayersMinus1: number;
    ptlSublayerLevelPresentFlag: number[];
    sublayerLevelIdc: number[];
    sps_log2_max_pic_order_cnt_lsb_minus4: number;
    sps_poc_msb_cycle_flag: number;
    sps_poc_msb_cycle_len_minus1: number;
    sps_num_extra_ph_bytes: number;
    sps_extra_ph_bit_present_flag: number[];
}
export declare function parseSPS(sps: Uint8ArrayInterface): VvcSPS;
export declare function parseExtraData(extradata: Uint8ArrayInterface): Data | {
    olsIdx: number;
    numSublayers: number;
    bitDepthMinus8: number;
    chromaFormatIdc: number;
    constantFrameRate: number;
    generalProfileIdc: number;
    generalTierFlag: number;
    generalLevelIdc: number;
    ptlFrameOnlyConstraintFlag: number;
    ptlMultilayerEnabledFlag: number;
    generalConstraintInfo: any[];
    sublayerLevelIdc: any[];
    generalSubProfileIdc: any[];
    maxPictureWidth: number;
    maxPictureHeight: number;
    avgFramerate: number;
};
