import { AVPacketSideDataType } from '../codec';
import type { AVBufferRef } from './avbuffer';
import { AVRational } from './rational';
export declare const enum AVPacketType {
    AUDIO = 0,
    VIDEO = 1
}
export declare const enum AVPacketFlags {
    /**
     * The packet contains a keyframe
     */
    AV_PKT_FLAG_KEY = 1,
    /**
     * The packet content is corrupted
     */
    AV_PKT_FLAG_CORRUPT = 2,
    /**
     * Flag is used to discard packets which are required to maintain valid
     * decoder state but are not required for output and should be dropped
     * after decoding.
     */
    AV_PKT_FLAG_DISCARD = 4,
    /**
     * The packet comes from a trusted source.
     *
     * Otherwise-unsafe constructs such as arbitrary pointers to data
     * outside the packet may be followed.
     */
    AV_PKT_FLAG_TRUSTED = 8,
    /**
     * Flag is used to indicate packets that contain frames that can
     * be discarded by the decoder.  I.e. Non-reference frames.
     */
    AV_PKT_FLAG_DISPOSABLE = 16,
    /**
     * The stream is end
     */
    AV_PKT_FLAG_END = 32,
    /**
     * 对于 h264/h265/h266 标记是否是 annexb 码流格式，未置此标志则为 avcc 格式
     */
    AV_PKT_FLAG_H26X_ANNEXB = 64
}
export declare class AVPacketSideData {
    data: pointer<uint8>;
    size: size;
    type: AVPacketSideDataType;
}
export declare class AVProducerReferenceTime {
    wallclock: int64;
    flags: int32;
}
/**
 * FFmpeg AVPacket 定义
 */
export default class AVPacket {
    /**
     * A reference to the reference-counted buffer where the packet data is
     * stored.
     * May be NULL, then the packet data is not reference-counted.
     */
    buf: pointer<AVBufferRef>;
    /**
     * Presentation timestamp in AVStream->time_base units; the time at which
     * the decompressed packet will be presented to the user.
     * Can be AV_NOPTS_VALUE if it is not stored in the file.
     * pts MUST be larger or equal to dts as presentation cannot happen before
     * decompression, unless one wants to view hex dumps. Some formats misuse
     * the terms dts and pts/cts to mean something different. Such timestamps
     * must be converted to true pts/dts before they are stored in AVPacket.
     */
    pts: int64;
    /**
     * Decompression timestamp in AVStream->time_base units; the time at which
     * the packet is decompressed.
     * Can be AV_NOPTS_VALUE if it is not stored in the file.
     */
    dts: int64;
    data: pointer<uint8>;
    size: int32;
    streamIndex: int32;
    /**
     * A combination of @AVPacketFlags values
     */
    flags: int32;
    /**
     * Additional packet data that can be provided by the container.
     * Packet can contain several types of side information.
     */
    sideData: pointer<AVPacketSideData>;
    sideDataElems: int32;
    /**
     * Duration of this packet in AVStream->time_base units, 0 if unknown.
     * Equals next_pts - this_pts in presentation order.
     */
    duration: int64;
    pos: int64;
    /**
     * for some private data of the user
     */
    opaque: pointer<void>;
    /**
     * AVBufferRef for free use by the API user. FFmpeg will never check the
     * contents of the buffer ref. FFmpeg calls av_buffer_unref() on it when
     * the packet is unreferenced. av_packet_copy_props() calls create a new
     * reference with av_buffer_ref() for the target packet's opaque_ref field.
     *
     * This is unrelated to the opaque field, although it serves a similar
     * purpose.
     */
    opaqueRef: pointer<AVBufferRef>;
    /**
     * Time base of the packet's timestamps.
     */
    timeBase: AVRational;
}
export declare class AVPacketRef extends AVPacket {
    refCount: atomic_int32;
}
export interface AVPacketPool {
    alloc: () => pointer<AVPacketRef>;
    release: (avpacket: pointer<AVPacketRef>) => void;
}
