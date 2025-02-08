import { AudioWorkletNodeObserver } from './audioWorklet/base/AudioWorkletNodeBase';
import { Data } from 'common/types/type';
export interface AudioSourceBufferNodeOptions extends AudioWorkletNodeOptions {
    isMainWorker?: boolean;
}
export default class AudioSourceBufferNode {
    private context;
    private observer;
    private options;
    private pullIPC;
    private buffer;
    private channels;
    private ended;
    private float32;
    private buffered;
    private pause;
    private startTime;
    private dest;
    private queue;
    private firstRendered;
    private lastStutterTimestamp;
    constructor(context: AudioContext, observer: AudioWorkletNodeObserver, options?: AudioSourceBufferNodeOptions);
    request(method: string, params?: Data, transfer?: any[]): Promise<void>;
    private allocBuffer;
    private freeBuffer;
    private pullInterval;
    private pull;
    private buffering;
    connect(dest: AudioNode): void;
    disconnect(): void;
    private process;
}
