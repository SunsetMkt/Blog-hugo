export declare class FrameHeader {
    version: uint32;
    layer: uint32;
    protection: uint32;
    bitrateIndex: uint32;
    samplingFrequency: uint32;
    padding: uint32;
    private: uint32;
    mode: uint32;
    modeExtension: uint32;
    copyright: uint32;
    original: uint32;
    emphasis: uint32;
}
export declare function parse(header: FrameHeader, value: uint32): void;
export declare function getFrameLength(header: FrameHeader, sampleRate: int32): number;
