import type Stats from 'avpipeline/struct/stats';
import type { AVFrameRef } from 'avutil/struct/avframe';
import type { AVPacketRef } from 'avutil/struct/avpacket';
import type List from 'cheap/std/collection/List';
import type { Mutex } from 'cheap/thread/mutex';
export declare class AVPlayerGlobalData {
    avpacketList: List<pointer<AVPacketRef>>;
    avframeList: List<pointer<AVFrameRef>>;
    avpacketListMutex: Mutex;
    avframeListMutex: Mutex;
    stats: Stats;
}
