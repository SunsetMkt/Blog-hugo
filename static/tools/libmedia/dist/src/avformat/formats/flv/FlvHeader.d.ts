import IOReader from 'common/io/IOReader';
import IOWriter from 'common/io/IOWriterSync';
export default class FlvHeader {
    /**
     * 3 bytes 签名
     */
    signature: string;
    /**
     * 1 bytes 版本，比如 0x01 表示 FLV 版本 1
     */
    version: number;
    /**
     * 1 bytes 第一位标记是否有视频，第 4 位标记是否有音频，其余位保留
     */
    flags: number;
    /**
     * 4 bytes FLV header 的大小，单位是字节，目前是 9
     */
    dataOffset: number;
    /**
     * 是否有视频
     */
    hasVideo: boolean;
    /**
     * 是否有音频
     */
    hasAudio: boolean;
    constructor();
    read(ioReader: IOReader): Promise<void>;
    write(ioWriter: IOWriter): void;
}
