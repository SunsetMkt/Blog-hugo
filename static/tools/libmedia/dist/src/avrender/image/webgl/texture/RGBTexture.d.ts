import Texture from './Texture';
export default class RGBTexture extends Texture {
    private filter;
    private format;
    private internalformat;
    private dataType;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, width?: number, height?: number);
    init(): void;
    setFormat(format: number): void;
    setInternalformat(format: number): void;
    setDataType(type: number): void;
    setFilter(filter: number): void;
    fill(data: Uint8Array | Uint16Array): void;
}
