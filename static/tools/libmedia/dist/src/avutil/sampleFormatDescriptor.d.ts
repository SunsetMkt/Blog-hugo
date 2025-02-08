import { AVSampleFormat } from './audiosamplefmt';
export interface AVSampleFormatDescriptor {
    bits: number;
    planar: boolean;
}
export declare const AVSampleFormatDescriptors: Partial<Record<AVSampleFormat, AVSampleFormatDescriptor>>;
