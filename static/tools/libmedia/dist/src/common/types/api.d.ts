interface ManagedMediaSource extends EventTarget {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/activeSourceBuffers) */
    readonly activeSourceBuffers: SourceBufferList;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/duration) */
    duration: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/sourceclose_event) */
    onsourceclose: ((this: MediaSource, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/sourceended_event) */
    onsourceended: ((this: MediaSource, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/sourceopen_event) */
    onsourceopen: ((this: MediaSource, ev: Event) => any) | null;
    onstartstreaming: ((this: MediaSource, ev: Event) => any) | null;
    onendstreaming: ((this: MediaSource, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/readyState) */
    readonly readyState: ReadyState;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/sourceBuffers) */
    readonly sourceBuffers: SourceBufferList;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/addSourceBuffer) */
    addSourceBuffer(type: string): SourceBuffer;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/clearLiveSeekableRange) */
    clearLiveSeekableRange(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/endOfStream) */
    endOfStream(error?: EndOfStreamError): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/removeSourceBuffer) */
    removeSourceBuffer(sourceBuffer: SourceBuffer): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/setLiveSeekableRange) */
    setLiveSeekableRange(start: number, end: number): void;
    addEventListener<K extends keyof MediaSourceEventMap>(type: K, listener: (this: MediaSource, ev: MediaSourceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaSourceEventMap>(type: K, listener: (this: MediaSource, ev: MediaSourceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare const ManagedMediaSource: {
    prototype: ManagedMediaSource;
    new (): ManagedMediaSource;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/isTypeSupported_static) */
    isTypeSupported(type: string): boolean;
};
declare const webkitAudioContext: {
    prototype: AudioContext;
    new (contextOptions?: AudioContextOptions): AudioContext;
};
interface Element {
    mozRequestFullScreen?: (options?: FullscreenOptions) => Promise<void>;
    webkitRequestFullscreen?: (options?: FullscreenOptions) => Promise<void>;
    msRequestFullscreen?: (options?: FullscreenOptions) => Promise<void>;
}
interface Document {
    mozExitFullScreen?: () => Promise<void>;
    webkitExitFullscreen?: () => Promise<void>;
}
interface Blob {
    mozSlice?: (start?: number, end?: number, contentType?: string) => Blob;
    webkitSlice?: (start?: number, end?: number, contentType?: string) => Blob;
}
interface Window {
    DEBUG?: boolean;
}
interface MediaSource {
    handle?: MediaSource;
}
declare namespace WebAssembly {
    const Suspending: {
        prototype: Object;
        new <T extends (...args: any[]) => any>(fn: T): T;
    };
    function promising<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => Promise<ReturnType<T>>;
}
interface DocumentPictureInPictureOptions {
    disallowReturnToOpener?: boolean;
    width?: number;
    height?: number;
}
interface DocumentPictureInPicture {
    onenter: Function | null;
    window: Window | null;
    requestWindow: (options: DocumentPictureInPictureOptions) => Promise<Window>;
}
declare const documentPictureInPicture: DocumentPictureInPicture;
declare abstract class AudioWorkletProcessor {
    protected port: MessagePort;
    abstract process(inputs: Float32Array[][], outputs: Float32Array[][], parameters: {
        averaging: Float32Array;
        output: Float32Array;
    }): boolean;
}
interface AudioParamMap {
    get(name: string): AudioParam;
}
declare function registerProcessor(name: string, processor: typeof AudioWorkletProcessor): void;
/**
 * The FileReaderSync interface provides methods to read File or Blob objects synchronously.
 * This is available in Web Workers and allows blocking reads of file data.
 */
interface FileReaderSync {
    /**
     * Reads the contents of the specified `Blob` or `File` as an `ArrayBuffer`.
     *
     * @param blob The `Blob` or `File` object to read.
     * @returns An `ArrayBuffer` containing the binary data from the file.
     */
    readAsArrayBuffer(blob: Blob): ArrayBuffer;
    /**
     * Reads the contents of the specified `Blob` or `File` as a binary string.
     *
     * @param blob The `Blob` or `File` object to read.
     * @returns A binary string representation of the file data.
     */
    readAsBinaryString(blob: Blob): string;
    /**
     * Reads the contents of the specified `Blob` or `File` as a string.
     *
     * @param blob The `Blob` or `File` object to read.
     * @returns A `string` containing the file data interpreted as UTF-8 text.
     */
    readAsText(blob: Blob, encoding?: string): string;
    /**
     * Reads the contents of the specified `Blob` or `File` as a data URL.
     *
     * @param blob The `Blob` or `File` object to read.
     * @returns A `string` representing the file's data as a Base64-encoded data URL.
     */
    readAsDataURL(blob: Blob): string;
}
declare const FileReaderSync: {
    new (): FileReaderSync;
};
interface VideoFrameBufferInit {
    rotation?: number;
    flip?: boolean;
}
interface VideoFrameInit {
    rotation?: number;
    flip?: boolean;
}
