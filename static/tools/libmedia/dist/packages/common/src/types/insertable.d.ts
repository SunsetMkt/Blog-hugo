declare interface MediaStreamTrackGenerator<T extends (VideoFrame | AudioData)> extends MediaStreamTrack {
    writable: WritableStream<T>;
}
declare const MediaStreamTrackGenerator: {
    prototype: MediaStreamTrackGenerator<VideoFrame | AudioData>;
    new <T extends 'video' | 'audio'>(options: {
        kind: T;
    }): T extends 'video' ? MediaStreamTrackGenerator<VideoFrame> : MediaStreamTrackGenerator<AudioData>;
};
declare interface MediaStreamTrackProcessor<T extends (VideoFrame | AudioData)> {
    readable: ReadableStream<T>;
}
declare const MediaStreamTrackProcessor: {
    prototype: MediaStreamTrackProcessor<VideoFrame | AudioData>;
    new (options: {
        track: MediaStreamTrack;
    }): any;
};
