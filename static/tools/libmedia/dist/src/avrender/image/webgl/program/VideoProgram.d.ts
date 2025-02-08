import BaseProgram from './BaseProgram';
export default abstract class VideoProgram extends BaseProgram {
    private rotateMatrixLocation;
    constructor(yuvFragmentSource: string);
    link(gl: WebGLRenderingContext): void;
    setRotateMatrix(matrix: number[]): void;
}
