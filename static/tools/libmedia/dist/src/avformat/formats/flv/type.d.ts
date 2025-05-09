import { AVColorPrimaries, AVColorSpace, AVColorTransferCharacteristic } from 'avutil/pixfmt';
import { Data } from 'common/types/type';
export interface FlvMetaData {
    audiocodecid: number;
    audiodatarate: number;
    audiosamplerate: number;
    audiosamplesize: number;
    audiosize: number;
    canSeekToEnd: boolean;
    datasize: number;
    duration: number;
    filesize: number;
    framerate: number;
    hasAudio: boolean;
    hasKeyframes: boolean;
    hasMetadata: boolean;
    hasVideo: boolean;
    height: number;
    keyframes: {
        filepositions: number[];
        times: number[];
    };
    lastkeyframelocation: number;
    lastkeyframetimestamp: bigint;
    lasttimestamp: bigint;
    metadatacreator: string;
    stereo: boolean;
    videocodecid: number;
    videodatarate: number;
    videosize: number;
    width: number;
    audioTrackIdInfoMap?: Record<number, Data>;
    videoTrackIdInfoMap?: Record<number, Data>;
}
export interface FlvContext {
    keyframeFilePositions: number[];
    keyFrameTimes: number[];
    lastkeyframelocation: number;
    lastkeyframetimestamp: bigint;
    lasttimestamp: bigint;
    framerate: number;
    filesize: number;
    audioSize: number;
    videosize: number;
    datasize: number;
    duration: number;
    scriptWrote: boolean;
    frameCount: number;
    firstKeyframePositionWrote: boolean;
    videoMetadataWrote: boolean;
    enableNanoTimestamp: boolean;
    multiAudioTracks: boolean;
    multiVideoTracks: boolean;
    useLegacyHevc: boolean;
}
export interface FlvStreamContext {
    trackId: uint8;
}
export interface FlvColorInfo {
    colorConfig: {
        bitDepth?: number;
        colorPrimaries?: AVColorPrimaries;
        transferCharacteristics?: AVColorTransferCharacteristic;
        matrixCoefficients?: AVColorSpace;
    };
    hdrCll?: {
        maxFall: number;
        maxCLL: number;
    };
    hdrMdcv?: {
        redX?: number;
        redY?: number;
        greenX?: number;
        greenY?: number;
        blueX?: number;
        blueY?: number;
        whitePointX?: number;
        whitePointY?: number;
        maxLuminance?: number;
        minLuminance?: number;
    };
}
