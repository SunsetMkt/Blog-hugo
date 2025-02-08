import { AVCodecID, AVMediaType, AVPacketSideDataType } from '../codec';
import AVPacket from '../struct/avpacket';
import { Rational } from '../struct/rational';
import { AVChromaLocation, AVColorPrimaries, AVColorRange, AVColorSpace, AVColorTransferCharacteristic, AVFieldOrder, AVPixelFormat } from '../pixfmt';
import { AVChannelOrder, AVSampleFormat } from '../audiosamplefmt';
import AVCodecParameters from '../struct/avcodecparameters';
export interface AVPacketSerialize {
    pts: int64;
    dts: int64;
    data: Uint8Array;
    streamIndex: int32;
    flags: int32;
    sideData: {
        type: AVPacketSideDataType;
        data: Uint8Array;
    }[];
    duration: int64;
    pos: int64;
    timeBase: Rational;
    bitFormat: int32;
}
export interface AVCodecParametersSerialize {
    codecType: AVMediaType;
    codecId: AVCodecID;
    codecTag: uint32;
    extradata: Uint8Array;
    codedSideData: {
        type: AVPacketSideDataType;
        data: Uint8Array;
    }[];
    format: AVPixelFormat | AVSampleFormat;
    bitrate: int64;
    bitsPerCodedSample: int32;
    bitsPerRawSample: int32;
    profile: int32;
    level: int32;
    width: int32;
    height: int32;
    sampleAspectRatio: Rational;
    framerate: Rational;
    fieldOrder: AVFieldOrder;
    colorRange: AVColorRange;
    colorPrimaries: AVColorPrimaries;
    colorTrc: AVColorTransferCharacteristic;
    colorSpace: AVColorSpace;
    chromaLocation: AVChromaLocation;
    videoDelay: int32;
    chLayout: {
        order: AVChannelOrder;
        nbChannels: int32;
        u: uint64;
    };
    sampleRate: int32;
    blockAlign: int32;
    frameSize: int32;
    initialPadding: int32;
    trailingPadding: int32;
    seekPreroll: int32;
    bitFormat: int32;
}
export declare function serializeAVPacket(avpacket: pointer<AVPacket>): AVPacketSerialize;
export declare function unserializeAVPacket(serialize: AVPacketSerialize, avpacket?: pointer<AVPacket>): pointer<AVPacket>;
export declare function serializeAVCodecParameters(codecpar: pointer<AVCodecParameters>): AVCodecParametersSerialize;
export declare function unserializeAVCodecParameters(serialize: AVCodecParametersSerialize, codecpar?: pointer<AVCodecParameters>): pointer<AVCodecParameters>;
