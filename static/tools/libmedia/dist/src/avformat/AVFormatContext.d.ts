import { type AVCodecID, AVMediaType } from 'avutil/codec';
import type { AVStreamGroupInterface, AVStreamGroupParamsType, AVStreamInterface } from 'avutil/AVStream';
import AVStream, { AVStreamGroup } from 'avutil/AVStream';
import type AVPacket from 'avutil/struct/avpacket';
import type OFormat from './formats/OFormat';
import type IFormat from './formats/IFormat';
import type IOWriterSync from 'common/io/IOWriterSync';
import type IOReader from 'common/io/IOReader';
import type IOWriter from 'common/io/IOWriter';
import type IOReaderSync from 'common/io/IOReaderSync';
import type { WebAssemblyResource } from 'cheap/webassembly/compiler';
import { AVFormat } from 'avutil/avformat';
import type { Rational } from 'avutil/struct/rational';
export interface AVChapter {
    /**
     * 章节 id
     */
    id: uint64;
    /**
     * 时间基
     */
    timeBase: Rational;
    /**
     * 开始时间
     */
    start: int64;
    /**
     * 结束时间
     */
    end: int64;
    /**
     * 元数据
     */
    metadata: Record<string, any>;
}
declare class AVFormatContextInterval {
    packetBuffer: pointer<AVPacket>[];
    constructor();
}
export interface AVIFormatContext {
    metadata: Record<string, any>;
    streams: AVStream[];
    streamGroups: AVStreamGroup[];
    options: Record<string, any>;
    chapters: AVChapter[];
    privateData: Record<string, any>;
    privateData2: Record<string, any>;
    format: AVFormat;
    iformat: IFormat;
    ioReader: IOReader;
    ioWriter: IOWriter;
    errorFlag: number;
    interval: AVFormatContextInterval;
    streamIndex: number;
    streamGroupIndex: number;
    getStreamById(id: number): AVStream;
    getStreamGroupById(id: number): AVStreamGroup;
    getStreamByIndex(index: number): AVStream;
    getStreamGroupByIndex(index: number): AVStreamGroup;
    getStreamByMediaType(mediaType: AVMediaType): AVStream;
    getStreamGroupByGroupType(groupType: AVStreamGroupParamsType): AVStreamGroup;
    createStream(): AVStream;
    createStreamGroup(type: AVStreamGroupParamsType): AVStreamGroup;
    addStream(stream: AVStream): void;
    addStreamGroup(group: AVStreamGroup): void;
    addStreamToStreamGroup(group: AVStreamGroup, stream: AVStream): void;
    removeStream(stream: AVStream): void;
    removeStreamGroup(group: AVStreamGroup): void;
    removeStreamById(id: number): void;
    removeStreamGroupById(id: number): void;
    removeStreamByIndex(index: number): void;
    removeStreamGroupByIndex(index: number): void;
    destroy(): Promise<void>;
    getDecoderResource: (mediaType: AVMediaType, codecId: AVCodecID) => Promise<WebAssemblyResource> | WebAssemblyResource;
}
export interface AVOFormatContext {
    metadataHeaderPadding: int32;
    metadata: Record<string, any>;
    streams: AVStream[];
    streamGroups: AVStreamGroup[];
    options: Record<string, any>;
    chapters: AVChapter[];
    privateData: Record<string, any>;
    privateData2: Record<string, any>;
    format: AVFormat;
    oformat: OFormat;
    ioWriter: IOWriterSync;
    errorFlag: number;
    interval: AVFormatContextInterval;
    streamIndex: number;
    streamGroupIndex: number;
    getStreamById(id: number): AVStream;
    getStreamGroupById(id: number): AVStreamGroup;
    getStreamByIndex(index: number): AVStream;
    getStreamGroupByIndex(index: number): AVStreamGroup;
    getStreamByMediaType(mediaType: AVMediaType): AVStream;
    getStreamGroupByGroupType(groupType: AVStreamGroupParamsType): AVStreamGroup;
    createStream(): AVStream;
    createStreamGroup(type: AVStreamGroupParamsType): AVStreamGroup;
    addStream(stream: AVStream): void;
    addStreamGroup(group: AVStreamGroup): void;
    addStreamToStreamGroup(group: AVStreamGroup, stream: AVStream): void;
    removeStream(stream: AVStream): void;
    removeStreamGroup(group: AVStreamGroup): void;
    removeStreamById(id: number): void;
    removeStreamGroupById(id: number): void;
    removeStreamByIndex(index: number): void;
    removeStreamGroupByIndex(index: number): void;
    destroy(): Promise<void>;
}
export interface AVFormatContextInterface {
    metadata: Record<string, any>;
    format: AVFormat;
    streams: AVStreamInterface[];
    streamGroups: AVStreamGroupInterface[];
    chapters: AVChapter[];
}
export declare class AVFormatContext {
    metadataHeaderPadding: number;
    metadata: Record<string, any>;
    streams: AVStream[];
    streamGroups: AVStreamGroup[];
    options: Record<string, any>;
    chapters: AVChapter[];
    privateData: Record<string, any>;
    privateData2: Record<string, any>;
    iformat: IFormat;
    oformat: OFormat;
    ioReader: IOReader | IOReaderSync;
    ioWriter: IOWriter | IOWriterSync;
    errorFlag: number;
    interval: AVFormatContextInterval;
    streamIndex: number;
    streamGroupIndex: number;
    getDecoderResource: (mediaType: AVMediaType, codecId: AVCodecID) => Promise<WebAssemblyResource> | WebAssemblyResource;
    constructor();
    get format(): AVFormat;
    getStreamById(id: number): AVStream;
    getStreamGroupById(id: number): AVStreamGroup;
    getStreamByIndex(index: number): AVStream;
    getStreamGroupByIndex(index: number): AVStreamGroup;
    getStreamByMediaType(mediaType: AVMediaType): AVStream;
    getStreamGroupByGroupType(groupType: AVStreamGroupParamsType): AVStreamGroup;
    getAttachmentPicture(): AVStream;
    createStream(): AVStream;
    createStreamGroup(type: AVStreamGroupParamsType): AVStreamGroup;
    addStream(stream: AVStream): void;
    addStreamGroup(group: AVStreamGroup): void;
    addStreamToStreamGroup(group: AVStreamGroup, stream: AVStream): void;
    removeStream(stream: AVStream): void;
    removeStreamGroup(group: AVStreamGroup): void;
    removeStreamById(id: number): void;
    removeStreamGroupById(id: number): void;
    removeStreamByIndex(i: number): void;
    removeStreamGroupByIndex(i: number): void;
    destroy(): Promise<void>;
}
/**
 * 创建 AVIFormatContext
 *
 * @returns
 */
export declare function createAVIFormatContext(): AVIFormatContext;
/**
 * 创建 AVOFormatContext
 *
 * @returns
 */
export declare function createAVOFormatContext(): AVOFormatContext;
export {};
