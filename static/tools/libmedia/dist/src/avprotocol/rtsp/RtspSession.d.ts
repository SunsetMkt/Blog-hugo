import IOReader from 'common/io/IOReader';
import IOWriter from 'common/io/IOWriter';
import { TextMessageSession } from 'common/network/textMessage/message';
import { RtspStreamingMode } from './rtsp';
import { Range } from 'common/types/type';
export interface RtspTransport {
    trackId: number;
    streamMode: RtspStreamingMode;
    clientPort?: number;
    serverPort?: number;
    destination?: string;
    interleaved?: number;
    multcast?: boolean;
}
export default class RtspSession extends TextMessageSession {
    private seq;
    version: string;
    uri: string;
    authorization: string;
    constructor(uri: string, ioReader: IOReader, ioWriter: IOWriter);
    options(): Promise<import("common/network/textMessage/message").TextMessageResponse>;
    describe(): Promise<import("common/network/textMessage/message").TextMessageResponse>;
    setup(transport: RtspTransport, sessionId?: string): Promise<import("common/network/textMessage/message").TextMessageResponse>;
    play(sessionId: string, range?: Range): Promise<import("common/network/textMessage/message").TextMessageResponse>;
    pause(sessionId: string): Promise<import("common/network/textMessage/message").TextMessageResponse>;
    teardown(sessionId: string): Promise<void>;
    readPacket(): Promise<{
        interleaved: number;
        data: Uint8Array<ArrayBufferLike>;
    }>;
}
