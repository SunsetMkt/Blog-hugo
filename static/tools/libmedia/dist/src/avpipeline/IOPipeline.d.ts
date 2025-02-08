import { Data, Range } from 'common/types/type';
import Pipeline, { TaskOptions } from './Pipeline';
import IOLoader, { IOLoaderOptions } from 'avnetwork/ioLoader/IOLoader';
import IPCPort from 'common/network/IPCPort';
import { IOType } from 'avutil/avformat';
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
    selectVideo(taskId: string, index: number): Promise<void>;
    selectAudio(taskId: string, index: number): Promise<void>;
    selectSubtitle(taskId: string, index: number): Promise<void>;
    getMinBuffer(taskId: string): Promise<number>;
    registerTask(options: IOTaskOptions): Promise<number>;
    unregisterTask(id: string): Promise<void>;
}
export {};
