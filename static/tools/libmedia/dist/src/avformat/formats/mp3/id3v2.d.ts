import type IOReader from 'common/io/IOReader';
import type { ID3V2, Mp3MetaData } from './type';
import IOWriterSync from 'common/io/IOWriterSync';
import { AVCodecID } from 'avutil/codec';
import { type AVOFormatContext, type AVIFormatContext } from '../../AVFormatContext';
export declare const enum ID3v2Encoding {
    ISO8859 = 0,
    UTF16BOM = 1,
    UTF16BE = 2,
    UTF8 = 3
}
export declare const ID3v2Mime2CodecId: Record<string, AVCodecID>;
export declare const ID3v2PictureType: string[];
export declare function parse(ioReader: IOReader, len: int32, id3v2: ID3V2, metadata: Mp3MetaData): Promise<void>;
export declare function parseAPIC(formatContext: AVIFormatContext, apic: Uint8Array[], id3v2: ID3V2): void;
export declare function write(ioWriter: IOWriterSync, version: number, padding: int32, metadata: Mp3MetaData): void;
export declare function writeAPIC(formatContext: AVOFormatContext, id3v2Version: number): Uint8Array<ArrayBufferLike>[];
