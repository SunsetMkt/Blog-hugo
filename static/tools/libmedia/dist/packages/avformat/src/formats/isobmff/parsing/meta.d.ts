import type { Atom, IsobmffContext } from '../type';
import { type Data } from '@libmedia/common';
import { type IOReader } from '@libmedia/common/io';
import { type AVStream } from '@libmedia/avutil';
export declare function readITunesTagValue(ioReader: IOReader, tagSize: int32, params: Data): Promise<(string | number | Uint8Array<ArrayBufferLike>)[]>;
export default function read(ioReader: IOReader, stream: AVStream, atom: Atom, isobmffContext: IsobmffContext): Promise<void>;
