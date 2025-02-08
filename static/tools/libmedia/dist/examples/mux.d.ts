/**
 * 将 avpacket 封装进文件，avpacket 可以来自于解封装模块，可以来自于编码模块
 *
 * @param avpacket
 */
export declare function muxFile(): Promise<void>;
