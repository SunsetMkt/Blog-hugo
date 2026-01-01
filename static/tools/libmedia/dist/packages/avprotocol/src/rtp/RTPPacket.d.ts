export declare class RTPPacketHeader {
    version: bit<uint8, 2>;
    padding: bit<uint8, 1>;
    extension: bit<uint8, 1>;
    csrc: bit<uint8, 4>;
    masker: bit<uint8, 1>;
    payloadType: bit<uint8, 7>;
    sequence: uint16;
    timestamp: uint32;
    ssrc: uint32;
    csrcList: uint32[];
}
export declare class RTPHeaderExtension {
    id: uint16;
    length: uint16;
    extension: Uint8Array;
    headers: Map<int8, Uint8Array>;
    hasOneByteExtensions(): boolean;
    hasTwoBytesExtensions(): boolean;
    parse(): void;
}
export declare class RTPPacket {
    header: RTPPacketHeader;
    headerExtension: RTPHeaderExtension;
    payload: Uint8Array;
}
