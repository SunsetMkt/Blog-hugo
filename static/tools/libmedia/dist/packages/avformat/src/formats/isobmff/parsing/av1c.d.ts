import type { Atom, IsobmffContext } from '../type';
import { type IOReader } from '@libmedia/common/io';
import { type AVStream } from '@libmedia/avutil';
export default function read(ioReader: IOReader, stream: AVStream, atom: Atom, isobmffContext: IsobmffContext): Promise<void>;
