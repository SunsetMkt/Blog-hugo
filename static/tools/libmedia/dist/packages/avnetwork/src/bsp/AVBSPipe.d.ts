import type { Uint8ArrayInterface } from '@libmedia/common/io';
export default abstract class AVBSPipe {
    onFlush: (buffer: Uint8Array) => Promise<number>;
    abstract read(buffer: Uint8ArrayInterface): Promise<number>;
}
