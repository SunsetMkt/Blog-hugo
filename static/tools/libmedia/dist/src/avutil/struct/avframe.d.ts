import { AVChromaLocation, AVColorPrimaries, AVColorRange, AVColorSpace, AVColorTransferCharacteristic } from '../pixfmt';
import { AVBufferRef } from './avbuffer';
import { AVDictionary } from './avdict';
import { Rational } from './rational';
import { AVChannelLayout } from './audiosample';
export declare const AV_NUM_DATA_POINTERS = 8;
export declare const enum AVFrameFlags {
    AV_FRAME_FLAG_NONE = 0,
    /**
     * The frame data may be corrupted, e.g. due to decoding errors.
     */
    AV_FRAME_FLAG_CORRUPT = 1,
    /**
     * A flag to mark frames that are keyframes.
     */
    AV_FRAME_FLAG_KEY = 2,
    /**
     * A flag to mark the frames which need to be decoded, but shouldn't be output.
     */
    AV_FRAME_FLAG_DISCARD = 4,
    /**
     * A flag to mark frames whose content is interlaced.
     */
    AV_FRAME_FLAG_INTERLACED = 8,
    /**
     * A flag to mark frames where the top field is displayed first if the content
     * is interlaced.
     */
    AV_FRAME_FLAG_TOP_FIELD_FIRST = 16
}
export declare const enum FFDecodeError {
    NONE = 0,
    INVALID_BITSTREAM = 1,
    MISSING_REFERENCE = 2,
    CONCEALMENT_ACTIVE = 4,
    DECODE_SLICES = 8
}
export declare const enum AVPictureType {
    /**
     * Undefined
     */
    AV_PICTURE_TYPE_NONE = 0,
    /**
     * Intra
     */
    AV_PICTURE_TYPE_I = 1,
    /**
     * Predicted
     */
    AV_PICTURE_TYPE_P = 2,
    /**
     * Bi-dir predicted
     */
    AV_PICTURE_TYPE_B = 3,
    /**
     * S(GMC)-VOP MPEG-4
     */
    AV_PICTURE_TYPE_S = 4,
    /**
     * Switching Intra
     */
    AV_PICTURE_TYPE_SI = 5,
    /**
     * Switching Predicted
     */
    AV_PICTURE_TYPE_SP = 6,
    /**
     * BI type
     */
    AV_PICTURE_TYPE_BI = 7
}
/**
 * @defgroup lavu_frame AVFrame
 * @ingroup lavu_data
 *
 * @{
 * AVFrame is an abstraction for reference-counted raw multimedia data.
 */
export declare const enum AVFrameSideDataType {
    /**
     * The data is the AVPanScan struct defined in libavcodec.
     */
    AV_FRAME_DATA_PANSCAN = 0,
    /**
     * ATSC A53 Part 4 Closed Captions.
     * A53 CC bitstream is stored as uint8_t in AVFrameSideData.data.
     * The number of bytes of CC data is AVFrameSideData.size.
     */
    AV_FRAME_DATA_A53_CC = 1,
    /**
     * Stereoscopic 3d metadata.
     * The data is the AVStereo3D struct defined in libcommon/stereo3d.h.
     */
    AV_FRAME_DATA_STEREO3D = 2,
    /**
     * The data is the AVMatrixEncoding enum defined in libcommon/channel_layout.h.
     */
    AV_FRAME_DATA_MATRIXENCODING = 3,
    /**
     * Metadata relevant to a downmix procedure.
     * The data is the AVDownmixInfo struct defined in libcommon/downmix_info.h.
     */
    AV_FRAME_DATA_DOWNMIX_INFO = 4,
    /**
     * ReplayGain information in the form of the AVReplayGain struct.
     */
    AV_FRAME_DATA_REPLAYGAIN = 5,
    /**
     * This side data contains a 3x3 transformation matrix describing an affine
     * transformation that needs to be applied to the frame for correct
     * presentation.
     *
     * See libcommon/display.h for a detailed description of the data.
     */
    AV_FRAME_DATA_DISPLAYMATRIX = 6,
    /**
     * Active Format Description data consisting of a single byte as specified
     * in ETSI TS 101 154 using AVActiveFormatDescription enum.
     */
    AV_FRAME_DATA_AFD = 7,
    /**
     * Motion vectors exported by some codecs (on demand through the export_mvs
     * flag set in the libavcodec AVCodecContext flags2 option).
     * The data is the AVMotionVector struct defined in
     * libcommon/motion_vector.h.
     */
    AV_FRAME_DATA_MOTION_VECTORS = 8,
    /**
     * Recommmends skipping the specified number of samples. This is exported
     * only if the "skip_manual" AVOption is set in libavcodec.
     * This has the same format as AV_PKT_DATA_SKIP_SAMPLES.
     * @code
     * u32le number of samples to skip from start of this packet
     * u32le number of samples to skip from end of this packet
     * u8    reason for start skip
     * u8    reason for end   skip (0=padding silence, 1=convergence)
     * @endcode
     */
    AV_FRAME_DATA_SKIP_SAMPLES = 9,
    /**
     * This side data must be associated with an audio frame and corresponds to
     * enum AVAudioServiceType defined in avcodec.h.
     */
    AV_FRAME_DATA_AUDIO_SERVICE_TYPE = 10,
    /**
     * Mastering display metadata associated with a video frame. The payload is
     * an AVMasteringDisplayMetadata type and contains information about the
     * mastering display color volume.
     */
    AV_FRAME_DATA_MASTERING_DISPLAY_METADATA = 11,
    /**
     * The GOP timecode in 25 bit timecode format. Data format is 64-bit integer.
     * This is set on the first frame of a GOP that has a temporal reference of 0.
     */
    AV_FRAME_DATA_GOP_TIMECODE = 12,
    /**
     * The data represents the AVSphericalMapping structure defined in
     * libcommon/spherical.h.
     */
    AV_FRAME_DATA_SPHERICAL = 13,
    /**
     * Content light level (based on CTA-861.3). This payload contains data in
     * the form of the AVContentLightMetadata struct.
     */
    AV_FRAME_DATA_CONTENT_LIGHT_LEVEL = 14,
    /**
     * The data contains an ICC profile as an opaque octet buffer following the
     * format described by ISO 15076-1 with an optional name defined in the
     * metadata key entry "name".
     */
    AV_FRAME_DATA_ICC_PROFILE = 15,
    /**
     * Timecode which conforms to SMPTE ST 12-1. The data is an array of 4 uint32_t
     * where the first uint32_t describes how many (1-3) of the other timecodes are used.
     * The timecode format is described in the documentation of av_timecode_get_smpte_from_framenum()
     * function in libcommon/timecode.h.
     */
    AV_FRAME_DATA_S12M_TIMECODE = 16,
    /**
     * HDR dynamic metadata associated with a video frame. The payload is
     * an AVDynamicHDRPlus type and contains information for color
     * volume transform - application 4 of SMPTE 2094-40:2016 standard.
     */
    AV_FRAME_DATA_DYNAMIC_HDR_PLUS = 17,
    /**
     * Regions Of Interest, the data is an array of AVRegionOfInterest type, the number of
     * array element is implied by AVFrameSideData.size / AVRegionOfInterest.self_size.
     */
    AV_FRAME_DATA_REGIONS_OF_INTEREST = 18,
    /**
     * Encoding parameters for a video frame, as described by AVVideoEncParams.
     */
    AV_FRAME_DATA_VIDEO_ENC_PARAMS = 19,
    /**
     * User data unregistered metadata associated with a video frame.
     * This is the H.26[45] UDU SEI message, and shouldn't be used for any other purpose
     * The data is stored as uint8_t in AVFrameSideData.data which is 16 bytes of
     * uuid_iso_iec_11578 followed by AVFrameSideData.size - 16 bytes of user_data_payload_byte.
     */
    AV_FRAME_DATA_SEI_UNREGISTERED = 20,
    /**
     * Film grain parameters for a frame, described by AVFilmGrainParams.
     * Must be present for every frame which should have film grain applied.
     */
    AV_FRAME_DATA_FILM_GRAIN_PARAMS = 21,
    /**
     * Bounding boxes for object detection and classification,
     * as described by AVDetectionBBoxHeader.
     */
    AV_FRAME_DATA_DETECTION_BBOXES = 22
}
export declare class AVFrameSideData {
    type: AVFrameSideDataType;
    data: pointer<uint8>;
    size: size;
    metadata: pointer<AVDictionary>;
    buf: pointer<AVBufferRef>;
}
export declare class AVMasteringDisplayMetadata {
    /**
     * CIE 1931 xy chromaticity coords of color primaries (r, g, b order).
     */
    displayPrimaries: array<array<Rational, 2>, 3>;
    /**
     * CIE 1931 xy chromaticity coords of white point.
     */
    whitePoint: array<Rational, 2>;
    /**
     * Min luminance of mastering display (cd/m^2).
     */
    minLuminance: Rational;
    /**
     * Max luminance of mastering display (cd/m^2).
     */
    maxLuminance: Rational;
    /**
     * Flag indicating whether the display primaries (and white point) are set.
     */
    hasPrimaries: int32;
    /**
     * Flag indicating whether the luminance (min_ and max_) have been set.
     */
    hasLuminance: int32;
}
export declare class AVContentLightMetadata {
    /**
     * Max content light level (cd/m^2).
     */
    maxCLL: uint32;
    /**
     * Max average light level per frame (cd/m^2).
     */
    maxFALL: uint32;
}
/**
 * FFmpeg AVFrame 定义
 */
export default class AVFrame {
    /**
     * pointer to the picture/channel planes.
     * This might be different from the first allocated byte
     *
     * Some decoders access areas outside 0,0 - width, height, please
     * see avcodec_align_dimensions2(). Some filters and swscale can read
     * up to 16 bytes beyond the planes, if these filters are to be used,
     * then 16 extra bytes must be allocated.
     *
     * NOTE: Except for hwaccel formats, pointers not needed by the format
     * MUST be set to NULL.
     */
    data: array<pointer<uint8>, typeof AV_NUM_DATA_POINTERS>;
    /**
     * For video, size in bytes of each picture line.
     * For audio, size in bytes of each plane.
     *
     * For audio, only linesize[0] may be set. For planar audio, each channel
     * plane must be the same size.
     *
     * For video the linesizes should be multiples of the CPUs alignment
     * preference, this is 16 or 32 for modern desktop CPUs.
     * Some code requires such alignment other code can be slower without
     * correct alignment, for yet other it makes no difference.
     *
     * @note The linesize may be larger than the size of usable data -- there
     * may be extra padding present for performance reasons.
     */
    linesize: array<int32, typeof AV_NUM_DATA_POINTERS>;
    /**
     * pointers to the data planes/channels.
     *
     * For video, this should simply point to data[].
     *
     * For planar audio, each channel has a separate data pointer, and
     * linesize[0] contains the size of each channel buffer.
     * For packed audio, there is just one data pointer, and linesize[0]
     * contains the total size of the buffer for all channels.
     *
     * Note: Both data and extended_data should always be set in a valid frame,
     * but for planar audio with more channels that can fit in data,
     * extended_data must be used in order to access all channels.
     */
    extendedData: pointer<pointer<uint8>>;
    /**
     * @name Video dimensions
     * Video frames only. The coded dimensions (in pixels) of the video frame,
     * i.e. the size of the rectangle that contains some well-defined values.
     *
     * @note The part of the frame intended for display/presentation is further
     * restricted by the @ref cropping "Cropping rectangle".
     *
     */
    width: int32;
    height: int32;
    /**
     * number of audio samples (per channel) described by this frame
     */
    nbSamples: int32;
    /**
     * format of the frame, -1 if unknown or unset
     * Values correspond to enum AVPixelFormat for video frames,
     * enum AVSampleFormat for audio)
     */
    format: int32;
    /**
     * 1 -> keyframe, 0-> not
     *
     * @deprecated Use AV_FRAME_FLAG_KEY instead
     */
    keyFrame: int32;
    /**
     * Picture type of the frame.
     */
    pictType: AVPictureType;
    /**
     * Sample aspect ratio for the video frame, 0/1 if unknown/unspecified.
     */
    sampleAspectRatio: Rational;
    /**
     * Presentation timestamp in time_base units (time when frame should be shown to user).
     */
    pts: int64;
    /**
     * DTS copied from the AVPacket that triggered returning this frame. (if frame threading isn't used)
     * This is also the Presentation time of this AVFrame calculated from
     * only AVPacket.dts values without pts values.
     */
    pktDts: int64;
    /**
     * Time base for the timestamps in this frame.
     * In the future, this field may be set on frames output by decoders or
     * filters, but its value will be by default ignored on input to encoders
     * or filters.
     */
    timeBase: Rational;
    /**
     * quality (between 1 (good) and FF_LAMBDA_MAX (bad))
     */
    quality: int32;
    /**
     * Frame owner's private data.
     *
     * This field may be set by the code that allocates/owns the frame data.
     * It is then not touched by any library functions, except:
     * - it is copied to other references by av_frame_copy_props() (and hence by
     *   av_frame_ref());
     * - it is set to NULL when the frame is cleared by av_frame_unref()
     * - on the caller's explicit request. E.g. libavcodec encoders/decoders
     *   will copy this field to/from @ref AVPacket "AVPackets" if the caller sets
     *   @ref AV_CODEC_FLAG_COPY_OPAQUE.
     *
     * @see opaque_ref the reference-counted analogue
     */
    opaque: pointer<void>;
    /**
     * Number of fields in this frame which should be repeated, i.e. the total
     * duration of this frame should be repeat_pict + 2 normal field durations.
     *
     * For interlaced frames this field may be set to 1, which signals that this
     * frame should be presented as 3 fields: beginning with the first field (as
     * determined by AV_FRAME_FLAG_TOP_FIELD_FIRST being set or not), followed
     * by the second field, and then the first field again.
     *
     * For progressive frames this field may be set to a multiple of 2, which
     * signals that this frame's duration should be (repeat_pict + 2) / 2
     * normal frame durations.
     *
     * @note This field is computed from MPEG2 repeat_first_field flag and its
     * associated flags, H.264 pic_struct from picture timing SEI, and
     * their analogues in other codecs. Typically it should only be used when
     * higher-layer timing information is not available.
     */
    repeatPict: int32;
    /**
     * The content of the picture is interlaced.
     *
     * @deprecated Use AV_FRAME_FLAG_INTERLACED instead
     */
    interlacedFrame: int32;
    /**
     * If the content is interlaced, is top field displayed first.
     *
     * @deprecated Use AV_FRAME_FLAG_TOP_FIELD_FIRST instead
     */
    topFieldFirst: int32;
    /**
     * Tell user application that palette has changed from previous frame.
     *  @deprecated
     */
    paletteHasChanged: int32;
    /**
     * Sample rate of the audio data.
     */
    sampleRate: int32;
    /**
     * AVBuffer references backing the data for this frame. If all elements of
     * this array are NULL, then this frame is not reference counted. This array
     * must be filled contiguously -- if buf[i] is non-NULL then buf[j] must
     * also be non-NULL for all j < i.
     *
     * There may be at most one AVBuffer per data plane, so for video this array
     * always contains all the references. For planar audio with more than
     * AV_NUM_DATA_POINTERS channels, there may be more buffers than can fit in
     * this array. Then the extra AVBufferRef pointers are stored in the
     * extended_buf array.
     */
    buf: array<pointer<AVBufferRef>, typeof AV_NUM_DATA_POINTERS>;
    /**
     * For planar audio which requires more than AV_NUM_DATA_POINTERS
     * AVBufferRef pointers, this array will hold all the references which
     * cannot fit into AVFrame.buf.
     *
     * Note that this is different from AVFrame.extended_data, which always
     * contains all the pointers. This array only contains the extra pointers,
     * which cannot fit into AVFrame.buf.
     *
     * This array is always allocated using av_malloc() by whoever constructs
     * the frame. It is freed in av_frame_unref().
     */
    extendedBuf: pointer<pointer<AVBufferRef>>;
    /**
     * Number of elements in extended_buf.
     */
    nbExtendedBuf: int32;
    sideData: pointer<pointer<AVFrameSideData>>;
    nbSideData: int32;
    /**
     * Frame flags, a combination of @ref lavu_frame_flags
     */
    flags: AVFrameFlags;
    /**
     * MPEG vs JPEG YUV range.
     * - encoding: Set by user
     * - decoding: Set by libavcodec
     */
    colorRange: AVColorRange;
    colorPrimaries: AVColorPrimaries;
    colorTrc: AVColorTransferCharacteristic;
    /**
     * YUV colorspace type.
     * - encoding: Set by user
     * - decoding: Set by libavcodec
     */
    colorSpace: AVColorSpace;
    chromaLocation: AVChromaLocation;
    /**
     * frame timestamp estimated using various heuristics, in stream time base
     * - encoding: unused
     * - decoding: set by libavcodec, read by user.
     */
    bestEffortTimestamp: int64;
    /**
     * reordered pos from the last AVPacket that has been input into the decoder
     * - encoding: unused
     * - decoding: Read by user.
     * @deprecated use AV_CODEC_FLAG_COPY_OPAQUE to pass through arbitrary user
     *             data from packets to frames
     */
    pktPos: int64;
    /**
     * metadata.
     * - encoding: Set by user.
     * - decoding: Set by libavcodec.
     */
    metadata: pointer<AVDictionary>;
    /**
     * decode error flags of the frame, set to a combination of
     * FF_DECODE_ERROR_xxx flags if the decoder produced a frame, but there
     * were errors during the decoding.
     * - encoding: unused
     * - decoding: set by libavcodec, read by user.
     */
    decodeErrorFlags: FFDecodeError;
    /**
     * size of the corresponding packet containing the compressed
     * frame.
     * It is set to a negative value if unknown.
     * - encoding: unused
     * - decoding: set by libavcodec, read by user.
     * @deprecated use AV_CODEC_FLAG_COPY_OPAQUE to pass through arbitrary user
     *             data from packets to frames
     */
    pktSize: int32;
    /**
     * For hwaccel-format frames, this should be a reference to the
     * AVHWFramesContext describing the frame.
     */
    hwFramesCtx: pointer<AVBufferRef>;
    /**
     * AVBufferRef for free use by the API user. FFmpeg will never check the
     * contents of the buffer ref. FFmpeg calls av_buffer_unref() on it when
     * the frame is unreferenced. av_frame_copy_props() calls create a new
     * reference with av_buffer_ref() for the target frame's opaque_ref field.
     *
     * This is unrelated to the opaque field, although it serves a similar
     * purpose.
     */
    opaqueRef: pointer<AVBufferRef>;
    /**
     * @anchor cropping
     * @name Cropping
     * Video frames only. The number of pixels to discard from the the
     * top/bottom/left/right border of the frame to obtain the sub-rectangle of
     * the frame intended for presentation.
     */
    cropTop: size;
    cropBottom: size;
    cropLeft: size;
    cropRight: size;
    /**
     * AVBufferRef for internal use by a single libav* library.
     * Must not be used to transfer data between libraries.
     * Has to be NULL when ownership of the frame leaves the respective library.
     *
     * Code outside the FFmpeg libs should never check or change the contents of the buffer ref.
     *
     * FFmpeg calls av_buffer_unref() on it when the frame is unreferenced.
     * av_frame_copy_props() calls create a new reference with av_buffer_ref()
     * for the target frame's private_ref field.
     */
    privateRef: pointer<AVBufferRef>;
    /**
     * Channel layout of the audio data.
     */
    chLayout: AVChannelLayout;
    /**
     * Duration of the frame, in the same units as pts. 0 if unknown.
     */
    duration: int64;
    close(): void;
}
export declare class AVFrameRef extends AVFrame {
    refCount: atomic_int32;
}
export interface AVFramePool {
    alloc: () => pointer<AVFrameRef>;
    release: (avframe: pointer<AVFrameRef>) => void;
}
