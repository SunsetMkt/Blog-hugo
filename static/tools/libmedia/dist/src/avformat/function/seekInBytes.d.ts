import { AVIFormatContext } from '../AVFormatContext';
import AVStream from 'avutil/AVStream';
import AVPacket from 'avutil/struct/avpacket';
export default function seekInBytes(context: AVIFormatContext, stream: AVStream, timestamp: int64, firstPacketPos: int64, readAVPacket: (context: AVIFormatContext, avpacket: pointer<AVPacket>) => Promise<int32>, syncAVPacket: (context: AVIFormatContext) => Promise<void>): Promise<bigint>;
