import AudioWorkletProcessorBase from './audioWorklet/base/AudioWorkletProcessorBase';
export default class AudioSourceWorkletProcessor extends AudioWorkletProcessorBase {
    private pullIPC;
    private frontBuffer;
    private backBuffer;
    private channels;
    private backBufferOffset;
    private ended;
    private frontBuffered;
    private pause;
    private firstRendered;
    private stopped;
    private afterPullResolve;
    private lastStutterTimestamp;
    constructor();
    private pull;
    private swapBuffer;
    process(inputs: Float32Array[][], outputs: Float32Array[][], parameters: {
        averaging: Float32Array;
        output: Float32Array;
    }): boolean;
}
