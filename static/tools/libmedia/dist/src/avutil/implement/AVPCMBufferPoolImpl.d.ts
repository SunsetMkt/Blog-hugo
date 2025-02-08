import { AVPCMBufferPool, AVPCMBufferRef } from '../struct/avpcmbuffer';
import List from 'cheap/std/collection/List';
import { Mutex } from 'cheap/thread/mutex';
export default class AVPCMBufferPoolImpl implements AVPCMBufferPool {
    private list;
    private mutex;
    constructor(list: List<pointer<AVPCMBufferRef>>, mutex?: pointer<Mutex>);
    alloc(): pointer<AVPCMBufferRef>;
    release(buffer: pointer<AVPCMBufferRef>): void;
}
