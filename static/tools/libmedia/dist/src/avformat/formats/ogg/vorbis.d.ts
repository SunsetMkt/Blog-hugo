/**
 * oggs vorbis IDPage 和 commentPage
 *
 * https://datatracker.ietf.org/doc/html/rfc7845
 */
import IOWriter from 'common/io/IOWriterSync';
import AVCodecParameters from 'avutil/struct/avcodecparameters';
import { OggsCommentPage, PagePayload } from './OggPage';
import IOReaderSync from 'common/io/IOReaderSync';
import { Data } from 'common/types/type';
export declare function parseVorbisComment(list: string[], metadata: Data): void;
export declare function addVorbisComment(metadata: Data): string[];
export declare class VorbisOggsIdPage implements PagePayload {
    streamIndex: number;
    /**
     * 8 bits packet_type
     */
    packetType: number;
    /**
     * 6 bytes Magic Signature: vorbis
     */
    signature: string;
    /**
     * 4 bytes unsigned, 对应值 0x01
     */
    version: number;
    /**
     * 1 bytes unsigned, 声道数
     */
    channels: number;
    /**
     * 4 bytes unsigned, 原始输入采样率
     */
    sampleRate: number;
    /**
     * 4 bytes
     */
    bitrateMaximum: number;
    /**
     * 4 bytes
     */
    bitrateNominal: number;
    /**
     * 4 bytes
     */
    bitrateMinimum: number;
    /**
     * 4 bits
     */
    blocksize0: number;
    /**
     * 4 bits
     */
    blocksize1: number;
    /**
     * 1 bit
     */
    framingFlag: number;
    constructor(signature?: string);
    read(ioReader: IOReaderSync): void;
    write(ioWriter: IOWriter): void;
    setCodec(codecpar: AVCodecParameters): void;
}
export declare class VorbisOggsCommentPage extends OggsCommentPage {
    /**
     * 8 bits packet_type
     */
    packetType: number;
    /**
     * 1 bit
     */
    framingFlag: number;
    constructor(signature?: string);
    read(ioReader: IOReaderSync): void;
    write(ioWriter: IOWriter): void;
    addComment(comment: string): void;
    setCodec(codecpar: AVCodecParameters): void;
}
