export default function getMediaSource(): {
    new (): MediaSource;
    prototype: MediaSource;
    readonly canConstructInDedicatedWorker: boolean;
    isTypeSupported(type: string): boolean;
} | {
    new (): ManagedMediaSource;
    prototype: ManagedMediaSource;
    isTypeSupported(type: string): boolean;
};
