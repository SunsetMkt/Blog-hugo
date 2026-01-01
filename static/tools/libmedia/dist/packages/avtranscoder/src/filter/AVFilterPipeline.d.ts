import { type List, type Mutex } from '@libmedia/cheap';
import { type AVFrameRef, AVFramePoolImpl } from '@libmedia/avutil';
import { type TaskOptions, Pipeline } from '@libmedia/avpipeline';
import { type FilterGraph, type FilterGraphDes, type FilterGraphPortDes, AVInputNode, AVOutputNode } from '@libmedia/avfilter';
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
