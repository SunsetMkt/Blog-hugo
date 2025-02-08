import AVCodecParameters from 'avutil/struct/avcodecparameters';
import IOReader from 'common/io/IOReader';
export declare function readFormatTag(ioReader: IOReader, codecpar: pointer<AVCodecParameters>, size: int32): Promise<0 | -2>;
