import VertexShader from '../shader/VertexShader';
import FragmentShader from '../shader/FragmentShader';
export default class Program {
    protected gl: WebGLRenderingContext;
    private _program;
    protected vertexShader: VertexShader;
    protected fragmentShader: FragmentShader;
    constructor(vertexShader: VertexShader, fragmentShader: FragmentShader);
    link(gl: WebGLRenderingContext): void;
    stop(): void;
    bind(): void;
    get program(): WebGLProgram;
}
