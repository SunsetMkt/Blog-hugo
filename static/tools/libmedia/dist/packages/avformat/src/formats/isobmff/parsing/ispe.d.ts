import type { Atom, IsobmffContext } from '../type';
import { type IOReader } from '@libmedia/common/io';
import { AVStream, type AVStreamGroupTileGrid } from '@libmedia/avutil';
export default function read(ioReader: IOReader, stream: AVStream | AVStreamGroupTileGrid, atom: Atom, isobmffContext: IsobmffContext): Promise<void>;
