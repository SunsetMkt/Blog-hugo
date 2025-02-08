import AudioWorkletNodeBase, { AudioWorkletNodeObserver } from '../base/AudioWorkletNodeBase';
export interface MeterWorkletNodeObserver extends AudioWorkletNodeObserver {
    onAudioLevel: (audioLevel: number) => void;
}
export default class MeterWorkletNode extends AudioWorkletNodeBase {
    protected observer: MeterWorkletNodeObserver;
    private audioLevel;
    constructor(context: AudioContext, observer: MeterWorkletNodeObserver, options?: AudioWorkletNodeOptions);
    getAudioLevel(): number;
}
