import type Stream from 'avutil/AVStream';
import type { IsobmffContext } from '../type';
import type IOWriter from 'common/io/IOWriterSync';
export default function write(ioWriter: IOWriter, stream: Stream, isobmffContext: IsobmffContext): void;
