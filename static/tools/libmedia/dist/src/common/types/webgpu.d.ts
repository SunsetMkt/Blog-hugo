/**
 * @file WebGPU 的声明文件 https://www.w3.org/TR/2023/WD-webgpu-20230322/
 *
 */
type GPUPowerPreference = 'low-power' | 'high-performance';
type GPUFeatureName = 'depth-clip-control' | 'depth32float-stencil8' | 'texture-compression-bc' | 'texture-compression-etc2' | 'texture-compression-astc' | 'timestamp-query' | 'indirect-first-instance' | 'shader-f16' | 'rg11b10ufloat-renderable' | 'float32-filterable';
type GPUBufferMapState = 'unmapped' | 'pending' | 'mapped';
type GPUTextureAspect = 'all' | 'stencil-only' | 'depth-only';
type GPUTextureDimension = '1d' | '2d' | '3d';
type GPUTextureViewDimension = GPUTextureDimension | '2d-array' | 'cube' | 'cube-array';
type GPUAddressMode = 'clamp-to-edge' | 'repeat' | 'mirror-repeat';
type GPUFilterMode = 'nearest' | 'linear';
type GPUMipmapFilterMode = 'nearest' | 'linear';
type GPUBufferBindingType = 'uniform' | 'storage' | 'read-only-storage';
type GPUSamplerBindingType = 'filtering' | 'non-filtering' | 'comparison';
type GPUTextureSampleType = 'float' | 'unfilterable-float' | 'depth' | 'sint' | 'uint';
type GPUStorageTextureAccess = 'write-only';
type GPUAutoLayoutMode = 'auto';
type GPUCompilationMessageType = 'error' | 'warning' | 'info';
type GPUVertexStepMode = 'vertex' | 'instance';
type GPUPrimitiveTopology = 'point-list' | 'line-list' | 'line-strip' | 'triangle-list' | 'triangle-strip';
type GPUFrontFace = 'ccw' | 'cw';
type GPUIndexFormat = 'uint16' | 'uint32';
type GPUCullMode = 'none' | 'front' | 'back';
type GPUStencilOperation = 'keep' | 'zero' | 'replace' | 'invert' | 'increment-clamp' | 'decrement-clamp' | 'increment-wrap' | 'decrement-wrap';
type GPUBlendOperation = 'add' | 'subtract' | 'reverse-subtract' | 'min' | 'max';
type GPUBlendFactor = 'zero' | 'one' | 'src' | 'one-minus-src' | 'src-alpha' | 'one-minus-src-alpha' | 'dst' | 'one-minus-dst' | 'dst-alpha' | 'one-minus-dst-alpha' | 'src-alpha-saturated' | 'constant' | 'one-minus-constant';
/**
 * load 保存之前的颜色缓冲区
 * clear 清除之前的延时缓冲区
 */
type GPULoadOp = 'load' | 'clear';
/**
 * store 保存绘制之后的颜色缓冲区
 * discard 丢弃绘制之后的延时缓冲区
 */
type GPUStoreOp = 'store' | 'discard';
type GPUQueryType = 
/**
 * 遮挡查询
 */
'occlusion'
/**
 * 时间戳查询
 */
 | 'timestamp';
type GPURenderPassTimestampLocation = 'beginning' | 'end';
type GPUComputePassTimestampLocation = 'beginning' | 'end';
type GPUCanvasAlphaMode = 'opaque' | 'premultiplied';
type GPUSize64 = number;
type GPUIndex32 = number;
type GPUSize32 = number;
type GPUSignedOffset32 = number;
type GPUBufferDynamicOffset = number;
type GPUStencilValue = number;
type GPUSampleMask = number;
type GPUDepthBias = number;
type GPUIntegerCoordinate = number;
type GPUFlagsConstant = number;
type GPUPipelineConstantValue = number;
interface GPUColorDict {
    r: number;
    g: number;
    b: number;
    a: number;
}
type GPUColor = number[] | GPUColorDict;
type GPUCompareFunction = 'never' | 'less' | 'equal' | 'less-equal' | 'greater' | 'not-equal' | 'greater-equal' | 'always';
type GPUExtent3D = GPUIntegerCoordinate[] | {
    width: GPUIntegerCoordinate;
    height?: GPUIntegerCoordinate;
    depthOrArrayLayers?: GPUIntegerCoordinate;
};
type GPUOrigin2D = GPUIntegerCoordinate[] | {
    x?: GPUIntegerCoordinate;
    y?: GPUIntegerCoordinate;
};
type GPUOrigin3D = GPUIntegerCoordinate[] | {
    x?: GPUIntegerCoordinate;
    y?: GPUIntegerCoordinate;
    z?: GPUIntegerCoordinate;
};
type GPUTextureFormat = 'r8unorm' | 'r8snorm' | 'r8uint' | 'r8sint' | 'r16uint' | 'r16sint' | 'r16float' | 'rg8unorm' | 'rg8snorm' | 'rg8uint' | 'rg8sint' | 'r32uint' | 'r32sint' | 'r32float' | 'rg16uint' | 'rg16sint' | 'rg16float' | 'rgba8unorm' | 'rgba8unorm-srgb' | 'rgba8snorm' | 'rgba8uint' | 'rgba8sint' | 'bgra8unorm' | 'bgra8unorm-srgb' | 'rgb9e5ufloat' | 'rgb10a2unorm' | 'rg11b10ufloat' | 'rg32uint' | 'rg32sint' | 'rg32float' | 'rgba16uint' | 'rgba16sint' | 'rgba16float' | 'rgba32uint' | 'rgba32sint' | 'rgba32float' | 'stencil8' | 'depth16unorm' | 'depth24plus' | 'depth24plus-stencil8' | 'depth32float' | 'depth32float-stencil8' | 'bc1-rgba-unorm' | 'bc1-rgba-unorm-srgb' | 'bc2-rgba-unorm' | 'bc2-rgba-unorm-srgb' | 'bc3-rgba-unorm' | 'bc3-rgba-unorm-srgb' | 'bc4-r-unorm' | 'bc4-r-snorm' | 'bc5-rg-unorm' | 'bc5-rg-snorm' | 'bc6h-rgb-ufloat' | 'bc6h-rgb-float' | 'bc7-rgba-unorm' | 'bc7-rgba-unorm-srgb' | 'etc2-rgb8unorm' | 'etc2-rgb8unorm-srgb' | 'etc2-rgb8a1unorm' | 'etc2-rgb8a1unorm-srgb' | 'etc2-rgba8unorm' | 'etc2-rgba8unorm-srgb' | 'eac-r11unorm' | 'eac-r11snorm' | 'eac-rg11unorm' | 'eac-rg11snorm' | 'astc-4x4-unorm' | 'astc-4x4-unorm-srgb' | 'astc-5x4-unorm' | 'astc-5x4-unorm-srgb' | 'astc-5x5-unorm' | 'astc-5x5-unorm-srgb' | 'astc-6x5-unorm' | 'astc-6x5-unorm-srgb' | 'astc-6x6-unorm' | 'astc-6x6-unorm-srgb' | 'astc-8x5-unorm' | 'astc-8x5-unorm-srgb' | 'astc-8x6-unorm' | 'astc-8x6-unorm-srgb' | 'astc-8x8-unorm' | 'astc-8x8-unorm-srgb' | 'astc-10x5-unorm' | 'astc-10x5-unorm-srgb' | 'astc-10x6-unorm' | 'astc-10x6-unorm-srgb' | 'astc-10x8-unorm' | 'astc-10x8-unorm-srgb' | 'astc-10x10-unorm' | 'astc-10x10-unorm-srgb' | 'astc-12x10-unorm' | 'astc-12x10-unorm-srgb' | 'astc-12x12-unorm' | 'astc-12x12-unorm-srgb';
type GPUVertexFormat = 'uint8x2' | 'uint8x4' | 'sint8x2' | 'sint8x4' | 'unorm8x2' | 'unorm8x4' | 'snorm8x2' | 'snorm8x4' | 'uint16x2' | 'uint16x4' | 'sint16x2' | 'sint16x4' | 'unorm16x2' | 'unorm16x4' | 'snorm16x2' | 'snorm16x4' | 'float16x2' | 'float16x4' | 'float32' | 'float32x2' | 'float32x3' | 'float32x4' | 'uint32' | 'uint32x2' | 'uint32x3' | 'uint32x4' | 'sint32' | 'sint32x2' | 'sint32x3' | 'sint32x4';
interface GPURequestAdapterOptions {
    powerPreference?: GPUPowerPreference;
    forceFallbackAdapter?: boolean;
}
interface GPUSupportedLimits {
    readonly maxTextureDimension1D: number;
    readonly maxTextureDimension2D: number;
    readonly maxTextureDimension3D: number;
    readonly maxTextureArrayLayers: number;
    readonly maxBindGroups: number;
    readonly maxBindingsPerBindGroup: number;
    readonly maxDynamicUniformBuffersPerPipelineLayout: number;
    readonly maxDynamicStorageBuffersPerPipelineLayout: number;
    readonly maxSampledTexturesPerShaderStage: number;
    readonly maxSamplersPerShaderStage: number;
    readonly maxStorageBuffersPerShaderStage: number;
    readonly maxStorageTexturesPerShaderStage: number;
    readonly maxUniformBuffersPerShaderStage: number;
    readonly maxUniformBufferBindingSize: number;
    readonly maxStorageBufferBindingSize: number;
    readonly minUniformBufferOffsetAlignment: number;
    readonly minStorageBufferOffsetAlignment: number;
    readonly maxVertexBuffers: number;
    readonly maxBufferSize: number;
    readonly maxVertexAttributes: number;
    readonly maxVertexBufferArrayStride: number;
    readonly maxInterStageShaderComponents: number;
    readonly maxInterStageShaderVariables: number;
    readonly maxColorAttachments: number;
    readonly maxColorAttachmentBytesPerSample: number;
    readonly maxComputeWorkgroupStorageSize: number;
    readonly maxComputeInvocationsPerWorkgroup: number;
    readonly maxComputeWorkgroupSizeX: number;
    readonly maxComputeWorkgroupSizeY: number;
    readonly maxComputeWorkgroupSizeZ: number;
    readonly maxComputeWorkgroupsPerDimension: number;
}
interface GPUObjectDescriptorBase {
    label?: string;
}
interface GPUObjectBase {
    label: string;
}
interface GPUQueueDescriptor extends GPUObjectDescriptorBase {
}
interface GPUDeviceDescriptor extends GPUObjectDescriptorBase {
    requiredFeatures?: GPUFeatureName[];
    requiredLimits?: Record<string, GPUSize64>;
    defaultQueue?: GPUQueueDescriptor;
}
interface GPUAdapterInfo {
    readonly vendor: string;
    readonly architecture: string;
    readonly device: string;
    readonly description: string;
}
type GPUSupportedFeatures = Map<string, string>;
interface GPUCommandBuffer extends GPUObjectBase {
}
declare enum GPUBufferUsage {
    MAP_READ = 1,
    MAP_WRITE = 2,
    COPY_SRC = 4,
    COPY_DST = 8,
    INDEX = 16,
    VERTEX = 32,
    UNIFORM = 64,
    STORAGE = 128,
    INDIRECT = 256,
    QUERY_RESOLVE = 512
}
declare enum GPUMapModeFlags {
    READ = 1,
    WRITE = 2
}
declare enum GPUTextureUsage {
    COPY_SRC = 1,
    COPY_DST = 2,
    TEXTURE_BINDING = 4,
    STORAGE_BINDING = 8,
    RENDER_ATTACHMENT = 16
}
interface GPUBuffer extends GPUObjectBase {
    readonly size: GPUSize64;
    readonly usage: GPUBufferUsage;
    readonly mapState: GPUBufferMapState;
    mapAsync(mode: GPUMapModeFlags, offset?: GPUSize64, size?: GPUSize64): Promise<void>;
    getMappedRange(offset?: GPUSize64, size?: GPUSize64): ArrayBuffer;
    unmap(): void;
    destroy(): void;
}
interface GPUTextureViewDescriptor extends GPUObjectDescriptorBase {
    format?: GPUTextureFormat;
    dimension?: GPUTextureViewDimension;
    aspect?: GPUTextureAspect;
    baseMipLevel?: GPUIntegerCoordinate;
    mipLevelCount?: GPUIntegerCoordinate;
    baseArrayLayer?: GPUIntegerCoordinate;
    arrayLayerCount?: GPUIntegerCoordinate;
}
interface GPUTextureView extends GPUObjectBase {
}
interface GPUTexture extends GPUObjectBase {
    readonly width: GPUIntegerCoordinate;
    readonly height: GPUIntegerCoordinate;
    readonly depthOrArrayLayers: GPUIntegerCoordinate;
    readonly mipLevelCount: GPUIntegerCoordinate;
    readonly sampleCount: GPUSize32;
    readonly dimension: GPUTextureDimension;
    readonly format: GPUTextureFormat;
    readonly usage: number;
    createView(descriptor?: GPUTextureViewDescriptor): GPUTextureView;
    destroy(): void;
}
interface GPUImageCopyTexture {
    texture: GPUTexture;
    mipLevel?: number;
    origin?: GPUOrigin3D;
    aspect?: GPUTextureAspect;
}
interface GPUImageDataLayout {
    offset?: GPUSize64;
    bytesPerRow?: GPUSize32;
    rowsPerImage?: GPUSize32;
}
interface GPUImageCopyExternalImage {
    source: ImageBitmap | HTMLVideoElement | HTMLCanvasElement | OffscreenCanvas | VideoFrame;
    origin?: GPUOrigin2D;
    flipY?: boolean;
}
interface GPUImageCopyTextureTagged extends GPUImageCopyTexture {
    colorSpace?: string;
    premultipliedAlpha?: boolean;
}
interface GPUQueue extends GPUObjectBase {
    submit(commandBuffers: GPUCommandBuffer[]): void;
    onSubmittedWorkDone(): Promise<void>;
    writeBuffer(buffer: GPUBuffer, bufferOffset: GPUSize64, data: BufferSource, dataOffset?: GPUSize64, size?: GPUSize64): void;
    writeTexture(destination: GPUImageCopyTexture, data: BufferSource, dataLayout: GPUImageDataLayout, size: GPUExtent3D): void;
    copyExternalImageToTexture(source: GPUImageCopyExternalImage, destination: GPUImageCopyTextureTagged, copySize: GPUExtent3D): void;
}
interface GPUBufferDescriptor extends GPUObjectDescriptorBase {
    size: GPUSize64;
    usage: number;
    mappedAtCreation?: boolean;
}
interface GPUTextureDescriptor extends GPUObjectDescriptorBase {
    size: GPUExtent3D;
    format: GPUTextureFormat;
    usage: number;
    mipLevelCount?: GPUIntegerCoordinate;
    sampleCount?: GPUSize32;
    dimension?: GPUTextureDimension;
    viewFormats?: GPUTextureFormat[];
}
interface GPUSamplerDescriptor extends GPUObjectDescriptorBase {
    addressModeU?: GPUAddressMode;
    addressModeV?: GPUAddressMode;
    addressModeW?: GPUAddressMode;
    magFilter?: GPUFilterMode;
    minFilter?: GPUFilterMode;
    mipmapFilter?: GPUMipmapFilterMode;
    lodMinClamp?: number;
    lodMaxClamp?: number;
    compare?: GPUCompareFunction;
    maxAnisotropy?: number;
}
interface GPUSampler extends GPUObjectBase {
}
interface GPUExternalTextureDescriptor extends GPUObjectDescriptorBase {
    source: HTMLVideoElement | VideoFrame;
    colorSpace?: string;
}
interface GPUExternalTexture extends GPUObjectBase {
    readonly expired: boolean;
}
declare enum GPUShaderStage {
    VERTEX = 1,
    FRAGMENT = 2,
    COMPUTE = 4
}
interface GPUBufferBindingLayout {
    type?: GPUBufferBindingType;
    hasDynamicOffset?: boolean;
    minBindingSize?: GPUSize64;
}
interface GPUSamplerBindingLayout {
    type?: GPUSamplerBindingType;
}
interface GPUTextureBindingLayout {
    sampleType?: GPUTextureSampleType;
    viewDimension?: GPUTextureViewDimension;
    multisampled?: boolean;
}
interface GPUStorageTextureBindingLayout {
    access?: GPUStorageTextureAccess;
    format: GPUTextureFormat;
    viewDimension?: GPUTextureViewDimension;
}
interface GPUExternalTextureBindingLayout {
}
interface GPUBindGroupLayoutEntry {
    binding: GPUIndex32;
    visibility: GPUShaderStage;
    buffer?: GPUBufferBindingLayout;
    sampler?: GPUSamplerBindingLayout;
    texture?: GPUTextureBindingLayout;
    storageTexture?: GPUStorageTextureBindingLayout;
    externalTexture?: GPUExternalTextureBindingLayout;
}
interface GPUBindGroupLayoutDescriptor extends GPUObjectDescriptorBase {
    entries: GPUBindGroupLayoutEntry[];
}
interface GPUBindGroupLayout extends GPUObjectBase {
}
interface GPUPipelineLayoutDescriptor extends GPUObjectDescriptorBase {
    bindGroupLayouts: GPUBindGroupLayout[];
}
interface GPUPipelineLayout extends GPUObjectBase {
}
interface GPUBufferBinding {
    buffer: GPUBuffer;
    offset?: GPUSize64;
    size?: GPUSize64;
}
type GPUBindingResource = GPUSampler | GPUTextureView | GPUBufferBinding | GPUExternalTexture;
interface GPUBindGroupEntry {
    binding: GPUIndex32;
    resource: GPUBindingResource;
}
interface GPUBindGroupDescriptor extends GPUObjectDescriptorBase {
    layout: GPUBindGroupLayout;
    entries: GPUBindGroupEntry[];
}
interface GPUBindGroup extends GPUObjectBase {
}
interface GPUShaderModuleCompilationHint {
    layout?: GPUPipelineLayout | GPUAutoLayoutMode;
}
interface GPUShaderModuleDescriptor extends GPUObjectDescriptorBase {
    code: string;
    sourceMap?: Object;
    hints?: Record<string, GPUShaderModuleCompilationHint>;
}
interface GPUCompilationMessage {
    readonly message: string;
    readonly type: GPUCompilationMessageType;
    readonly lineNum: number;
    readonly linePos: number;
    readonly offset: number;
    readonly length: number;
}
interface GPUCompilationInfo {
    readonly messages: GPUCompilationMessage[];
}
interface GPUShaderModule extends GPUObjectBase {
    compilationInfo(): Promise<GPUCompilationInfo>;
}
interface GPUProgrammableStage {
    module: GPUShaderModule;
    entryPoint: string;
    constants?: Record<string, GPUPipelineConstantValue>;
}
interface GPUPipelineDescriptorBase extends GPUObjectDescriptorBase {
    layout: GPUPipelineLayout | GPUAutoLayoutMode;
}
interface GPUComputePipelineDescriptor extends GPUPipelineDescriptorBase {
    compute: GPUProgrammableStage;
}
interface GPUPipelineBase {
    getBindGroupLayout(index: number): GPUBindGroupLayout;
}
interface GPUComputePipeline extends GPUObjectBase, GPUPipelineBase {
}
interface GPUVertexAttribute {
    format: GPUVertexFormat;
    offset: GPUSize64;
    shaderLocation: GPUIndex32;
}
interface GPUVertexBufferLayout {
    arrayStride: number;
    stepMode?: GPUVertexStepMode;
    attributes: GPUVertexAttribute[];
}
interface GPUVertexState extends GPUProgrammableStage {
    buffers: GPUVertexBufferLayout[];
}
interface GPUPrimitiveState {
    topology?: GPUPrimitiveTopology;
    stripIndexFormat?: GPUIndexFormat;
    frontFace?: GPUFrontFace;
    cullMode?: GPUCullMode;
    unclippedDepth?: boolean;
}
interface GPUStencilFaceState {
    compare?: GPUCompareFunction;
    failOp?: GPUStencilOperation;
    depthFailOp?: GPUStencilOperation;
    passOp?: GPUStencilOperation;
}
interface GPUDepthStencilState {
    format: GPUTextureFormat;
    depthWriteEnabled?: boolean;
    depthCompare?: GPUCompareFunction;
    stencilFront?: GPUStencilFaceState;
    stencilBack?: GPUStencilFaceState;
    stencilReadMask?: GPUStencilValue;
    stencilWriteMask?: GPUStencilValue;
    depthBias?: GPUDepthBias;
    depthBiasSlopeScale?: number;
    depthBiasClamp?: number;
}
interface GPUMultisampleState {
    count?: GPUSize32;
    mask?: GPUSampleMask;
    alphaToCoverageEnabled?: boolean;
}
interface GPUBlendComponent {
    operation?: GPUBlendOperation;
    srcFactor?: GPUBlendFactor;
    dstFactor?: GPUBlendFactor;
}
interface GPUBlendState {
    color: GPUBlendComponent;
    alpha: GPUBlendComponent;
}
declare enum GPUColorWrite {
    RED = 1,
    GREEN = 2,
    BLUE = 4,
    ALPHA = 8,
    ALL = 15
}
interface GPUColorTargetState {
    format: GPUTextureFormat;
    blend?: GPUBlendState;
    writeMask?: number;
}
interface GPUFragmentState extends GPUProgrammableStage {
    targets: GPUColorTargetState[];
}
interface GPURenderPipelineDescriptor extends GPUPipelineDescriptorBase {
    vertex: GPUVertexState;
    primitive?: GPUPrimitiveState;
    depthStencil?: GPUDepthStencilState;
    multisample?: GPUMultisampleState;
    fragment?: GPUFragmentState;
}
interface GPURenderPipeline extends GPUObjectBase, GPUPipelineBase {
}
interface GPUCommandEncoderDescriptor extends GPUObjectDescriptorBase {
}
interface GPUCommandsMixin {
}
interface GPUDebugCommandsMixin {
    pushDebugGroup(groupLabel: number): void;
    popDebugGroup(): void;
    insertDebugMarker(markerLabel: number): void;
}
interface GPURenderPassColorAttachment {
    view: GPUTextureView;
    resolveTarget?: GPUTextureView;
    clearValue?: GPUColor;
    loadOp: GPULoadOp;
    storeOp: GPUStoreOp;
}
interface GPURenderPassDepthStencilAttachment {
    view: GPUTextureView;
    depthClearValue?: number;
    depthLoadOp?: GPULoadOp;
    depthStoreOp?: GPUStoreOp;
    depthReadOnly?: boolean;
    stencilClearValue?: GPUStencilValue;
    stencilLoadOp?: GPULoadOp;
    stencilStoreOp?: GPUStoreOp;
    stencilReadOnly?: boolean;
}
interface GPUQuerySet extends GPUObjectBase {
    destroy(): void;
    readonly type: GPUQueryType;
    readonly count: GPUSize32;
}
interface GPURenderPassTimestampWrite {
    querySet: GPUQuerySet;
    queryIndex: GPUSize32;
    location: GPURenderPassTimestampLocation;
}
type GPURenderPassTimestampWrites = GPURenderPassTimestampWrite[];
interface GPURenderPassDescriptor extends GPUObjectDescriptorBase {
    colorAttachments: GPURenderPassColorAttachment[];
    depthStencilAttachment?: GPURenderPassDepthStencilAttachment;
    occlusionQuerySet?: GPUQuerySet;
    timestampWrites?: GPURenderPassTimestampWrites;
    maxDrawCount?: GPUSize64;
}
interface GPUBindingCommandsMixin {
    setBindGroup(index: GPUIndex32, bindGroup: GPUBindGroup, dynamicOffsets?: GPUBufferDynamicOffset[]): void;
    setBindGroup(index: GPUIndex32, bindGroup: GPUBindGroup, dynamicOffsetsData: Uint32Array, dynamicOffsetsDataStart: GPUSize64, dynamicOffsetsDataLength: GPUSize32): void;
}
interface GPURenderCommandsMixin {
    setPipeline(pipeline: GPURenderPipeline): void;
    setIndexBuffer(buffer: GPUBuffer, indexFormat: GPUIndexFormat, offset?: GPUSize64, size?: GPUSize64): void;
    setVertexBuffer(slot: GPUIndex32, buffer: GPUBuffer, offset?: GPUSize64, size?: GPUSize64): void;
    draw(vertexCount: GPUSize32, instanceCount?: GPUSize32, firstVertex?: GPUSize32, firstInstance?: GPUSize32): void;
    drawIndexed(indexCount: GPUSize32, instanceCount?: GPUSize32, firstIndex?: GPUSize32, baseVertex?: GPUSignedOffset32, firstInstance?: GPUSize32): void;
    drawIndirect(indirectBuffer: GPUBuffer, indirectOffset: GPUSize64): void;
    drawIndexedIndirect(indirectBuffer: GPUBuffer, indirectOffset: GPUSize64): void;
}
interface GPURenderBundle extends GPUObjectBase {
}
interface GPURenderPassEncoder extends GPUObjectBase, GPUCommandsMixin, GPUDebugCommandsMixin, GPUBindingCommandsMixin, GPURenderCommandsMixin {
    setViewport(x: number, y: number, width: number, height: number, minDepth: number, maxDepth: number): void;
    setScissorRect(x: GPUIntegerCoordinate, y: GPUIntegerCoordinate, width: GPUIntegerCoordinate, height: GPUIntegerCoordinate): void;
    setBlendConstant(color: GPUColor): void;
    setStencilReference(reference: GPUStencilValue): void;
    beginOcclusionQuery(queryIndex: GPUSize32): void;
    endOcclusionQuery(): void;
    executeBundles(bundles: GPURenderBundle[]): void;
    end(): void;
}
interface GPUComputePassTimestampWrite {
    querySet: GPUQuerySet;
    queryIndex: GPUSize32;
    location: GPUComputePassTimestampLocation;
}
type GPUComputePassTimestampWrites = GPUComputePassTimestampWrite[];
interface GPUComputePassDescriptor extends GPUObjectDescriptorBase {
    timestampWrites?: GPUComputePassTimestampWrites;
}
interface GPUComputePassEncoder extends GPUObjectBase, GPUCommandsMixin, GPUDebugCommandsMixin, GPUBindingCommandsMixin {
    setPipeline(pipeline: GPUComputePipeline): void;
    dispatchWorkgroups(workgroupCountX: GPUSize32, workgroupCountY?: GPUSize32, workgroupCountZ?: GPUSize32): void;
    dispatchWorkgroupsIndirect(indirectBuffer: GPUBuffer, indirectOffset: GPUSize64): void;
    end(): void;
}
interface GPUImageCopyBuffer extends GPUImageDataLayout {
    buffer: GPUBuffer;
}
interface GPUCommandBufferDescriptor extends GPUObjectDescriptorBase {
}
interface GPUCommandEncoder extends GPUObjectBase, GPUCommandsMixin, GPUDebugCommandsMixin {
    /**
     * 开启一个渲染通道编码器
     *
     * @param descriptor
     */
    beginRenderPass(descriptor: GPURenderPassDescriptor): GPURenderPassEncoder;
    /**
     * 开启一个计算通道编码器
     *
     * @param descriptor
     */
    beginComputePass(descriptor: GPUComputePassDescriptor): GPUComputePassEncoder;
    /**
     * 将一个 GPU 缓存数据复制到另一个 GPU 缓存
     *
     * @param source
     * @param sourceOffset
     * @param destination
     * @param destinationOffset
     * @param size
     */
    copyBufferToBuffer(source: GPUBuffer, sourceOffset: GPUSize64, destination: GPUBuffer, destinationOffset: GPUSize64, size: GPUSize64): void;
    /**
     * 将 GPU 缓存中的数据复制到一个纹理中
     *
     * @param source
     * @param destination
     * @param copySize
     */
    copyBufferToTexture(source: GPUImageCopyBuffer, destination: GPUImageCopyTexture, copySize: GPUExtent3D): void;
    /**
     * 将纹理数据复制到一个 GPU 缓存
     *
     * @param source
     * @param destination
     * @param copySize
     */
    copyTextureToBuffer(source: GPUImageCopyTexture, destination: GPUImageCopyBuffer, copySize: GPUExtent3D): void;
    /**
     * 将纹理数据复制到另一个纹理
     *
     * @param source
     * @param destination
     * @param copySize
     */
    copyTextureToTexture(source: GPUImageCopyTexture, destination: GPUImageCopyTexture, copySize: GPUExtent3D): void;
    /**
     * 清空 GPU 缓存
     *
     * @param buffer
     * @param offset
     * @param size
     */
    clearBuffer(buffer: GPUBuffer, offset?: GPUSize64, size?: GPUSize64): void;
    /**
     * 记录时间戳
     *
     * @param querySet
     * @param queryIndex
     */
    writeTimestamp(querySet: GPUQuerySet, queryIndex: GPUSize32): void;
    /**
     * 将时间戳查询结果写入存储型缓冲
     *
     * @param querySet
     * @param firstQuery
     * @param queryCount
     * @param destination
     * @param destinationOffset
     */
    resolveQuerySet(querySet: GPUQuerySet, firstQuery: GPUSize32, queryCount: GPUSize32, destination: GPUBuffer, destinationOffset: GPUSize64): void;
    /**
     * 结束指令编码
     *
     * @param descriptor
     */
    finish(descriptor?: GPUCommandBufferDescriptor): GPUCommandBuffer;
}
interface GPURenderPassLayout extends GPUObjectDescriptorBase {
    colorFormats: GPUTextureFormat[];
    depthStencilFormat?: GPUTextureFormat;
    sampleCount?: GPUSize32;
}
interface GPURenderBundleEncoderDescriptor extends GPURenderPassLayout {
    depthReadOnly?: boolean;
    stencilReadOnly?: boolean;
}
interface GPURenderBundleDescriptor extends GPUObjectDescriptorBase {
}
interface GPURenderBundleEncoder extends GPUObjectBase, GPUCommandsMixin, GPUDebugCommandsMixin, GPUBindingCommandsMixin, GPURenderCommandsMixin {
    /**
     * 结束渲染捆绑包编码
     *
     * @param descriptor
     */
    finish(descriptor?: GPURenderBundleDescriptor): GPURenderBundle;
}
interface GPUQuerySetDescriptor extends GPUObjectDescriptorBase {
    type: GPUQueryType;
    count: GPUSize32;
}
interface GPUDevice extends EventTarget, GPUObjectBase {
    readonly features: GPUSupportedFeatures;
    readonly limits: GPUSupportedLimits;
    /**
     * 指令队列
     */
    readonly queue: GPUQueue;
    readonly lost: Promise<any>;
    destroy(): void;
    /**
     * 创建一块 GPU 内存
     *
     * @param descriptor
     */
    createBuffer(descriptor: GPUBufferDescriptor): GPUBuffer;
    /**
     * 创建一个纹理
     *
     * @param descriptor
     */
    createTexture(descriptor: GPUTextureDescriptor): GPUTexture;
    /**
     * 创建一个采样器
     *
     * @param descriptor
     */
    createSampler(descriptor?: GPUSamplerDescriptor): GPUSampler;
    /**
     * 从 一个 video 元素导出一个纹理，
     *
     * @param descriptor
     */
    importExternalTexture(descriptor: GPUExternalTextureDescriptor): GPUExternalTexture;
    /**
     * 创建一个绑定组布局
     *
     * @param descriptor
     */
    createBindGroupLayout(descriptor: GPUBindGroupLayoutDescriptor): GPUBindGroupLayout;
    /**
     * 创建一个管线布局
     *
     * @param descriptor
     */
    createPipelineLayout(descriptor: GPUPipelineLayoutDescriptor): GPUPipelineLayout;
    /**
     * 创建一个绑定组
     *
     * @param descriptor
     */
    createBindGroup(descriptor: GPUBindGroupDescriptor): GPUBindGroup;
    /**
     * 创建一个着色器
     *
     * @param descriptor
     */
    createShaderModule(descriptor: GPUShaderModuleDescriptor): GPUShaderModule;
    /**
     * 创建一个计算管线
     *
     * @param descriptor
     */
    createComputePipeline(descriptor: GPUComputePipelineDescriptor): GPUComputePipeline;
    /**
     * 创建一个渲染管线
     *
     * @param descriptor
     */
    createRenderPipeline(descriptor: GPURenderPipelineDescriptor): GPURenderPipeline;
    /**
     * 异步创建一个计算管线
     *
     * @param descriptor
     */
    createComputePipelineAsync(descriptor: GPUComputePipelineDescriptor): Promise<GPUComputePipeline>;
    /**
     * 异步创建一个渲染管线
     * @param descriptor
     */
    createRenderPipelineAsync(descriptor: GPURenderPipelineDescriptor): Promise<GPURenderPipeline>;
    /**
     * 创建一个指令编码器
     *
     * @param descriptor
     */
    createCommandEncoder(descriptor?: GPUCommandEncoderDescriptor): GPUCommandEncoder;
    /**
     * 创建一个渲染捆绑包编码器
     *
     * @param descriptor
     */
    createRenderBundleEncoder(descriptor: GPURenderBundleEncoderDescriptor): GPURenderBundleEncoder;
    /**
     * 创建一个查询集
     *
     * @param descriptor
     */
    createQuerySet(descriptor: GPUQuerySetDescriptor): GPUQuerySet;
}
interface GPUAdapter {
    /**
     * 当前 GPU Adapter 支持的功能列表
     */
    readonly features: Map<string, string>;
    /**
     * 当前 GPU Adapter 的一些限制
     */
    readonly limits: GPUSupportedLimits;
    /**
     * 是否是回滚的 GPU Adapter（比如在一个没有独显的设备上请求独显 Adapter，则返回的核显 Adapter，此值为 true）
     */
    readonly isFallbackAdapter: boolean;
    /**
     * 获取 GPUDevice 设备
     *
     * @param options
     */
    requestDevice(options?: GPUDeviceDescriptor): Promise<GPUDevice>;
    /**
     * 获取 GPU Adapter 的一些信息
     *
     * @param unmaskHints
     */
    requestAdapterInfo(unmaskHints?: string[]): Promise<GPUAdapterInfo>;
}
interface GPUCanvasConfiguration {
    device: GPUDevice;
    format: GPUTextureFormat;
    usage?: number;
    viewFormats?: GPUTextureFormat[];
    colorSpace?: string;
    alphaMode?: GPUCanvasAlphaMode;
}
declare interface GPUCanvasContext {
    readonly canvas: HTMLCanvasElement | OffscreenCanvas;
    /**
     * GPUCanvasContext 配置
     *
     * @param configuration
     */
    configure(configuration: GPUCanvasConfiguration): void;
    /**
     * GPUCanvasContext 取消配置
     */
    unconfigure(): void;
    /**
     * 获取当前的 canvas 颜色缓冲 texture（注意每次一绘制操作都需要重新获取）
     */
    getCurrentTexture(): GPUTexture;
}
interface GPU {
    /**
     * 获取设备适配器，可以选择获取核显或独显
     * 'low-power' 核显
     * 'high-performance' 独显
     *
     * @param options
     */
    requestAdapter(options?: GPURequestAdapterOptions): Promise<GPUAdapter>;
    /**
     * 获取 canvas 的优先颜色格式（texture 最好使用这个颜色格式）
     */
    getPreferredCanvasFormat(): 'rgba8unorm' | 'bgra8unorm';
}
declare interface Navigator {
    gpu: GPU;
}
declare interface HTMLCanvasElement {
    /**
     * 获取 webgpu 上下文
     *
     * @param contextId
     */
    getContext(contextId: 'webgpu'): GPUCanvasContext | null;
}
