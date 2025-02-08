import RangeFilterNode from './RangeFilterNode';
import ResampleFilterNode from './audio/ResampleFilterNode';
import FramerateFilterNode from './video/FramerateFilterNode';
import ScaleFilterNode from './video/ScaleFilterNode';
import { AVFramePool } from 'avutil/struct/avframe';
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
type FirstConstructorParameter<T extends abstract new (...args: any) => any> = ConstructorParameters<T>[0];
export type GraphNodeType = 'resampler' | 'scaler' | 'range' | 'framerate';
type GraphNodeType2AVFilterConstructor<T extends GraphNodeType> = T extends 'resampler' ? typeof ResampleFilterNode : T extends 'scaler' ? typeof ScaleFilterNode : T extends 'range' ? typeof RangeFilterNode : T extends 'framerate' ? typeof FramerateFilterNode : never;
type GraphNodeType2AVFilter<T extends GraphNodeType> = T extends 'resampler' ? ResampleFilterNode : T extends 'scaler' ? ScaleFilterNode : T extends 'range' ? RangeFilterNode : T extends 'framerate' ? FramerateFilterNode : never;
type AVFilterGraphFilterOptions<T extends GraphNodeType> = FirstConstructorParameter<GraphNodeType2AVFilterConstructor<T>>;
export interface AVFilterGraphDesVertex<T extends GraphNodeType> {
    id: number;
    type: T;
    options: AVFilterGraphFilterOptions<T>;
}
export interface AVFilterGraphVertex<T extends GraphNodeType> {
    id: number;
    filter: GraphNodeType2AVFilter<T>;
    children: AVFilterGraphVertex<GraphNodeType>[];
    parents: AVFilterGraphVertex<GraphNodeType>[];
}
export interface FilterGraphDes {
    vertices: AVFilterGraphDesVertex<GraphNodeType>[];
    edges: {
        parent: number;
        child: number;
    }[];
}
export interface FilterGraphPortDes {
    port: MessagePort;
    id: number;
}
export interface FilterGraph {
    vertices: AVFilterGraphVertex<GraphNodeType>[];
    edges: {
        parent: number;
        child: number;
    }[];
    inputs: AVFilterGraphVertex<GraphNodeType>[];
    outputs: AVFilterGraphVertex<GraphNodeType>[];
}
export declare function createGraphDesVertex<T extends GraphNodeType>(type: T, options: AVFilterGraphFilterOptions<T>): AVFilterGraphDesVertex<T>;
export declare function createFilterGraph(des: FilterGraphDes, avframePool?: AVFramePool): FilterGraph;
export declare function checkFilterGraphInvalid(graph: FilterGraph, inputs: FilterGraphPortDes[], output: FilterGraphPortDes[]): boolean;
export {};
