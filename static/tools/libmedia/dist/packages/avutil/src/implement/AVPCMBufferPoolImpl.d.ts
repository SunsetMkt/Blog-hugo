import type { AVPCMBufferPool } from '../struct/avpcmbuffer';
import { AVPCMBufferRef } from '../struct/avpcmbuffer';
import { type List, type Mutex } from '@libmedia/cheap';
export default class AVPCMBufferPoolImpl implements AVPCMBufferPool {
    private list;
    private mutex;
    constructor(list: List<pointer<AVPCMBufferRef>>, mutex?: pointer<Mutex>);
    alloc(): pointer<AVPCMBufferRef>;
    release(buffer: pointer<AVPCMBufferRef>): void;
}
