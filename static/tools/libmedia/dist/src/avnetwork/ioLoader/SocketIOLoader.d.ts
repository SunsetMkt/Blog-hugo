import { Uint8ArrayInterface } from 'common/io/interface';
import IOLoader, { IOLoaderOptions } from './IOLoader';
import { Data } from 'common/types/type';
export default abstract class SocketIOLoader extends IOLoader {
    protected readQueue: Uint8Array[];
    protected consume: (value: void | PromiseLike<void>) => void;
    constructor(options?: IOLoaderOptions);
    abstract send(buffer: Uint8ArrayInterface): Promise<int32>;
    abstract open(info: Data): Promise<int32>;
    private readInterval;
    read(buffer: Uint8ArrayInterface): Promise<number>;
    write(buffer: Uint8ArrayInterface): Promise<int32>;
}
