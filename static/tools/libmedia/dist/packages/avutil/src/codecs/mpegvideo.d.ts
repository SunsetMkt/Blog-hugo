import type AVPacket from '../struct/avpacket';
export declare const enum MpegVideoPictureType {
    I = 1,
    P = 2,
    B = 3
}
/**
 * 判断是否是随机访问点
 *
 * @param avpacket
 * @returns
 */
export declare function isRAP(avpacket: pointer<AVPacket>): boolean;
