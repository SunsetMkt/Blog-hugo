import type Stream from 'avutil/AVStream';
import type { AVIFormatContext } from '../../../AVFormatContext';
import type { IsobmffContext, Sample } from '../type';
import type { EncryptionInfo } from 'avutil/struct/encryption';
export declare function getNextSample(context: AVIFormatContext, isobmffContext: IsobmffContext, ioFlags: int32): {
    sample: Sample;
    stream: Stream;
    encryption: EncryptionInfo;
};
