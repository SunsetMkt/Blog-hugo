import OFormat from './OFormat';
import AVPacket from 'avutil/struct/avpacket';
import { AVOFormatContext } from '../AVFormatContext';
import { FragmentMode, MovMode } from './mov/mov';
import { AVFormat } from 'avutil/avformat';
export interface OMovFormatOptions {
    fragmentMode?: FragmentMode;
    movMode?: MovMode;
    fragment?: boolean;
    fastOpen?: boolean;
    defaultBaseIsMoof?: boolean;
    ignoreEditlist?: boolean;
}
export default class OMovFormat extends OFormat {
    type: AVFormat;
    private context;
    options: OMovFormatOptions;
    private annexb2AvccFilter;
    private avpacket;
    constructor(options?: OMovFormatOptions);
    init(formatContext: AVOFormatContext): number;
    destroy(formatContext: AVOFormatContext): Promise<void>;
    private enableStreams;
    writeHeader(formatContext: AVOFormatContext): number;
    private updateCurrentChunk;
    private updateCurrentFragment;
    private handleEAC3;
    writeAVPacket(formatContext: AVOFormatContext, avpacket: pointer<AVPacket>): number;
    writeTrailer(formatContext: AVOFormatContext): number;
    flush(formatContext: AVOFormatContext): number;
}
