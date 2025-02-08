import AVCodecParameters from 'avutil/struct/avcodecparameters';
import { Data } from 'common/types/type';
import { RTPPacket } from './RTPPacket';
/**
 * TODO 支持 nack
 */
export default class RTPFrameQueue {
    private queue;
    private frameQueue;
    private codecpar;
    private currentSeqStart;
    private readyPos;
    private maskerQueue;
    private payloadContext;
    constructor(codecpar: pointer<AVCodecParameters>, payloadContext: Data);
    /**
     * 判断 start 和 end 是否邻近
     *
     * @param start
     * @param end
     * @returns
     */
    private isSeqIncreaseOne;
    /**
     * 判断 seq a 大于 b
     * 需要考虑回环
     *
     * @param a
     * @param b
     * @returns
     */
    private seqAMoreThenB;
    private isFirstStart;
    private check;
    push(packet: RTPPacket): void;
    hasFrame(): number;
    getFrame(): RTPPacket[];
}
