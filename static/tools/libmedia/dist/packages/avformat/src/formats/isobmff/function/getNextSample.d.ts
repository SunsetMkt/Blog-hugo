import type { AVIFormatContext } from '../../../AVFormatContext';
import type { IsobmffContext, Sample } from '../type';
import { type AVStream, type EncryptionInfo } from '@libmedia/avutil';
export declare function getNextSample(context: AVIFormatContext, isobmffContext: IsobmffContext, ioFlags: int32): {
    sample: Sample;
    stream: AVStream;
    encryption: EncryptionInfo;
};
