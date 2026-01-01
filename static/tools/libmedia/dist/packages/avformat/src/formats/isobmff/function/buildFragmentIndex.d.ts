import type { FragmentTrack, IsobmffContext } from '../type';
import { type AVStream } from '@libmedia/avutil';
export declare function buildFragmentIndex(stream: AVStream, track: FragmentTrack, isobmffContext: IsobmffContext, pos: int64, ioFlag?: int32): void;
