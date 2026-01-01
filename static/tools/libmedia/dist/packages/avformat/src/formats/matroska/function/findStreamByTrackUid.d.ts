import type { AVStream } from '@libmedia/avutil';
export default function findStreamByTrackUid(streams: AVStream[], uid: uint64): AVStream;
