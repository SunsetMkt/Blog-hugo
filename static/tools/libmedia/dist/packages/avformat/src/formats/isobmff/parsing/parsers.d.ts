import type { Atom, IsobmffContext } from '../type';
import { type IOReader } from '@libmedia/common/io';
import { type AVStream } from '@libmedia/avutil';
declare const parsers: Partial<Record<number, (ioReader: IOReader, stream: AVStream, atom: Atom, isobmffContext: IsobmffContext) => Promise<void>>>;
export default parsers;
