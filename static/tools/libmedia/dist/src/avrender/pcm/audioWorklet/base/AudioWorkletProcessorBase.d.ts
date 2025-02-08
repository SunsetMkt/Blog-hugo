import IPCPort from 'common/network/IPCPort';
import { Data } from 'common/types/type';
export default abstract class AudioWorkletProcessorBase extends AudioWorkletProcessor {
    protected ipcPort: IPCPort;
    constructor();
    request(method: string, params?: Data, transfer?: any[]): Promise<unknown>;
    notify(method: string, params?: Data, transfer?: any[]): void;
}
