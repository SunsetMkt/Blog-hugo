/**
 * oggs opus IDPage 和 commentPage
 *
 * https://datatracker.ietf.org/doc/html/rfc7845
 */
import IOWriter from 'common/io/IOWriterSync';
import AVCodecParameters from 'avutil/struct/avcodecparameters';
import { OggsCommentPage, PagePayload } from './OggPage';
import IOReaderSync from 'common/io/IOReaderSync';
declare class ChannelMapping {
    /**
     * 1 bytes, unsigned ogg packet 里面编码了多少路 stream
     *
     */
    streamCount: number;
    /**
     * 1 bytes, unsigned 标识有多少路流是双声声道，必须小于 streamCount
     * opus 要支持超过 2 个声道是使用单声道流和双声道流组合而成
     * 一个 opus 流只能是单声道或双声道
     *
     */
    coupledStreamCount: number;
    /**
     * C bytes, C 为总输出声道数 coupledStreamCount + streamCount
     */
    mapping: Uint8Array;
    constructor();
    read(ioReader: IOReaderSync): void;
    write(ioWriter: IOWriter): void;
}
export declare class OpusOggsIdPage implements PagePayload {
    streamIndex: number;
    /**
     * 8 bytes Magic Signature: OpusHead
     */
    signature: string;
    /**
     * 1 bytes unsigned, 对应值 0x01
     */
    version: number;
    /**
     * 1 bytes unsigned, 声道数， 它可能和编码声道数不一致， 它可能被修改成 packet-by-packet, 对应值 0x01
     */
    channels: number;
    /**
     * 2 bytes unsigned, 这是要从开始播放时的解码器输出， 从页面的颗粒位置减去以计算其 PCM 样本位置。
     */
    preSkip: number;
    /**
     * 4 bytes unsigned, 原始输入采样率
     */
    sampleRate: number;
    /**
     * 2 bytes signed, 这是解码时要应用的增益， 20 * log10 缩放解码器输出以实现所需的播放音量
     */
    outputGain: number;
    /**
     * 1 bytes unsigned, 指示输出渠道的顺序和语音含义。该八位位组的每个当前指定的值表示一个映射系列，它定义了一组允许的通道数，以及每个允许的通道数的通道名称的有序集合
     */
    channelMappingFamily: number;
    /**
     * 可选， 当 Channel Mapping Family 为 0 时被省略。
     */
    channelMappingTable: ChannelMapping;
    constructor();
    read(ioReader: IOReaderSync): void;
    write(ioWriter: IOWriter): void;
    setCodec(codecpar: AVCodecParameters): void;
}
export declare class OpusOggsCommentPage extends OggsCommentPage {
    constructor();
    read(ioReader: IOReaderSync): void;
    write(ioWriter: IOWriter): void;
    addComment(comment: string): void;
    setCodec(codecpar: AVCodecParameters): void;
}
export {};
