import type { Data, Range } from 'common/types/type';
import type { TaskOptions } from './Pipeline';
import Pipeline from './Pipeline';
import type { IOLoaderOptions } from 'avnetwork/ioLoader/IOLoader';
import type IOLoader from 'avnetwork/ioLoader/IOLoader';
import IPCPort from 'common/network/IPCPort';
import { IOType } from 'avutil/avformat';
import type { AVMediaType } from 'avutil/codec';
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
    getVideoList(taskId: string): Promise<import("avnetwork/ioLoader/IOLoader").IOLoaderVideoStreamInfo>;
    getAudioList(taskId: string): Promise<import("avnetwork/ioLoader/IOLoader").IOLoaderAudioStreamInfo>;
    getSubtitleList(taskId: string): Promise<import("avnetwork/ioLoader/IOLoader").IOLoaderSubtitleStreamInfo>;
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
