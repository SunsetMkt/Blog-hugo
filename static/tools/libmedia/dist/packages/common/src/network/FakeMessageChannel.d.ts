declare class FakeMessageChannelPort extends EventTarget {
    peer: FakeMessageChannelPort;
    postMessage(message: any, transfer?: Transferable[]): void;
    onmessage: (this: FakeMessageChannelPort, ev: MessageEvent<any>) => any;
    onmessageerror: (this: FakeMessageChannelPort, ev: MessageEvent<any>) => any;
    close(): void;
    start(): void;
}
export default class FakeMessageChannel {
    port1: FakeMessageChannelPort;
    port2: FakeMessageChannelPort;
    constructor();
}
export {};
