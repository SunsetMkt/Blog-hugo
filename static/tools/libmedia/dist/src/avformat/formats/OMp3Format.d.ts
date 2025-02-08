import { AVOFormatContext } from '../AVFormatContext';
import AVPacket from 'avutil/struct/avpacket';
import OFormat from './OFormat';
import { AVFormat } from 'avutil/avformat';
import { Mp3FormatOptions } from './mp3/type';
import { FrameHeader } from './mp3/frameHeader';
export interface Mp3Context {
    size: uint32;
    frames: uint32;
    seen: uint32;
    want: uint32;
    bag: uint32[];
    pos: uint32;
    initialBitrate: int32;
    hasVariableBitrate: boolean;
    padding: int32;
    delay: int32;
    frameHeader: FrameHeader;
    xingOffset: int32;
    xingFrameSize: int32;
    xingFrameOffset: int64;
    xingFramePos: int64;
    audioSize: int32;
    id3SizePos: int64;
}
export default class OMp3Format extends OFormat {
    type: AVFormat;
    private options;
    private context;
    private xingWriter;
    constructor(options?: Mp3FormatOptions);
    init(formatContext: AVOFormatContext): number;
    private writeXingTag;
    private xingAddFrame;
    private updateXing;
    writeHeader(formatContext: AVOFormatContext): number;
    writeAVPacket(formatContext: AVOFormatContext, avpacket: pointer<AVPacket>): number;
    writeTrailer(formatContext: AVOFormatContext): number;
    flush(formatContext: AVOFormatContext): number;
}
