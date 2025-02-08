import { Uint8ArrayInterface } from 'common/io/interface';
import SocketIOLoader from './SocketIOLoader';
import { IOType } from 'avutil/avformat';
export interface RtmpIOInfo {
    url: string;
    uri: string;
    subProtocol: IOType;
    webtransportOptions?: WebTransportOptions;
}
export default class RtmpIOLoader extends SocketIOLoader {
    private info;
    private socket;
    private session;
    private ioReader;
    private ioWriter;
    private flvWriter;
    private flvHeader;
    private packetQueue;
    private flvHeaderWrote;
    private hasMetadata;
    private bufferReader;
    private writeFlvData;
    private handleRtmpPacket;
    send(buffer: Uint8ArrayInterface): Promise<int32>;
    open(info: RtmpIOInfo): Promise<int32>;
    seek(pos: int64): Promise<int32>;
    size(): Promise<int64>;
    stop(): Promise<void>;
}
