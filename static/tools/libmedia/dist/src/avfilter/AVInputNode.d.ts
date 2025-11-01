import type AVFilterNode from './AVFilterNode';
import type AVOutputNode from './AVOutputNode';
export default class AVInputNode {
    private nodePort;
    private outputNode;
    constructor(port: MessagePort);
    connect(node: AVFilterNode | AVOutputNode): void;
}
