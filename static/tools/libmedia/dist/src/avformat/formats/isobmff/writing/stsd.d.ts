import type AVStream from 'avutil/AVStream';
import type { IsobmffContext } from '../type';
import type IOWriter from 'common/io/IOWriterSync';
export default function write(ioWriter: IOWriter, stream: AVStream, isobmffContext: IsobmffContext): void;
