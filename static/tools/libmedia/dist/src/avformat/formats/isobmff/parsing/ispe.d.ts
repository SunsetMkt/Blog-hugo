import type IOReader from 'common/io/IOReader';
import AVStream from 'avutil/AVStream';
import type { Atom, IsobmffContext } from '../type';
import { type AVStreamGroupTileGrid } from 'avutil/AVStream';
export default function read(ioReader: IOReader, stream: AVStream | AVStreamGroupTileGrid, atom: Atom, isobmffContext: IsobmffContext): Promise<void>;
