export default class AlphaMask {
    private context;
    private canvas;
    private rgbCanvas;
    private rgbContext;
    private vs;
    private fs;
    private program;
    private posBuffer;
    private texBuffer;
    private texture;
    constructor(width: number, height: number);
    setUnpackAlignment(width: number): void;
    getTarget(): OffscreenCanvas;
    process(alpha: VideoFrame): void;
    destroy(): void;
}
