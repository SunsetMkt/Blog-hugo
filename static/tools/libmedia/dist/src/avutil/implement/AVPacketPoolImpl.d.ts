import List from 'cheap/std/collection/List';
import { Mutex } from 'cheap/thread/mutex';
import { AVPacketPool, AVPacketRef } from '../struct/avpacket';
export default class AVPacketPoolImpl implements AVPacketPool {
    private list;
    private mutex;
    constructor(list: List<pointer<AVPacketRef>>, mutex?: pointer<Mutex>);
    alloc(): pointer<AVPacketRef>;
    release(avpacket: pointer<AVPacketRef>): void;
}
