import type AVFrame from '../struct/avframe';
export declare function audioData2AVFrame<T extends pointer<AVFrame> = pointer<AVFrame>>(audioData: AudioData, avframe?: T): T;
