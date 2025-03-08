import { AVCHLayout } from '../audiosamplefmt';
import { Uint8ArrayInterface } from 'common/io/interface';
export declare const enum AC3DeltaStrategy {
    DBA_REUSE = 0,
    DBA_NEW = 1,
    DBA_NONE = 2,
    DBA_RESERVED = 3
}
export declare const enum AC3ChannelMode {
    AC3_CHMODE_DUALMONO = 0,
    AC3_CHMODE_MONO = 1,
    AC3_CHMODE_STEREO = 2,
    AC3_CHMODE_3F = 3,
    AC3_CHMODE_2F1R = 4,
    AC3_CHMODE_3F1R = 5,
    AC3_CHMODE_2F2R = 6,
    AC3_CHMODE_3F2R = 7
}
export declare const enum AC3DolbySurroundMode {
    AC3_DSURMOD_NOTINDICATED = 0,
    AC3_DSURMOD_OFF = 1,
    AC3_DSURMOD_ON = 2,
    AC3_DSURMOD_RESERVED = 3
}
export declare const enum AC3DolbySurroundEXMode {
    AC3_DSUREXMOD_NOTINDICATED = 0,
    AC3_DSUREXMOD_OFF = 1,
    AC3_DSUREXMOD_ON = 2,
    AC3_DSUREXMOD_PLIIZ = 3
}
export declare const enum AC3DolbyHeadphoneMode {
    AC3_DHEADPHONMOD_NOTINDICATED = 0,
    AC3_DHEADPHONMOD_OFF = 1,
    AC3_DHEADPHONMOD_ON = 2,
    AC3_DHEADPHONMOD_RESERVED = 3
}
export declare const enum AC3PreferredStereoDownmixMode {
    AC3_DMIXMOD_NOTINDICATED = 0,
    AC3_DMIXMOD_LTRT = 1,
    AC3_DMIXMOD_LORO = 2,
    AC3_DMIXMOD_DPLII = 3
}
export declare const enum EAC3FrameType {
    EAC3_FRAME_TYPE_INDEPENDENT = 0,
    EAC3_FRAME_TYPE_DEPENDENT = 1,
    EAC3_FRAME_TYPE_AC3_CONVERT = 2,
    EAC3_FRAME_TYPE_RESERVED = 3
}
export declare const AC3ChannelLayout: AVCHLayout[];
export interface AC3HeaderInfo {
    syncWord: uint16;
    crc1: uint16;
    srCode: uint8;
    bitstreamId: uint8;
    bitstreamMode: uint8;
    channelMode: uint8;
    lfeOn: uint8;
    frameType: uint8;
    substreamId: int32;
    centerMixLevel: int32;
    surroundMixLevel: int32;
    channelMap: uint16;
    numBlocks: int32;
    dolbySurroundMode: int32;
    srShift: uint8;
    sampleRate: uint16;
    bitrate: uint32;
    channels: uint8;
    frameSize: uint16;
    channelLayout: uint64;
    ac3BitrateCode: int8;
}
export declare function parseHeader(buf: Uint8ArrayInterface): -5 | -1 | -4 | -3 | -2 | -7 | -6 | AC3HeaderInfo;
