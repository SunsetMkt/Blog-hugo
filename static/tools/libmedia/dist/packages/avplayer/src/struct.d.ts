import type { Stats } from '@libmedia/avpipeline';
import type { List, Mutex } from '@libmedia/cheap';
import type { AVFrameRef, AVPacketRef } from '@libmedia/avutil';
@struct
export declare class AVPlayerGlobalData {
    avpacketList: List<pointer<AVPacketRef>>;
    avframeList: List<pointer<AVFrameRef>>;
    avpacketListMutex: Mutex;
    avframeListMutex: Mutex;
    stats: Stats;
}
