import type AVCodecParameters from '../struct/avcodecparameters';
export default function getAudioMimeType(codecpar: pointer<AVCodecParameters>): string;
