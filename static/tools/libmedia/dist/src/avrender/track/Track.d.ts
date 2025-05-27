export type TrackOptions = {
    mediaBufferMax?: number;
};
export default class Track {
    protected sourceBuffer: SourceBuffer;
    private operatorQueue;
    private updating;
    private lastRemoveTime;
    private paddingCallback;
    protected options: TrackOptions;
    private ending;
    onQuotaExceededError?: () => void;
    onEnded?: () => void;
    constructor(options?: TrackOptions);
    setSourceBuffer(sourceBuffer: SourceBuffer): void;
    changeMimeType(type: string, mode: AppendMode): void;
    enqueue(): void;
    addBuffer(buffer: Uint8Array, callback?: () => void): void;
    insertEnqueueCallback(callback: () => void): void;
    updateTimestampOffset(timestampOffset: number, callback?: () => void): void;
    removeBuffer(time: number, callback?: () => void): void;
    removeAllBuffer(callback?: () => void): void;
    end(): void;
    stop(): void;
    reset(): void;
    isPaused(): number;
    getQueueLength(): number;
    getBufferedTime(): number;
    getBufferedStart(): number;
    getBufferedEnd(): number;
    getBufferedDuration(currentTime: number): number;
    getSourceBuffer(): SourceBuffer;
    setMediaBufferMax(max: number): void;
    getMediaBufferMax(): number;
    destroy(): void;
}
