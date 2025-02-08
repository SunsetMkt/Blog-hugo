import { RtmpPacketType } from './rtmp';
export declare class RtmpPacket {
    /**
     * RTMP channel ID (nothing to do with audio/video channels though
     */
    channelId: int32;
    /**
     * packet payload type
     */
    type: RtmpPacketType;
    /**
     * packet full timestamp
     */
    timestamp: uint32;
    /**
     * 24-bit timestamp or increment to the previous one, in milliseconds (latter only for media packets).
     * Clipped to a maximum of 0xFFFFFF, indicating an extended timestamp field.
     */
    tsField: uint32;
    /**
     * probably an additional channel ID used during streaming data
     */
    extra: uint32;
    /**
     * packet payload
     */
    payload: Uint8Array;
    constructor(channelId: int32, type: RtmpPacketType, timestamp: uint32, size: int32 | Uint8Array);
}
export declare class RtmpChunk {
    /**
   * RTMP channel ID (nothing to do with audio/video channels though
   */
    channelId: int32;
    /**
    * packet payload type
    */
    type: RtmpPacketType;
    /**
    * packet full timestamp
    */
    timestamp: uint32;
    /**
    * 24-bit timestamp or increment to the previous one, in milliseconds (latter only for media packets).
    * Clipped to a maximum of 0xFFFFFF, indicating an extended timestamp field.
    */
    tsField: uint32;
    /**
    * probably an additional channel ID used during streaming data
    */
    extra: uint32;
    /**
     * packet payload
     */
    payload: Uint8Array;
}
