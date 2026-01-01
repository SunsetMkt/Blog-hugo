import { type AVStream, type AVRational } from '@libmedia/avutil';
export declare function getBytesByDuration(streams: AVStream[], duration: int64, timeBase: AVRational): bigint;
