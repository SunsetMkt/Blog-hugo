import AVPacket from '../struct/avpacket';
export default function encodedAudioChunk2AVPacket(chunk: EncodedAudioChunk, avpacket?: pointer<AVPacket>, metadata?: EncodedAudioChunkMetadata): void;
