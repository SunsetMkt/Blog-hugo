import type AVCodecParameters from '../struct/avcodecparameters';
export default function getVideoMimeType(codecpar: pointer<AVCodecParameters>): string;
