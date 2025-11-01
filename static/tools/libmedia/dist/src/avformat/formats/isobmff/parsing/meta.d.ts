import type IOReader from 'common/io/IOReader';
import type Stream from 'avutil/AVStream';
import type { Atom, IsobmffContext } from '../type';
import type { Data } from 'common/types/type';
export declare function readITunesTagValue(ioReader: IOReader, tagSize: int32, params: Data): Promise<(string | number | Uint8Array<ArrayBufferLike>)[]>;
export default function read(ioReader: IOReader, stream: Stream, atom: Atom, isobmffContext: IsobmffContext): Promise<void>;
