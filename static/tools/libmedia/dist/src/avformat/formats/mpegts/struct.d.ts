import { TSStreamType } from './mpegts';
import { PID } from './type';
export declare class TSPacketAdaptationFieldInfo {
    discontinuityIndicator: number;
    randomAccessIndicator: number;
    elementaryStreamPriorityIndicator: number;
    pcrFlag: number;
    opcrFlag: number;
    splicingPointFlag: number;
    transportPrivateDataFlag: number;
    adaptationFieldExtensionFlag: number;
    pcr: bigint;
    opcr: bigint;
    spliceCountDown: number;
    transportPrivateData: Uint8Array;
    extension: Uint8Array;
}
export declare class TSPacket {
    pos: bigint;
    payloadUnitStartIndicator: number;
    transportPriority: number;
    pid: PID;
    adaptationFieldControl: number;
    continuityCounter: number;
    transportScramblingControl: number;
    adaptationFieldInfo: TSPacketAdaptationFieldInfo;
    payload: Uint8Array;
}
export declare class TSSliceQueue {
    slices: Uint8Array[];
    totalLength: number;
    expectedLength: number;
    randomAccessIndicator: number;
    pid: PID;
    streamType: TSStreamType;
    pos: bigint;
}
export declare class PAT {
    versionNumber: number;
    networkPid: PID;
    program2PmtPid: Map<number, PID>;
}
export declare class SectionPacket extends TSPacket {
}
export declare class ESDescriptor {
    tag: number;
    buffer: Uint8Array;
}
export declare class PMT {
    versionNumber: number;
    programNumber: number;
    pcrPid: PID;
    pid2StreamType: Map<number, TSStreamType>;
    pid2ESDescriptor: Map<number, ESDescriptor[]>;
}
export declare class PES {
    pid: PID;
    streamType: TSStreamType;
    streamId: number;
    dts: bigint;
    pts: bigint;
    pos: bigint;
    payload: Uint8Array;
    data: Uint8Array;
    randomAccessIndicator: number;
}
