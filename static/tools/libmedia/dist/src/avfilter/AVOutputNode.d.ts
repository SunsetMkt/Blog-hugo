import AVFilterNode, { AVFilterNodePort } from './AVFilterNode';
import AVInputNode from './AVInputNode';
export default class AVOutputNode {
    nodePort: AVFilterNodePort;
    private inputNode;
    constructor(port: MessagePort);
    getFreeInputNodePort(): {
        index: number;
        port: AVFilterNodePort;
    };
    addInputPeer(node: AVFilterNode | AVInputNode): void;
}
