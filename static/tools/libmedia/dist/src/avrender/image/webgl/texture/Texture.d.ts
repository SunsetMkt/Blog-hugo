export default abstract class Texture {
    protected readonly gl: WebGLRenderingContext | WebGL2RenderingContext;
    width: number;
    height: number;
    protected texture: WebGLTexture;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, width?: number, height?: number);
    getTexture(): WebGLTexture;
    bind(unit?: number): void;
    setSize(width: number, height: number): void;
    /**
     * 设置对齐字节数
     */
    setUnpackAlignment(): void;
    destroy(): void;
    abstract init(): void;
}
