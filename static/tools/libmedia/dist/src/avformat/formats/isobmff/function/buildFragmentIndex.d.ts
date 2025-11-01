import type Stream from 'avutil/AVStream';
import type { FragmentTrack, IsobmffContext } from '../type';
export declare function buildFragmentIndex(stream: Stream, track: FragmentTrack, isobmffContext: IsobmffContext, pos: int64, ioFlag?: int32): void;
