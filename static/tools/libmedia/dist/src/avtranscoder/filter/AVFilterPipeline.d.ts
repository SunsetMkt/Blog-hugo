import type List from 'cheap/std/collection/List';
import type { Mutex } from 'cheap/thread/mutex';
import type { AVFrameRef } from 'avutil/struct/avframe';
import AVFramePoolImpl from 'avutil/implement/AVFramePoolImpl';
import type { TaskOptions } from 'avpipeline/Pipeline';
import Pipeline from 'avpipeline/Pipeline';
import type { FilterGraph, FilterGraphDes, FilterGraphPortDes } from 'avfilter/graph';
import AVInputNode from 'avfilter/AVInputNode';
import AVOutputNode from 'avfilter/AVOutputNode';
export interface AVFilterTaskOptions extends TaskOptions {
    avframeList: pointer<List<pointer<AVFrameRef>>>;
    avframeListMutex: pointer<Mutex>;
    graph: FilterGraphDes;
    inputPorts: FilterGraphPortDes[];
    outputPorts: FilterGraphPortDes[];
}
type SelfTask = AVFilterTaskOptions & {
    avframePool: AVFramePoolImpl;
    filterGraph: FilterGraph;
    inputNodes: AVInputNode[];
    outputNodes: AVOutputNode[];
};
export default class AVFilterPipeline extends Pipeline {
    tasks: Map<string, SelfTask>;
    constructor();
    private createTask;
    registerTask(options: AVFilterTaskOptions): Promise<number>;
    unregisterTask(taskId: string): Promise<void>;
}
export {};
