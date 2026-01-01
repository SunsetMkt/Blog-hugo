import type { IsobmffContext } from './type';
import type { AVOFormatContext } from '../../AVFormatContext';
import { type IOWriterSync } from '@libmedia/common/io';
export declare function updateSize(ioWriter: IOWriterSync, pointer: number, size: number): void;
export declare function writeFtyp(ioWriter: IOWriterSync, context: IsobmffContext): void;
export declare function writeMoov(ioWriter: IOWriterSync, formatContext: AVOFormatContext, isobmffContext: IsobmffContext): void;
export declare function writeMoof(ioWriter: IOWriterSync, formatContext: AVOFormatContext, isobmffContext: IsobmffContext): void;
export declare function writeMfra(ioWriter: IOWriterSync, formatContext: AVOFormatContext, isobmffContext: IsobmffContext): void;
