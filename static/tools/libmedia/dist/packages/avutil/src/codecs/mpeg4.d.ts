import type AVPacket from '../struct/avpacket';
export declare const enum Mpeg4PictureType {
    I = 0,
    P = 1,
    B = 2
}
/**
 * 判断是否是随机访问点
 *
 * @param avpacket
 * @returns
 */
export declare function isRAP(avpacket: pointer<AVPacket>): boolean;
