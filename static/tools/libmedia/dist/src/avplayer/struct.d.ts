import Stats from 'avpipeline/struct/stats';
import { AVFrameRef } from 'avutil/struct/avframe';
import { AVPacketRef } from 'avutil/struct/avpacket';
import List from 'cheap/std/collection/List';
import { Mutex } from 'cheap/thread/mutex';
export declare class AVPlayerGlobalData {
    avpacketList: List<pointer<AVPacketRef>>;
    avframeList: List<pointer<AVFrameRef>>;
    avpacketListMutex: Mutex;
    avframeListMutex: Mutex;
    stats: Stats;
}
