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
}
