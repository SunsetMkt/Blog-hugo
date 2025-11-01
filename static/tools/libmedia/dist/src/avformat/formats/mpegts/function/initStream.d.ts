import type { MpegtsContext, PID } from '../type';
import type Stream from 'avutil/AVStream';
export default function initStream(pid: PID, stream: Stream, mpegtsContext: MpegtsContext): Stream;
