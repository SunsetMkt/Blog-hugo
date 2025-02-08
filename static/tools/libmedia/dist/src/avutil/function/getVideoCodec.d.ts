import AVCodecParameters from '../struct/avcodecparameters';
export default function getVideoCodec(codecpar: pointer<AVCodecParameters>, extradata?: Uint8Array): string;
