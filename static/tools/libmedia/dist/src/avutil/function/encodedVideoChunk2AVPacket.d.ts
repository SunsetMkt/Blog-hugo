import AVPacket from '../struct/avpacket';
export default function encodedVideoChunk2AVPacket(chunk: EncodedVideoChunk, avpacket?: pointer<AVPacket>, metadata?: EncodedVideoChunkMetadata & {
    svc?: {
        temporalLayerId: number;
    };
    alphaSideData?: BufferSource;
}): void;
