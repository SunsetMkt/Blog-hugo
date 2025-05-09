import BaseProgram from './BaseProgram';
export default abstract class VideoProgram extends BaseProgram {
    private rotateMatrixLocation;
    private ySamplerLocation;
    private uSamplerLocation;
    private vSamplerLocation;
    private aSamplerLocation;
    constructor(fragmentSource: string, vertexSource?: string);
    link(gl: WebGLRenderingContext): void;
    setRotateMatrix(matrix: number[]): void;
    bindYTexture(unit?: number): void;
    bindUTexture(unit?: number): void;
    bindVTexture(unit?: number): void;
    bindATexture(unit?: number): void;
}
