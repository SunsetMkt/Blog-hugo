import type { AVPacketPool } from '../struct/avpacket';
import { AVPacketRef } from '../struct/avpacket';
import { type List, type Mutex } from '@libmedia/cheap';
export default class AVPacketPoolImpl implements AVPacketPool {
    private list;
    private mutex;
    constructor(list: List<pointer<AVPacketRef>>, mutex?: pointer<Mutex>);
    alloc(): pointer<AVPacketRef>;
    release(avpacket: pointer<AVPacketRef>): void;
}
