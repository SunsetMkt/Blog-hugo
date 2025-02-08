import { Data } from '../types/type';
import Emitter from '../event/Emitter';
export declare const NOTIFY = "notify";
export declare const REQUEST = "request";
export interface RpcMessage {
    id?: number | string;
    method?: string;
    params?: Data;
    error?: Data;
    result?: Data;
    seq?: number;
}
export default class IPCPort extends Emitter {
    protected port: MessagePort;
    private requestMap;
    private seq;
    closed: boolean;
    constructor(port: MessagePort);
    protected handle(event: MessageEvent<any>): void;
    notify(method: string, params?: Data, transfer?: any[]): void;
    request<T>(method: string, params?: Data, transfer?: any[]): Promise<T>;
    reply(request: RpcMessage, result?: any, error?: Data, transfer?: any[]): void;
    getPort(): MessagePort;
    destroy(): void;
}
