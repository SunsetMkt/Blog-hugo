import { Rational } from 'avutil/struct/rational';
import AVStream from 'avutil/AVStream';
export declare function getBytesByDuration(streams: AVStream[], duration: int64, timeBase: Rational): bigint;
