import type { Rational } from 'avutil/struct/rational';
import type AVStream from 'avutil/AVStream';
export declare function getBytesByDuration(streams: AVStream[], duration: int64, timeBase: Rational): bigint;
