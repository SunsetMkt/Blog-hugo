import Stream from '../AVStream';
import AVCodecParameters from '../struct/avcodecparameters';
import BitReader from 'common/io/BitReader';
import { Uint8ArrayInterface } from 'common/io/interface';
export declare const enum MPEG4AudioObjectTypes {
    NULL = 0,
    /**
     * Main-AAC
     */
    AAC_MAIN = 1,
    /**
     * LC-AAC
     */
    AAC_LC = 2,
    AAC_SSR = 3,
    AAC_LTP = 4,
    /**
     * HE-AAC
     */
    AAC_SBR = 5,
    AAC_SCALABLE = 6,
    AAC_LD = 23,
    AAC_PS = 29,
    LAYER1 = 32,
    LAYER2 = 33,
    /**
     * MP3
     */
    LAYER3 = 34,
    AAC_ELD = 39
}
export declare const AACProfile2Name: Partial<Record<MPEG4AudioObjectTypes, string>>;
export declare const MPEG4SamplingFrequencyIndex: {
    96000: number;
    88200: number;
    64000: number;
    48000: number;
    44100: number;
    32000: number;
    24000: number;
    22050: number;
    16000: number;
    12000: number;
    11025: number;
    8000: number;
    7350: number;
};
export declare const MPEG4SamplingFrequencies: number[];
export declare const MPEG4Channels: number[];
/**
 * 解析 AAC AudioSpecificConfig
 *
 *             frequency
 *              44100Hz        fill bit
 *               4 bit          3 bit
 *              -------         -----
 *    0 0 0 1 0 0 1 0 0 0 0 1 0 0 0 0
 *    ---------         -------
 *      5 bit            4 bit
 *     AAC LC           fl, fr
 *    profile           channel
 *
 * url: https://wiki.multimedia.cx/index.php/MPEG-4_Audio#Audio_Specific_Config
 *
 */
export declare function getAVCodecParameters(extradata: Uint8ArrayInterface): {
    profile: int32;
    sampleRate: int32;
    channels: int32;
};
export declare function parseAVCodecParameters(stream: Stream, extradata?: Uint8ArrayInterface): void;
export declare function avCodecParameters2Extradata(codecpar: AVCodecParameters): Uint8Array<ArrayBuffer>;
export interface AACADTSHeader {
    syncWord: number;
    profile: number;
    sampleRate: number;
    channels: number;
    aacFrameLength: number;
    numberOfRawDataBlocksInFrame: number;
    headerLength: number;
    framePayloadLength: number;
}
export interface AACLATMHeader {
    syncWord: number;
    profile: number;
    sampleRate: number;
    channels: number;
    useSameStreamMux: boolean;
    headerLength: number;
    framePayloadLength: number;
    muxLengthBytes: number;
}
/**
 *
 * adts 封装转 raw
 *
 * bits
 * - 12  syncword
 * - 1   ID (MPEG 标识位，固定为 1)
 * - 2   Layer ( 固定为 0)
 * - 1   Protection Absent ( 指示是否有 CRC 校验，1 表示没有校验）
 * - 2   Profile
 * - 4   Sampling Frequency Index ( 采样率的索引）
 * - 1   Private Bit ( 保留位，一般设置为 0)
 * - 3   Channel Configuration ( 音频通道数）
 * - 1   Original Copy ( 原始拷贝标志位，一般设置为 0)
 * - 1   Home ( 保留位，一般设置为 0)
 * - 1   Copyright Identification Bit（置 0）
 * - 1   Copyright Identification Start（置 0）
 * - 13  Frame Length ( 帧长度，包括 ADTS 头和音频帧数据的长度）
 * - 11  Buffer Fullness ( 缓冲区满度，可用于音频流的同步）
 * - 2   Number of Raw Data Blocks in Frame ( 帧中原始数据块的数量）
 * - 16  CRC (Protection Absent 控制）
 * - N  raw aac data
 *
 */
export declare function parseADTSHeader(buffer: Uint8ArrayInterface): AACADTSHeader | number;
export declare function parseLATMHeader(buffer: Uint8ArrayInterface, bitReader?: BitReader): -1 | AACLATMHeader;
