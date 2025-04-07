import { AVCodecID } from '@libmedia/avutil/codec';
import IOReader from '@libmedia/common/io/IOReader';
import IFormat from '@libmedia/avformat/formats/IFormat';
export declare function formatUrl(url: string): string;
export declare function getWasm(type: 'decoder' | 'encoder' | 'resampler' | 'scaler' | 'stretchpitcher', codecId?: AVCodecID): string;
export declare function getIOReader(source: string | File): Promise<IOReader>;
export declare function getAVFormat(ioReader: IOReader, source: string | File): Promise<IFormat>;
export declare function getAccept(): string;
