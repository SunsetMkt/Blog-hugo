import { MOVContext } from './type';
import IOWriter from 'common/io/IOWriterSync';
import { AVOFormatContext } from '../../AVFormatContext';
export declare function updateSize(ioWriter: IOWriter, pointer: number, size: number): void;
export declare function writeFtyp(ioWriter: IOWriter, context: MOVContext): void;
export declare function writeMoov(ioWriter: IOWriter, formatContext: AVOFormatContext, movContext: MOVContext): void;
export declare function writeMoof(ioWriter: IOWriter, formatContext: AVOFormatContext, movContext: MOVContext): void;
