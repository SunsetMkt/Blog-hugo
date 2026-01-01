import type { MpegtsContext, PID } from '../type';
import { type AVStream } from '@libmedia/avutil';
export default function initStream(pid: PID, stream: AVStream, mpegtsContext: MpegtsContext): AVStream;
