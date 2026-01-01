import { BoxType } from '../boxType';
import type { IsobmffContext } from '../type';
import { type IOWriterSync } from '@libmedia/common/io';
import { type AVStream } from '@libmedia/avutil';
declare const writers: Partial<Record<BoxType, (ioWriter: IOWriterSync, stream: AVStream, isobmffContext: IsobmffContext) => void>>;
export default writers;
