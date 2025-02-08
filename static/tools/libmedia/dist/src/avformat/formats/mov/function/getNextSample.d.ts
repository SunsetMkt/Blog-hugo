import Stream from 'avutil/AVStream';
import { AVIFormatContext } from '../../../AVFormatContext';
import { MOVContext, Sample } from '../type';
export declare function getNextSample(context: AVIFormatContext, movContext: MOVContext): {
    sample: Sample;
    stream: Stream;
};
