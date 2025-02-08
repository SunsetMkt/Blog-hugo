import { BoxType } from '../boxType';
import IOWriter from 'common/io/IOWriterSync';
import Stream from 'avutil/AVStream';
import { MOVContext } from '../type';
declare const writers: Partial<Record<BoxType, (ioWriter: IOWriter, stream: Stream, movContext: MOVContext) => void>>;
export default writers;
