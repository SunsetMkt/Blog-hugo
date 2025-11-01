import type { AVOFormatContext } from '../AVFormatContext';
import type AVPacket from 'avutil/struct/avpacket';
import OFormat from './OFormat';
import type { PagePayload } from './ogg/OggPage';
import { AVCodecID } from 'avutil/codec';
import { AVFormat } from 'avutil/avformat';
export default class OOggFormat extends OFormat {
    type: AVFormat;
    private checksumTable;
    headerPagesPayload: PagePayload[];
    private cacheWriter;
    private page;
    constructor();
    private initChecksumTab;
    private getChecksum;
    init(formatContext: AVOFormatContext): number;
    private writePage;
    writeHeader(formatContext: AVOFormatContext): number;
    writeAVPacket(formatContext: AVOFormatContext, avpacket: pointer<AVPacket>): number;
    writeTrailer(formatContext: AVOFormatContext): number;
    flush(formatContext: AVOFormatContext): number;
    getCapabilities(): AVCodecID[];
    static Capabilities: AVCodecID[];
}
