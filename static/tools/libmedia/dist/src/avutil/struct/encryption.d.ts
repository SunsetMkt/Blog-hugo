export declare class AVSubsampleEncryptionInfo {
    /**
     * The number of bytes that are clear.
     */
    bytesOfClearData: uint32;
    /**
     * The number of bytes that are protected.  If using pattern encryption,
     * the pattern applies to only the protected bytes; if not using pattern
     * encryption, all these bytes are encrypted.
     */
    bytesOfProtectedData: uint32;
}
export interface EncryptionInfo {
    /**
     * The fourcc encryption scheme, in big-endian byte order.
     */
    scheme: uint32;
    /**
     * Only used for pattern encryption.  This is the number of 16-byte blocks
     * that are encrypted.
     */
    cryptByteBlock: uint32;
    /**
     * Only used for pattern encryption.  This is the number of 16-byte blocks
     * that are clear.
     */
    skipByteBlock: uint32;
    /**
     * The ID of the key used to encrypt the packet.  This should always be
     * 16 bytes long, but may be changed in the future.
     */
    keyId: Uint8Array;
    /**
     * The initialization vector.  This may have been zero-filled to be the
     * correct block size.  This should always be 16 bytes long, but may be
     * changed in the future.
     */
    iv: Uint8Array;
    /**
     * An array of subsample encryption info specifying how parts of the sample
     * are encrypted.  If there are no subsamples, then the whole sample is
     * encrypted.
     */
    subsamples: AVSubsampleEncryptionInfo[];
}
export declare class AVEncryptionInfo {
    /**
     * The fourcc encryption scheme, in big-endian byte order.
     */
    scheme: uint32;
    /**
     * Only used for pattern encryption.  This is the number of 16-byte blocks
     * that are encrypted.
     */
    cryptByteBlock: uint32;
    /**
     * Only used for pattern encryption.  This is the number of 16-byte blocks
     * that are clear.
     */
    skipByteBlock: uint32;
    /**
     * The ID of the key used to encrypt the packet.  This should always be
     * 16 bytes long, but may be changed in the future.
     */
    keyId: pointer<uint8>;
    keyIdSize: uint32;
    /**
     * The initialization vector.  This may have been zero-filled to be the
     * correct block size.  This should always be 16 bytes long, but may be
     * changed in the future.
     */
    iv: pointer<uint8>;
    ivSize: uint32;
    /**
     * An array of subsample encryption info specifying how parts of the sample
     * are encrypted.  If there are no subsamples, then the whole sample is
     * encrypted.
     */
    subsamples: pointer<AVSubsampleEncryptionInfo>;
    subsampleCount: uint32;
}
export interface EncryptionInitInfo {
    /**
      * A unique identifier for the key system this is for, can be NULL if it
      * is not known.  This should always be 16 bytes, but may change in the
      * future.
      */
    systemId: Uint8Array;
    /**
     * An array of key IDs this initialization data is for.  All IDs are the
     * same length.  Can be NULL if there are no known key IDs.
     */
    keyIds: Uint8Array[];
    /**
     * Key-system specific initialization data.  This data is copied directly
     * from the file and the format depends on the specific key system.  This
     * can be NULL if there is no initialization data; in that case, there
     * will be at least one key ID.
     */
    data: Uint8Array;
}
export declare class AVEncryptionInitInfo {
    /**
      * A unique identifier for the key system this is for, can be NULL if it
      * is not known.  This should always be 16 bytes, but may change in the
      * future.
      */
    systemId: pointer<uint8>;
    systemIdSize: uint32;
    /**
     * An array of key IDs this initialization data is for.  All IDs are the
     * same length.  Can be NULL if there are no known key IDs.
     */
    keyIds: pointer<pointer<uint8>>;
    /** The number of key IDs. */
    numKeyIds: uint32;
    /**
     * The number of bytes in each key ID.  This should always be 16, but may
     * change in the future.
     */
    keyIdSize: uint32;
    /**
     * Key-system specific initialization data.  This data is copied directly
     * from the file and the format depends on the specific key system.  This
     * can be NULL if there is no initialization data; in that case, there
     * will be at least one key ID.
     */
    data: pointer<uint8>;
    dataSize: uint32;
    /**
     * An optional pointer to the next initialization info in the list.
     */
    next: pointer<AVEncryptionInitInfo>;
}
