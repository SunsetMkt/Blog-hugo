import Stream from 'avutil/AVStream';
import { MOVContext } from '../type';
import IOWriter from 'common/io/IOWriterSync';
export default function write(ioWriter: IOWriter, stream: Stream, movContext: MOVContext): void;
