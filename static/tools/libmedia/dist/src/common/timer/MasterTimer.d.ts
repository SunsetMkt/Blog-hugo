export default class MasterTimer {
    base: bigint;
    rate: bigint;
    startTimestamp: bigint;
    start(): void;
    getMasterTime(): bigint;
    setRate(rate: number): void;
    setMasterTime(time: bigint): void;
}
