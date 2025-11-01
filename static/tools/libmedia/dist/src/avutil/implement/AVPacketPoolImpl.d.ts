import type List from 'cheap/std/collection/List';
import type { Mutex } from 'cheap/thread/mutex';
import type { AVPacketPool } from '../struct/avpacket';
import { AVPacketRef } from '../struct/avpacket';
export default class AVPacketPoolImpl implements AVPacketPool {
    private list;
    private mutex;
    constructor(list: List<pointer<AVPacketRef>>, mutex?: pointer<Mutex>);
    alloc(): pointer<AVPacketRef>;
    release(avpacket: pointer<AVPacketRef>): void;
}
