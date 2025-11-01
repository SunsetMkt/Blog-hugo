import type AVFrame from '../struct/avframe';
import type AVPCMBuffer from '../struct/avpcmbuffer';
export declare function avPCMBuffer2AVFrame(pcmBuffer: pointer<AVPCMBuffer>, copy?: boolean, avframe?: pointer<AVFrame>): pointer<AVFrame>;
