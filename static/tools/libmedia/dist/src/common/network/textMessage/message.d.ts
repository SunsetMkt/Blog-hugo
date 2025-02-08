import IOReader from '../../io/IOReader';
import IOWriter from '../../io/IOWriter';
export declare class TextMessageRequest {
    method: string;
    uri: string;
    protocol: string;
    headers: Record<string, string>;
    content: string;
    constructor(method: string, uri: string, protocol: string, headers?: Record<string, string>, content?: string);
    setHeader(key: string, value: string): void;
    encode(): string;
}
export declare class TextMessageResponse {
    protocol: string;
    statusCode: number;
    statusText: string;
    headers: Record<string, string>;
    content: string;
    constructor(protocol: string, statusCode: number, statusText: string, headers: Record<string, string>, content: string);
}
export declare abstract class TextMessageSession {
    protected ioReader: IOReader;
    protected ioWriter: IOWriter;
    constructor(ioReader: IOReader, ioWriter: IOWriter);
    protected readResponse(): Promise<TextMessageResponse>;
    request(request: TextMessageRequest): Promise<TextMessageResponse>;
    notify(request: TextMessageRequest): Promise<void>;
}
