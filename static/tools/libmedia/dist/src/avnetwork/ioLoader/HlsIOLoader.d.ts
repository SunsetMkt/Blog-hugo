import IOLoader, { IOLoaderAudioStreamInfo, IOLoaderSubtitleStreamInfo, IOLoaderVideoStreamInfo } from './IOLoader';
import { Uint8ArrayInterface } from 'common/io/interface';
import { FetchInfo } from './FetchIOLoader';
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
    selectVideo(index: number): void;
    selectAudio(index: number): void;
    selectSubtitle(index: number): void;
    getMinBuffer(): number;
}
