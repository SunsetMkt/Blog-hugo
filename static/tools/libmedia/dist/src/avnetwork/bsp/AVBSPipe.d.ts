import { Uint8ArrayInterface } from 'common/io/interface';
export default abstract class AVBSPipe {
    onFlush: (buffer: Uint8Array) => Promise<number>;
    abstract read(buffer: Uint8ArrayInterface): Promise<number>;
}
