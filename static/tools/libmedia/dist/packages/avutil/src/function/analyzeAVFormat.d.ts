import { AVFormat } from '../avformat';
import { type IOReader } from '@libmedia/common/io';
export default function analyzeAVFormat(ioReader: IOReader, defaultFormat?: AVFormat): Promise<AVFormat>;
