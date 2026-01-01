import type { FlvMetaData } from './type';
import { type IOReader, IOWriterSync } from '@libmedia/common/io';
export default class FlvScriptTag {
    onMetaData: Partial<FlvMetaData>;
    constructor();
    read(ioReader: IOReader, size: number): Promise<0 | -2>;
    computeSize(): number;
    write(ioWriter: IOWriterSync): void;
    dts2Position(dts: number): {
        pos: number;
        dts: number;
    };
    position2DTS(pos: number): number;
    canSeek(): boolean;
}
