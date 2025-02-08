import AVFrame, { AVFramePool } from 'avutil/struct/avframe';
import IPCPort from 'common/network/IPCPort';
import AVOutputNode from './AVOutputNode';
import { Data } from 'common/types/type';
export interface AVFilterNodeOptions {
    avframePool?: AVFramePool;
}
export declare class AVFilterNodePort extends IPCPort {
    private channel;
    private next;
    constructor(channel: MessageChannel | MessagePort);
    connect(port: AVFilterNodePort): void;
    disconnect(): void;
    getInnerPort(): MessagePort;
}
export default abstract class AVFilterNode {
    protected options: AVFilterNodeOptions;
    protected inputAVFilterNodePort: AVFilterNodePort[];
    protected outputAVFilterNodePort: AVFilterNodePort[];
    protected inputInnerNodePort: IPCPort[];
    protected outputInnerNodePort: IPCPort[];
    private currentOutput;
    private consumedCount;
    private pending;
    protected inputCount: number;
    protected outputCount: number;
    private inputConnectedMap;
    private outputConnectedMap;
    constructor(options: AVFilterNodeOptions, inputCount: number, outputCount: number);
    private handlePull;
    getInputNodePort(index: number): AVFilterNodePort;
    getOutputNodePort(index: number): AVFilterNodePort;
    getInputCount(): number;
    getOutputCount(): number;
    getFreeInputNodePort(): {
        index: number;
        port: AVFilterNodePort;
    };
    getFreeOutputNodePort(): {
        index: number;
        port: AVFilterNodePort;
    };
    addInputPeer(node: any, index: number): void;
    removeInputPeer(node: any): void;
    addOutputPeer(node: any, index: number): void;
    removeOutputPeer(node: any): void;
    connect(node: AVFilterNode | AVOutputNode): void;
    private disconnectNode;
    disconnect(node?: any): void;
    abstract ready(): void | Promise<void>;
    abstract destroy(): void | Promise<void>;
    abstract process(inputs: (pointer<AVFrame> | VideoFrame | int32)[], outputs: (pointer<AVFrame> | VideoFrame | int32)[], options?: Data): void | Promise<void>;
}
