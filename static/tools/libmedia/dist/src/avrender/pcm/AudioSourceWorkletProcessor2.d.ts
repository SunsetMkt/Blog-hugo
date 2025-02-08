import AudioWorkletProcessorBase from './audioWorklet/base/AudioWorkletProcessorBase';
export default class AudioSourceWorkletProcessor2 extends AudioWorkletProcessorBase {
    private pullIPC;
    private frontBuffer;
    private backBuffer;
    private channels;
    private backBufferOffset;
    private ended;
    private frontBuffered;
    private firstRendered;
    private pause;
    private stopped;
    private afterPullResolve;
    private lastStutterTimestamp;
    constructor();
    private allocBuffer;
    private freeBuffer;
    private pull;
    private swapBuffer;
    process(inputs: Float32Array[][], outputs: Float32Array[][], parameters: {
        averaging: Float32Array;
        output: Float32Array;
    }): boolean;
}
