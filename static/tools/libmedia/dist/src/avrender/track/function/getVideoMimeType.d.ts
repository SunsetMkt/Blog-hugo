import AVCodecParameters from 'avutil/struct/avcodecparameters';
export default function getVideoMimeType(codecpar: pointer<AVCodecParameters>): string;
