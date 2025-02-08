import { Uint8ArrayInterface } from 'common/io/interface';
export declare const DTS_PCMBLOCK_SAMPLES = 32;
export interface DTSHeaderInfo {
    syncWord: uint32;
    frameType: int32;
    deficitSamples: int32;
    crcFlag: int32;
    sampleBlock: int32;
    frameSize: int32;
    channelIndex: int32;
    sampleRateIndex: int32;
    bitrateIndex: int32;
    channels: int32;
    sampleRate: int32;
    bitrate: int32;
}
export declare function parseHeader(buf: Uint8ArrayInterface): -1 | DTSHeaderInfo;
