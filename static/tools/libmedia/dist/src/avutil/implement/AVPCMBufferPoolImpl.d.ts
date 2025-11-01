import type { AVPCMBufferPool } from '../struct/avpcmbuffer';
import { AVPCMBufferRef } from '../struct/avpcmbuffer';
import type List from 'cheap/std/collection/List';
import type { Mutex } from 'cheap/thread/mutex';
export default class AVPCMBufferPoolImpl implements AVPCMBufferPool {
    private list;
    private mutex;
    constructor(list: List<pointer<AVPCMBufferRef>>, mutex?: pointer<Mutex>);
    alloc(): pointer<AVPCMBufferRef>;
    release(buffer: pointer<AVPCMBufferRef>): void;
}
