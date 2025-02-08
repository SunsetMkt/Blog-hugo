import AVFrame, { AVFrameSideData, AVFrameSideDataType } from '../struct/avframe';
export declare enum AV_FRAME_SIDE_DATA_FLAG {
    UNIQUE = 1
}
export declare function createAVFrame(): pointer<AVFrame>;
export declare function destroyAVFrame(frame: pointer<AVFrame>): void;
export declare function freeSideData(ptr: pointer<pointer<AVFrameSideData>>): void;
export declare function wipeSideData(sideData: pointer<pointer<pointer<AVFrameSideData>>>, nbSideData: pointer<int32>): void;
export declare function wipeAVFrameSideData(frame: pointer<AVFrame>): void;
export declare function removeAVFrameSideData(sideData: pointer<pointer<pointer<AVFrameSideData>>>, nbSideData: pointer<int32>, type: AVFrameSideDataType): void;
export declare function newAVFrameSideData(sideData: pointer<pointer<pointer<AVFrameSideData>>>, nbSideData: pointer<int32>, type: AVFrameSideDataType, size: size, flags: uint32): pointer<AVFrameSideData>;
export declare function getAVFrameSideData(frame: pointer<AVFrame>, type: AVFrameSideDataType): pointer<AVFrameSideData>;
export declare function getAVFrameDefault(frame: pointer<AVFrame>): void;
export declare function getVideoBuffer(frame: pointer<AVFrame>, algin?: int32): number;
export declare function getAudioBuffer(frame: pointer<AVFrame>, algin?: int32): number;
export declare function getBuffer(frame: pointer<AVFrame>, algin?: int32): number;
export declare function refAVFrame(dst: pointer<AVFrame>, src: pointer<AVFrame>): number;
export declare function unrefAVFrame(frame: pointer<AVFrame>): void;
export declare function copyAVFrameProps(dst: pointer<AVFrame>, src: pointer<AVFrame>): number;
export declare function cloneAVFrame(frame: pointer<AVFrame>): pointer<AVFrame>;
