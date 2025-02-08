import AVFilterNode from './AVFilterNode';
import AVOutputNode from './AVOutputNode';
export default class AVInputNode {
    private nodePort;
    private outputNode;
    constructor(port: MessagePort);
    connect(node: AVFilterNode | AVOutputNode): void;
}
