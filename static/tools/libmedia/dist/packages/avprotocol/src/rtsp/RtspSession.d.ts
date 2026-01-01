import { RtspStreamingMode } from './rtsp';
import type { Range } from '@libmedia/common';
import type { IOReader, IOWriter } from '@libmedia/common/io';
import { TextMessageSession } from '@libmedia/common/network';
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
    options(): Promise<import("@libmedia/common/network").TextMessageResponse>;
    describe(): Promise<import("@libmedia/common/network").TextMessageResponse>;
    setup(transport: RtspTransport, sessionId?: string): Promise<import("@libmedia/common/network").TextMessageResponse>;
    play(sessionId: string, range?: Range): Promise<import("@libmedia/common/network").TextMessageResponse>;
    pause(sessionId: string): Promise<import("@libmedia/common/network").TextMessageResponse>;
    teardown(sessionId: string): Promise<void>;
    readPacket(): Promise<{
        interleaved: number;
        data: Uint8Array<ArrayBufferLike>;
    }>;
}
