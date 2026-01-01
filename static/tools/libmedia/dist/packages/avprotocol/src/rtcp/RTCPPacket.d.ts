export declare class RTCPCommonHeader {
    version: uint8;
    padding: uint8;
    count: uint8;
    payloadType: uint8;
    length: uint16;
}
export declare class Report {
    ssrc: uint32;
    fractionLost: uint8;
    packetLost: uint32;
    highestSequence: uint32;
    interArrivalJitter: uint32;
    lsr: uint32;
    dlsr: uint32;
}
export declare class RTCPSendReport extends RTCPCommonHeader {
    ssrc: uint32;
    ntp: uint64;
    timestamp: uint32;
    senderPacketCount: uint32;
    senderOctetCount: uint16;
    reports: Report[];
}
export declare class RTCPReceiveReport extends RTCPCommonHeader {
    ssrc: uint32;
    reports: Report[];
}
