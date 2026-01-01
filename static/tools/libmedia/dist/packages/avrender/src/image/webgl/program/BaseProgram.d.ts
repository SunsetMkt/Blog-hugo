import Program from './Program';
import type VertexShader from '../shader/VertexShader';
import type FragmentShader from '../shader/FragmentShader';
export default class BaseProgram extends Program {
    protected enableColor: boolean;
    protected aPoint: number;
    protected aColor: number;
    constructor(vertexShader: VertexShader, fragmentShader: FragmentShader, enableColor?: boolean);
    link(gl: WebGLRenderingContext): void;
    bind(): void;
}
