import IOReader from 'common/io/IOReader';
import IOWriter from 'common/io/IOWriterSync';
import AVCodecParameters from 'avutil/struct/avcodecparameters';
import IOReaderSync from 'common/io/IOReaderSync';
export interface PagePayload {
    signature: string;
    read(ioReader: IOReaderSync): void;
    write(ioWriter: IOWriter): void;
    setCodec(codecpar: AVCodecParameters): void;
    streamIndex: number;
}
declare class UserComment {
    list: string[];
    constructor();
    read(ioReader: IOReaderSync, count: number): void;
    write(ioWriter: IOWriter): void;
    addComment(comment: string): void;
}
export declare class OggPage {
    /**
     * 4 bytes 页标识， OggS ASCII 字符
     */
    capturePattern: string;
    /**
     * 1 bytes 版本 id, 目前为 0
     */
    streamStructureVersion: number;
    /**
     * 1 bytes 类型标识， 表示该页为逻辑流的第一页
     *
     * - 0x01：本页媒体编码数据与前一页属于同一个逻辑流的同一个 packet，若此位没有设，表示本页是以一个新的 packet 开始的；
     * - 0x02：表示该页为逻辑流的第一页，bos 标识，如果此位未设置，那表示不是第一页；
     * - 0x04：表示该页为逻辑流的最后一页，eos 标识，如果此位未设置，那表示本页不是最后一页；
     */
    headerTypeFlag: number;
    /**
     * 8 bytes 媒体编码相关的参数信息
     *
     * 对于音频流来说，它存储着到本页为止逻辑流在 PCM 输出中采样码的数目，可以由它来算得时间戳
     * 对于视频流来说，它存储着到本页为止视频帧编码的数目
     * 若此值为 -1，那表示截止到本页，逻辑流的 packet 未结束
     */
    granulePosition: bigint;
    /**
     * 4 bytes 当前页中的流的 id，它是区分本页所属逻辑流与其他逻辑流的序号，我们可以通过这个值来划分流
     */
    serialNumber: number;
    /**
     * 4 bytes 本页在逻辑流的序号
     */
    pageSequenceNumber: number;
    /**
     * 4 bytes 循环冗余效验码效验， 用来效验每页的有效性
     */
    crcCheckSum: number;
    /**
     * 1 bytes 给定本页在 segment_table 域中出现的 segment 个数
     */
    numberPageSegments: number;
    /**
     * segment 长度表
     *
     * 表示着每个 segment 的长度，取值范围是 0~255
     * 由 segment（1 个 segment 就是 1 个字节）可以得到 packet 的值，每个 packet 的大小是以最后一个不等于 255 的 segment 结束的
     */
    segmentTable: number[];
    payload: Uint8Array;
    pos: int64;
    constructor();
    reset(): void;
    read(ioReader: IOReader): Promise<void>;
    readPageHeader(ioReader: IOReader): Promise<void>;
    write(ioWriter: IOWriter): void;
}
export declare class OggsCommentPage implements PagePayload {
    streamIndex: number;
    /**
     * 8 bytes Magic Signature: OpusTags
     */
    signature: string;
    /**
     * 4 bytes unsigned
     */
    vendorStringLength: number;
    /**
     * 长度由 Vendor String Length 指定， utf-8 编码
     */
    vendorString: string;
    /**
     * 4 bytes unsigned, 该字段指示用户提供的注释数。它可能表示用户提供的评论为零，在这种情况下数据包中没有其他字段。
     * 一定不要表示评论太多，以至于评论字符串长度将需要比其余的可用数据更多的数据数据包
     */
    userCommentListLength: number;
    comments: UserComment;
    constructor();
    read(ioReader: IOReaderSync): void;
    write(ioWriter: IOWriter): void;
    addComment(comment: string): void;
    setCodec(codecpar: AVCodecParameters): void;
}
export {};
