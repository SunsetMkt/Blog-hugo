import { PAT, PES, PMT, TSPacket, TSSliceQueue } from './struct';
import AVBSFilter from '../../bsf/AVBSFilter';
export type PID = number;
export interface MpegtsContext {
    currentProgram: number;
    currentPmtPid: number;
    tsPacketSize: number;
    hasPAT: boolean;
    hasPMT: boolean;
    tsSliceQueueMap: Map<PID, TSSliceQueue>;
    pat: PAT;
    pmt: PMT;
    program2Pmt: Map<number, PMT>;
    ioEnd: boolean;
    startPid: number;
    delay: bigint;
}
export interface MpegtsStreamContext {
    pid: number;
    filter: AVBSFilter;
    tsPacket: TSPacket;
    pes: PES;
    continuityCounter: number;
    pesSlices: {
        total: number;
        buffers: Uint8Array[];
    };
    latm: boolean;
}
export interface MpegpsSlice {
    pts: int64;
    dts: int64;
    pos: int64;
    buffers: Uint8Array[];
}
export interface MpegpsContext {
    headerState: int32;
    psmType: Map<int32, int32>;
    pes: PES;
    slices: Map<int32, MpegpsSlice>;
    lastPtsMap: Map<int32, int64>;
    imkhCctv: boolean;
    sofdec: boolean;
    ioEnded: boolean;
    paddingPES: PES;
}
export interface MpegpsStreamContext {
    streamId: number;
    streamType: number;
    filter: AVBSFilter;
    paddingPES: PES;
}
