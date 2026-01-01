import { IOType } from '../avformat';
import { type Data, type HttpOptions } from '@libmedia/common';
export default function analyzeUrlIOLoader(source: string, defaultExt?: string, httpOptions?: HttpOptions): Promise<{
    type: IOType;
    ext: string;
    info: Data;
}>;
