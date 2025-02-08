import AVCodecParameters from 'avutil/struct/avcodecparameters';
export default function getAudioMimeType(codecpar: pointer<AVCodecParameters>): string;
