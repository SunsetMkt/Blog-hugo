import type IOReader from 'common/io/IOReader';
import AVStream, { type AVStreamGroupTileGrid } from 'avutil/AVStream';
import type { Atom, IsobmffContext } from '../type';
export default function read(ioReader: IOReader, stream: AVStream | AVStreamGroupTileGrid, atom: Atom, isobmffContext: IsobmffContext): Promise<void>;
