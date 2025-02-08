import { Cond } from '../thread/cond';
import { Mutex } from '../thread/mutex';
export declare class PthreadOnce {
    atomic: atomic_int32;
}
export declare class Pthread {
    id: int32;
    retval: pointer<void>;
    flags: int32;
    status: atomic_int32;
}
export declare class ThreadDescriptor {
    flags: int32;
    status: PthreadStatus;
}
export declare const enum PthreadFlags {
    DETACH = 1,
    POOL = 2,
    EXIT = 4
}
export declare const enum PthreadStatus {
    STOP = 0,
    RUN = 1
}
export type ChildThread = {
    thread: pointer<Pthread>;
    worker: Worker;
    stackPointer: pointer<void>;
    threadDescriptor: pointer<ThreadDescriptor>;
};
export declare class ThreadWait {
    thread: pointer<Pthread>;
    func: pointer<(args: pointer<void>) => void>;
    args: pointer<void>;
    cond: Cond;
    mutex: Mutex;
}
