import AVPacket from '../struct/avpacket';
export declare const enum Mpeg4PictureType {
    I = 0,
    P = 1,
    B = 2
}
export declare function isIDR(avpacket: pointer<AVPacket>): boolean;
