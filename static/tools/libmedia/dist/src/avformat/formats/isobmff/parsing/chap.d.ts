import type IOReader from 'common/io/IOReader';
import type Stream from 'avutil/AVStream';
import type { Atom, IsobmffContext } from '../type';
export default function read(ioReader: IOReader, stream: Stream, atom: Atom, isobmffContext: IsobmffContext): Promise<void>;
