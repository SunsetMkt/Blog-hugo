import { AVFramePool, AVFrameRef } from '../struct/avframe';
import List from 'cheap/std/collection/List';
import { Mutex } from 'cheap/thread/mutex';
export default class AVFramePoolImpl implements AVFramePool {
    private list;
    private mutex;
    constructor(list: List<pointer<AVFrameRef>>, mutex?: pointer<Mutex>);
    alloc(): pointer<AVFrameRef>;
    release(avframe: pointer<AVFrameRef>): void;
}
