import HdrMetadata from '../../../image/struct/HdrMetadata';
import YUVProgram from './YUVProgram';
export default class YUV16Program extends YUVProgram {
    private maxUniformLocation;
    private offsetLocation;
    private multiplierLocation;
    private pqTonemapALocation;
    private pqTonemapBLocation;
    private hlgOOTFGammaMinusOneLocation;
    private hlgDstMaxLuminanceRelativeLocation;
    private nitsToSdrRelativeFactorLocation;
    private sdrRelativeToNitsFactorLocation;
    constructor(yuvFragmentSource: string);
    link(gl: WebGLRenderingContext): void;
    setMax(max: number): void;
    setMetaData(data: HdrMetadata): void;
}
