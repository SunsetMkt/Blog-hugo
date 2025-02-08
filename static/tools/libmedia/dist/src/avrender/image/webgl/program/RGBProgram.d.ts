import VideoProgram from './VideoProgram';
export default abstract class RGBProgram extends VideoProgram {
    private rgbSamplerLocation;
    constructor(rgbFragmentSource: string);
    link(gl: WebGLRenderingContext): void;
    bindRGBTexture(unit?: number): void;
}
