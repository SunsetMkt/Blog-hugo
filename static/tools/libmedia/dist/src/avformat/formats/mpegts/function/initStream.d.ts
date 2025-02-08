import { MpegtsContext, PID } from '../type';
import Stream from 'avutil/AVStream';
export default function initStream(pid: PID, stream: Stream, mpegtsContext: MpegtsContext): Stream;
