import IOLoader, { IOLoaderAudioStreamInfo, IOLoaderSubtitleStreamInfo, IOLoaderVideoStreamInfo } from './IOLoader';
import { Uint8ArrayInterface } from 'common/io/interface';
import { FetchInfo } from './FetchIOLoader';
import { AVMediaType } from 'avutil/codec';
export default class DashIOLoader extends IOLoader {
    private info;
    private mediaPlayList;
    private fetchMediaPlayListPromise;
    private minBuffer;
    private audioResource;
    private videoResource;
    private subtitleResource;
    private aborted;
    private signal;
    private createResource;
    private addHistory;
    private fetchMediaPlayList;
    open(info: FetchInfo): Promise<0 | -5>;
    private readResource;
    read(buffer: Uint8ArrayInterface, options: {
        mediaType: AVMediaType;
    }): Promise<number>;
    private seekResource;
    seek(timestamp: int64, options: {
        mediaType: AVMediaType;
    }): Promise<number>;
    size(): Promise<bigint>;
    private abortSleep;
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
    getCurrentProtection(mediaType: AVMediaType): import("avprotocol/dash/type").Protection;
    getMinBuffer(): number;
}
