export declare const enum ShaderType {
    VERTEX = 0,
    FRAGMENT = 1
}
export default abstract class Shader {
    readonly type: ShaderType;
    private _shader;
    private _source;
    private compiled;
    constructor(type: ShaderType, source: string);
    compile(gl: WebGLRenderingContext): void;
    stop(gl: WebGLRenderingContext): void;
    get shader(): WebGLShader;
}
