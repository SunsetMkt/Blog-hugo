import { AVCodecID, AVMediaType } from '../codec';
import { AVChromaLocation, AVColorPrimaries, AVColorRange, AVColorSpace, AVColorTransferCharacteristic, AVFieldOrder, AVPixelFormat } from '../pixfmt';
import { AVSampleFormat } from '../audiosamplefmt';
import { Rational } from './rational';
import { AVPacketSideData } from './avpacket';
import { AVChannelLayout } from './audiosample';
/**
 * FFmpeg AVCodecParameters 定义
 */
export default class AVCodecParameters {
    /**
     * General type of the encoded data.
     */
    codecType: AVMediaType;
    /**
     * Specific type of the encoded data (the codec used).
     */
    codecId: AVCodecID;
    /**
     * Additional information about the codec (corresponds to the AVI FOURCC).
     */
    codecTag: uint32;
    /**
     * Extra binary data needed for initializing the decoder, codec-dependent.
     *
     * Must be allocated with av_malloc() and will be freed by
     * avcodec_parameters_free(). The allocated size of extradata must be at
     * least extradata_size + AV_INPUT_BUFFER_PADDING_SIZE, with the padding
     * bytes zeroed.
     */
    extradata: pointer<uint8>;
    extradataSize: int32;
    /**
     * Additional data associated with the entire stream.
     *
     * Should be allocated with av_packet_side_data_new() or
     * av_packet_side_data_add(), and will be freed by avcodec_parameters_free().
     */
    codedSideData: pointer<AVPacketSideData>;
    /**
     * Amount of entries in @ref coded_side_data.
     */
    nbCodedSideData: int32;
    /**
     * - video: the pixel format, the value corresponds to enum AVPixelFormat.
     * - audio: the sample format, the value corresponds to enum AVSampleFormat.
     */
    format: AVPixelFormat | AVSampleFormat;
    /**
     * The average bitrate of the encoded data (in bits per second).
     */
    bitrate: int64;
    /**
     * The number of bits per sample in the codedwords.
     *
     * This is basically the bitrate per sample. It is mandatory for a bunch of
     * formats to actually decode them. It's the number of bits for one sample in
     * the actual coded bitstream.
     *
     * This could be for example 4 for ADPCM
     * For PCM formats this matches bits_per_raw_sample
     * Can be 0
     */
    bitsPerCodedSample: int32;
    /**
     * This is the number of valid bits in each output sample. If the
     * sample format has more bits, the least significant bits are additional
     * padding bits, which are always 0. Use right shifts to reduce the sample
     * to its actual size. For example, audio formats with 24 bit samples will
     * have bits_per_raw_sample set to 24, and format set to AV_SAMPLE_FMT_S32.
     * To get the original sample use "(int32_t)sample >> 8"."
     *
     * For ADPCM this might be 12 or 16 or similar
     * Can be 0
     */
    bitsPerRawSample: int32;
    /**
     * Codec-specific bitstream restrictions that the stream conforms to.
     */
    profile: int32;
    level: int32;
    /**
     * Video only. The dimensions of the video frame in pixels.
     */
    width: int32;
    height: int32;
    /**
     * Video only. The aspect ratio (width / height) which a single pixel
     * should have when displayed.
     *
     * When the aspect ratio is unknown / undefined, the numerator should be
     * set to 0 (the denominator may have any value).
     */
    sampleAspectRatio: Rational;
    /**
     * Video only. Number of frames per second, for streams with constant frame
     * durations. Should be set to { 0, 1 } when some frames have differing
     * durations or if the value is not known.
     *
     * @note This field correponds to values that are stored in codec-level
     * headers and is typically overridden by container/transport-layer
     * timestamps, when available. It should thus be used only as a last resort,
     * when no higher-level timing information is available.
     */
    framerate: Rational;
    /**
     * Video only. The order of the fields in interlaced video.
     */
    fieldOrder: AVFieldOrder;
    /**
     * Video only. Additional colorspace characteristics.
     */
    colorRange: AVColorRange;
    colorPrimaries: AVColorPrimaries;
    colorTrc: AVColorTransferCharacteristic;
    colorSpace: AVColorSpace;
    chromaLocation: AVChromaLocation;
    /**
     * Video only. Number of delayed frames.
     */
    videoDelay: int32;
    /**
     * Audio only. The channel layout and number of channels.
     */
    chLayout: AVChannelLayout;
    /**
     * Audio only. The number of audio samples per second.
     */
    sampleRate: int32;
    /**
     * Audio only. The number of bytes per coded audio frame, required by some
     * formats.
     *
     * Corresponds to nBlockAlign in WAVEFORMATEX.
     */
    blockAlign: int32;
    /**
     * Audio only. Audio frame size, if known. Required by some formats to be static.
     */
    frameSize: int32;
    /**
     * Audio only. The amount of padding (in samples) inserted by the encoder at
     * the beginning of the audio. I.e. this number of leading decoded samples
     * must be discarded by the caller to get the original audio without leading
     * padding.
     */
    initialPadding: int32;
    /**
     * Audio only. The amount of padding (in samples) appended by the encoder to
     * the end of the audio. I.e. this number of decoded samples must be
     * discarded by the caller from the end of the stream to get the original
     * audio without any trailing padding.
     */
    trailingPadding: int32;
    /**
     * Audio only. Number of samples to skip after a discontinuity.
     */
    seekPreroll: int32;
    /**
     * 码流格式
     * 对于 h264/h265/h266 标记是 annexb 还是 avcc 格式
     */
    bitFormat: int32;
    destroy(): void;
}
