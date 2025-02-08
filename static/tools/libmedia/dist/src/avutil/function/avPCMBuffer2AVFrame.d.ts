import AVFrame from '../struct/avframe';
import AVPCMBuffer from '../struct/avpcmbuffer';
export declare function avPCMBuffer2AVFrame(pcmBuffer: pointer<AVPCMBuffer>, copy?: boolean, avframe?: pointer<AVFrame>): pointer<AVFrame>;
