import type { IsobmffContext } from './type';
import type IOWriter from 'common/io/IOWriterSync';
import type { AVOFormatContext } from '../../AVFormatContext';
export declare function updateSize(ioWriter: IOWriter, pointer: number, size: number): void;
export declare function writeFtyp(ioWriter: IOWriter, context: IsobmffContext): void;
export declare function writeMoov(ioWriter: IOWriter, formatContext: AVOFormatContext, isobmffContext: IsobmffContext): void;
export declare function writeMoof(ioWriter: IOWriter, formatContext: AVOFormatContext, isobmffContext: IsobmffContext): void;
export declare function writeMfra(ioWriter: IOWriter, formatContext: AVOFormatContext, isobmffContext: IsobmffContext): void;
