import AudioWorkletNodeBase, { AudioWorkletNodeObserver } from './audioWorklet/base/AudioWorkletNodeBase';
export default class AudioSourceWorkletNode extends AudioWorkletNodeBase {
    constructor(context: AudioContext, observer: AudioWorkletNodeObserver, options?: AudioWorkletNodeOptions);
}
