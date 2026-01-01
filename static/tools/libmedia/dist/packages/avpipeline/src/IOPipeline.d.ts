import { IPCPort } from '@libmedia/common/network';
import { type IOLoaderOptions, type IOLoader } from '@libmedia/avnetwork';
import { IOType, type AVMediaType } from '@libmedia/avutil';
import type { TaskOptions } from './Pipeline';
import Pipeline from './Pipeline';
import type { Data, Range } from '@libmedia/common';
export interface IOTaskOptions extends TaskOptions {
    type: IOType;
    options: IOLoaderOptions;
    info: Data;
    range: Range;
}
type SelfTask = IOTaskOptions & {
    ioLoader: IOLoader;
    ipcPort: IPCPort;
};
export default class IOPipeline extends Pipeline {
    tasks: Map<string, SelfTask>;
    constructor();
    private createTask;
    open(id: string): Promise<number>;
    getDuration(taskId: string): Promise<number>;
    hasAudio(taskId: string): Promise<boolean>;
    hasVideo(taskId: string): Promise<boolean>;
    hasSubtitle(taskId: string): Promise<boolean>;
    getVideoList(taskId: string): Promise<import("@libmedia/avnetwork").IOLoaderVideoStreamInfo>;
    getAudioList(taskId: string): Promise<import("@libmedia/avnetwork").IOLoaderAudioStreamInfo>;
    getSubtitleList(taskId: string): Promise<import("@libmedia/avnetwork").IOLoaderSubtitleStreamInfo>;
    selectVideo(taskId: string, index: number): Promise<number>;
    selectAudio(taskId: string, index: number): Promise<number>;
    selectSubtitle(taskId: string, index: number): Promise<number>;
    getCurrentProtection(taskId: string, mediaType: AVMediaType): Promise<import("@libmedia/avprotocol/dash/type").Protection>;
    getMinBuffer(taskId: string): Promise<number>;
    setStart(taskId: string, start: number): Promise<void | 0>;
    registerTask(options: IOTaskOptions): Promise<number>;
    unregisterTask(id: string): Promise<void>;
}
export {};
