import { AVOFormatContext } from '../AVFormatContext';
import AVPacket from 'avutil/struct/avpacket';
import OFormat from './OFormat';
import { AVFormat } from 'avutil/avformat';
export interface OMpegtsFormatOptions {
    pesMaxSize?: number;
    delay?: number;
    latm?: boolean;
    patPeriod?: number;
}
export default class OMpegtsFormat extends OFormat {
    type: AVFormat;
    private context;
    private sdtPacket;
    private patPacket;
    private pmtPacket;
    private options;
    private firstDtsCheck;
    private firstVideoCheck;
    private lastPatDst;
    private patPeriod;
    private avpacket;
    constructor(options?: OMpegtsFormatOptions);
    init(context: AVOFormatContext): number;
    destroy(context: AVOFormatContext): Promise<void>;
    writeHeader(context: AVOFormatContext): number;
    writeAVPacket(formatContext: AVOFormatContext, avpacket: pointer<AVPacket>): number;
    writeTrailer(context: AVOFormatContext): number;
    flush(context: AVOFormatContext): number;
}
