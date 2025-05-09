import HdrMetadata from '../../struct/HdrMetadata';
import VideoProgram from './VideoProgram';
export default class VideoProgram16 extends VideoProgram {
    private offsetLocation;
    private multiplierLocation;
    private pqTonemapALocation;
    private pqTonemapBLocation;
    private hlgOOTFGammaMinusOneLocation;
    private hlgDstMaxLuminanceRelativeLocation;
    private nitsToSdrRelativeFactorLocation;
    private sdrRelativeToNitsFactorLocation;
    constructor(fragmentSource: string, vertexSource?: string);
    link(gl: WebGLRenderingContext): void;
    setMetaData(data: HdrMetadata): void;
}
