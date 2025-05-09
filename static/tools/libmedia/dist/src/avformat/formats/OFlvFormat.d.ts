import OFormat from './OFormat';
import FlvHeader from './flv/FlvHeader';
import FlvScriptTag from './flv/FlvScriptTag';
import AVPacket from 'avutil/struct/avpacket';
import { AVOFormatContext } from '../AVFormatContext';
import { AVFormat } from 'avutil/avformat';
export interface OFlvFormatOptions {
    addKeyframePositions?: boolean;
    live?: boolean;
    enableNanoTimestamp?: boolean;
    useLegacyHevc?: boolean;
}
export default class OFlvFormat extends OFormat {
    type: AVFormat;
    private context;
    header: FlvHeader;
    script: FlvScriptTag;
    options: OFlvFormatOptions;
    private annexb2AvccFilter;
    private avpacket;
    private headerWriter;
    private headerBuffers;
    constructor(options?: OFlvFormatOptions);
    private getDefaultStream;
    private isEnhancedStream;
    init(formatContext: AVOFormatContext): number;
    destroy(formatContext: AVOFormatContext): Promise<void>;
    private writeMetadata;
    private writeMultichannelConfig;
    writeHeader(formatContext: AVOFormatContext): number;
    private isNewExtradata;
    writeAVPacket(formatContext: AVOFormatContext, avpacket: pointer<AVPacket>): number;
    writeTrailer(formatContext: AVOFormatContext): number;
    flush(context: AVOFormatContext): number;
}
