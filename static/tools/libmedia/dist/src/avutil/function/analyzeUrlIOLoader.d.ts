import { IOType } from '../avformat';
import { Data, HttpOptions } from 'common/types/type';
export default function analyzeUrlIOLoader(source: string, defaultExt?: string, httpOptions?: HttpOptions): Promise<{
    type: IOType;
    ext: string;
    info: Data;
}>;
