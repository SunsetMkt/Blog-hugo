import { Atom, MOVContext } from './type';
import IOReader from 'common/io/IOReader';
import { AVIFormatContext } from '../../AVFormatContext';
export declare function readFtyp(ioReader: IOReader, context: MOVContext, atom: Atom): Promise<void>;
export declare function readMoov(ioReader: IOReader, formatContext: AVIFormatContext, movContext: MOVContext, atom: Atom): Promise<void>;
export declare function readMoof(ioReader: IOReader, formatContext: AVIFormatContext, movContext: MOVContext, atom: Atom): Promise<void>;
export declare function readMfra(ioReader: IOReader, formatContext: AVIFormatContext, movContext: MOVContext, atom: Atom): Promise<void>;
