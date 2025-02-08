import { Uint8ArrayInterface } from 'common/io/interface';
import { IOError } from 'common/io/error';
import SocketIOLoader from './SocketIOLoader';
import { Data } from 'common/types/type';
export interface WebTransportInfo {
    url: string;
    webtransportOptions?: WebTransportOptions;
}
export default class WebTransportIOLoader extends SocketIOLoader {
    protected info: WebTransportInfo;
    protected transport: WebTransport;
    protected datagramReader: ReadableStreamDefaultReader<Uint8Array>;
    protected reader: ReadableStreamDefaultReader<Uint8Array>;
    protected datagramWriter: WritableStreamDefaultWriter<Uint8Array>;
    protected writer: WritableStreamDefaultWriter<Uint8Array>;
    protected stream: WebTransportBidirectionalStream;
    protected readPacketQueue: Uint8Array[];
    protected consumePacket: (value: void | PromiseLike<void>) => void;
    send(buffer: Uint8ArrayInterface): Promise<int32>;
    private handleRead;
    private readDatagram;
    open(info: WebTransportInfo): Promise<int32>;
    readPacket(buffer: Uint8ArrayInterface): Promise<number>;
    writePacket(buffer: Uint8ArrayInterface): Promise<0 | IOError.INVALID_OPERATION>;
    seek(pos: int64, options?: Data): Promise<int32>;
    size(): Promise<int64>;
    stop(): Promise<void>;
}
