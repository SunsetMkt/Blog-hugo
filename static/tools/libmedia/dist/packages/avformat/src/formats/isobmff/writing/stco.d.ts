import type { IsobmffContext } from '../type';
import { type IOWriterSync } from '@libmedia/common/io';
import { type AVStream } from '@libmedia/avutil';
export default function write(ioWriter: IOWriterSync, stream: AVStream, isobmffContext: IsobmffContext): void;
