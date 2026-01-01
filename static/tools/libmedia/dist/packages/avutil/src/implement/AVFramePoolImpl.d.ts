import type { AVFramePool } from '../struct/avframe';
import { AVFrameRef } from '../struct/avframe';
import { type List, type Mutex } from '@libmedia/cheap';
export default class AVFramePoolImpl implements AVFramePool {
    private list;
    private mutex;
    constructor(list: List<pointer<AVFrameRef>>, mutex?: pointer<Mutex>);
    alloc(): pointer<AVFrameRef>;
    release(avframe: pointer<AVFrameRef>): void;
}
