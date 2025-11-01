import type IOReader from 'common/io/IOReader';
import type Stream from 'avutil/AVStream';
import type { Atom, IsobmffContext } from '../type';
declare const parsers: Partial<Record<number, (ioReader: IOReader, stream: Stream, atom: Atom, isobmffContext: IsobmffContext) => Promise<void>>>;
export default parsers;
