import IOLoader, { IOLoaderAudioStreamInfo, IOLoaderSubtitleStreamInfo, IOLoaderVideoStreamInfo } from './IOLoader';
import { Uint8ArrayInterface } from 'common/io/interface';
import { FetchInfo } from './FetchIOLoader';
import { Range } from 'common/types/type';
type MediaType = 'audio' | 'video' | 'subtitle';
export default class DashIOLoader extends IOLoader {
    private info;
    private range;
    private mediaPlayList;
    private fetchMediaPlayListPromise;
    private minBuffer;
    private audioResource;
    private videoResource;
    private subtitleResource;
    private createResource;
    private fetchMediaPlayList;
    open(info: FetchInfo, range: Range): Promise<0 | -5>;
    private readResource;
    read(buffer: Uint8ArrayInterface, options: {
        mediaType: MediaType;
    }): Promise<number>;
    private seekResource;
    seek(timestamp: int64, options: {
        mediaType: MediaType;
    }): Promise<number>;
    size(): Promise<bigint>;
    abort(): Promise<void>;
    stop(): Promise<void>;
    getDuration(): number;
    hasVideo(): boolean;
    hasAudio(): boolean;
    hasSubtitle(): boolean;
    getVideoList(): IOLoaderVideoStreamInfo;
    getAudioList(): IOLoaderAudioStreamInfo;
    getSubtitleList(): IOLoaderSubtitleStreamInfo;
    selectVideo(index: number): void;
    selectAudio(index: number): void;
    selectSubtitle(index: number): void;
    getMinBuffer(): number;
}
export {};
