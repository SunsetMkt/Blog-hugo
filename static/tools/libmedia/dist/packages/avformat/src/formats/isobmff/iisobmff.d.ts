import type { Atom, IsobmffContext } from './type';
import type { AVIFormatContext } from '../../AVFormatContext';
import { IOReader } from '@libmedia/common/io';
export declare function readFtyp(ioReader: IOReader, context: IsobmffContext, atom: Atom): Promise<void>;
export declare function readMoov(ioReader: IOReader, formatContext: AVIFormatContext, isobmffContext: IsobmffContext, atom: Atom): Promise<void>;
export declare function readMoof(ioReader: IOReader, formatContext: AVIFormatContext, isobmffContext: IsobmffContext, atom: Atom): Promise<void>;
export declare function readMfra(ioReader: IOReader, formatContext: AVIFormatContext, isobmffContext: IsobmffContext, atom: Atom): Promise<void>;
export declare function readHEIF(ioReader: IOReader, formatContext: AVIFormatContext, isobmffContext: IsobmffContext, atom: Atom): Promise<void>;
