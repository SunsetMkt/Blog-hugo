import VideoProgram from './VideoProgram';
export default abstract class YUVProgram extends VideoProgram {
    private ySamplerLocation;
    private uSamplerLocation;
    private vSamplerLocation;
    private aSamplerLocation;
    constructor(yuvFragmentSource: string);
    link(gl: WebGLRenderingContext): void;
    bindYTexture(unit?: number): void;
    bindUTexture(unit?: number): void;
    bindVTexture(unit?: number): void;
    bindATexture(unit?: number): void;
}
