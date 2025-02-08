import IPCPort from 'common/network/IPCPort';
import { Data } from 'common/types/type';
export interface AudioWorkletNodeObserver {
    onEnded: () => void;
    onFirstRendered: () => void;
    onStutter: () => void;
}
export default class AudioWorkletNodeBase {
    protected audioWorkletNode: AudioWorkletNode;
    protected ipcPort: IPCPort;
    protected observer: AudioWorkletNodeObserver;
    constructor(context: AudioContext, observer: AudioWorkletNodeObserver, processor: string, options?: AudioWorkletNodeOptions);
    request(method: string, params?: Data, transfer?: any[]): Promise<unknown>;
    connect(audioNode: AudioNode): void;
    getNode(): AudioNode;
    disconnect(): void;
    getParameters(type: string): AudioParam;
}
