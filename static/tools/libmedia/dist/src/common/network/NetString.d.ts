/**
 * @file netstring 实现
 */
import { Data } from '../types/type';
export type NetStringPayload = {
    cmd?: number;
    payload: Uint8Array;
    serialized: Uint8Array;
};
type Options = {
    enableCommand?: boolean;
    onDecodeText: (instance: NetString, payload: NetStringPayload) => void;
    bufferSize: number;
} & Data;
export default class NetString {
    private ringBuffer;
    options: Options;
    constructor(options: Options);
    private isDigit;
    static encode(payload: Uint8Array, cmd?: number): Uint8Array<ArrayBuffer>;
    decode(buffer?: Uint8Array): void;
    destroy(): void;
}
export {};
