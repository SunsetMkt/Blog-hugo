import { Uint8ArrayInterface } from 'common/io/interface';
import SocketIOLoader from './SocketIOLoader';
import { Data } from 'common/types/type';
export interface WebSocketOptions {
    protocols?: string | string[];
}
export interface WebSocketInfo {
    url: string;
    websocketOptions?: WebSocketOptions;
}
export default class WebSocketIOLoader extends SocketIOLoader {
    protected info: WebSocketInfo;
    protected socket: WebSocket;
    send(buffer: Uint8ArrayInterface): Promise<int32>;
    open(info: WebSocketInfo): Promise<int32>;
    seek(pos: int64, options?: Data): Promise<int32>;
    size(): Promise<int64>;
    stop(): Promise<void>;
}
