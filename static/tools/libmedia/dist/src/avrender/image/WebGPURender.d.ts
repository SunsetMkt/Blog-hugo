import ImageRender, { ImageRenderOptions } from './ImageRender';
export interface WebGPURenderOptions extends ImageRenderOptions {
    powerPreference?: GPUPowerPreference;
}
export default abstract class WebGPURender extends ImageRender {
    protected options: WebGPURenderOptions;
    protected adapter: GPUAdapter;
    protected device: GPUDevice;
    protected context: GPUCanvasContext;
    protected vsModule: GPUShaderModule;
    protected fsModule: GPUShaderModule;
    protected rotateMatrixBuffer: GPUBuffer;
    protected renderPipeline: GPURenderPipeline;
    protected rotateMatrix: number[];
    protected vbo: GPUBuffer;
    protected sampler: GPUSampler;
    protected vertex: number[];
    protected fragmentSource: string;
    protected vertexSource: string;
    protected renderBundleEncoder: GPURenderBundleEncoder;
    protected renderBundle: GPURenderBundle;
    protected bindGroupLayout: GPUBindGroupLayout;
    protected bindGroup: GPUBindGroup;
    protected pipelineLayout: GPUPipelineLayout;
    constructor(canvas: HTMLCanvasElement | OffscreenCanvas, options: WebGPURenderOptions);
    init(requiredFeatures?: GPUFeatureName[]): Promise<void>;
    protected abstract generateBindGroup(): void;
    protected generatePipeline(): void;
    protected generateRenderBundleEncoder(): void;
    setRotateMatrix(rotateMatrix: number[]): void;
    private setVertices;
    clear(): void;
    protected layout(): void;
    viewport(width: number, height: number): void;
    setRotate(angle: number, clear?: boolean): void;
    destroy(): void;
}
