import type { IOLoaderAudioStreamInfo, IOLoaderSubtitleStreamInfo, IOLoaderVideoStreamInfo } from './IOLoader';
import IOLoader from './IOLoader';
import type { Uint8ArrayInterface } from 'common/io/interface';
import type { FetchInfo } from './FetchIOLoader';
import { AVMediaType } from 'avutil/codec';
export default class HlsIOLoader extends IOLoader {
    private info;
    private masterPlaylist;
    private mediaPlayListIndex;
    private mainLoader;
    private loaders;
    private audioSelectedIndex;
    private subtitleSelectedIndex;
    private sleep;
    private aborted;
    private start;
    private fetchMasterPlayList;
    private buildUrl;
    private createLoader;
    open(info: FetchInfo): Promise<0 | -5>;
    read(buffer: Uint8ArrayInterface, options: {
        mediaType: AVMediaType;
    }): Promise<number>;
    seek(timestamp: int64, options: {
        mediaType: AVMediaType;
    }): Promise<0 | -3>;
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
    selectVideo(index: number): Promise<number>;
    selectAudio(index: number): Promise<number>;
    selectSubtitle(index: number): Promise<number>;
    getMinBuffer(): number;
    setStart(start: number): void;
}
