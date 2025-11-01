import { BoxType } from '../boxType';
import type IOWriter from 'common/io/IOWriterSync';
import type Stream from 'avutil/AVStream';
import type { IsobmffContext } from '../type';
declare const writers: Partial<Record<BoxType, (ioWriter: IOWriter, stream: Stream, isobmffContext: IsobmffContext) => void>>;
export default writers;
