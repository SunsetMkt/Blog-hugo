import { AVCodecID } from '../codec';
export default function getWasmUrl(baseUrl: string, type: 'decoder' | 'encoder' | 'resampler' | 'scaler' | 'stretchpitcher', codecId?: AVCodecID): string;
