/**
 * maximum possible number of different RTMP channels
 */
export declare const RTMP_CHANNELS = 65599;
export declare const APP_MAX_LENGTH = 1024;
export declare const TCURL_MAX_LENGTH = 1024;
export declare const FLASHVER_MAX_LENGTH = 64;
export declare const RTMP_PKTDATA_DEFAULT_SIZE = 4096;
export declare const RTMP_HEADER = 11;
/**
 * channels used to for RTMP packets with different purposes (i.e. data, network
 * control, remote procedure calls, etc.)
 */
export declare const enum RtmpChannel {
    /**
     * channel for network-related messages (bandwidth report, ping, etc)
     */
    NETWORK_CHANNEL = 2,
    /**
     * channel for sending server control messages
     */
    SYSTEM_CHANNEL = 3,
    /**
     * channel for audio data
     */
    AUDIO_CHANNEL = 4,
    /**
     * channel for video data
     */
    VIDEO_CHANNEL = 6,
    /**
     * channel for a/v invokes
     */
    SOURCE_CHANNEL = 8
}
/**
 * known RTMP packet types
 */
export declare const enum RtmpPacketType {
    /**
     * chunk size change
     */
    PT_CHUNK_SIZE = 1,
    /**
     * number of bytes read
     */
    PT_BYTES_READ = 3,
    /**
     * user control
     */
    PT_USER_CONTROL = 4,
    /**
     * window acknowledgement size
     */
    PT_WINDOW_ACK_SIZE = 5,
    /**
     * peer bandwidth
     */
    PT_SET_PEER_BW = 6,
    /**
     * audio packet
     */
    PT_AUDIO = 8,
    /**
     * video packet
     */
    PT_VIDEO = 9,
    /**
     * Flex shared stream
     */
    PT_FLEX_STREAM = 15,
    /**
     * Flex shared object
     */
    PT_FLEX_OBJECT = 16,
    /**
     * Flex shared message
     */
    PT_FLEX_MESSAGE = 17,
    /**
     * some notification
     */
    PT_NOTIFY = 18,
    /**
     * shared object
     */
    PT_SHARED_OBJ = 19,
    /**
     * invoke some stream action
     */
    PT_INVOKE = 20,
    /**
     * FLV metadata
     */
    PT_METADATA = 22
}
/**
 * possible RTMP packet header sizes
 */
export declare const enum RtmpPacketHeaderSize {
    /**
     * packet has 12-byte header
     */
    PS_TWELVE_BYTES = 0,
    /**
     * packet has 8-byte header
     */
    PS_EIGHT_BYTES = 1,
    /**
     * packet has 4-byte header
     */
    PS_FOUR_BYTES = 2,
    /**
     * packet is really a next chunk of a packet
     */
    PS_ONE_BYTE = 3
}
