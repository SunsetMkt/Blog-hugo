import { type IOReader } from '@libmedia/common/io';
export default class NaluReader {
    private buffer;
    private pos;
    private end;
    private ended;
    constructor();
    read(ioReader: IOReader): Promise<Uint8Array<ArrayBufferLike>>;
    reset(): void;
}
