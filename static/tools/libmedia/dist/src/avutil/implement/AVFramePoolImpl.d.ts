import type { AVFramePool } from '../struct/avframe';
import { AVFrameRef } from '../struct/avframe';
import type List from 'cheap/std/collection/List';
import type { Mutex } from 'cheap/thread/mutex';
export default class AVFramePoolImpl implements AVFramePool {
    private list;
    private mutex;
    constructor(list: List<pointer<AVFrameRef>>, mutex?: pointer<Mutex>);
    alloc(): pointer<AVFrameRef>;
    release(avframe: pointer<AVFrameRef>): void;
}
