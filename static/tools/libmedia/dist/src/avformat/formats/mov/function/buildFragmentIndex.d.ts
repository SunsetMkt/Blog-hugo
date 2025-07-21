import Stream from 'avutil/AVStream';
import { FragmentTrack, MOVContext } from '../type';
export declare function buildFragmentIndex(stream: Stream, track: FragmentTrack, movContext: MOVContext, pos: int64, ioFlag?: int32): void;
