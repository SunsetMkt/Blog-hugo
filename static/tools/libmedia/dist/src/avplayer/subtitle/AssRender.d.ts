import { AssEvent } from 'avformat/formats/ass/ass';
export interface AssRenderOptions {
    container: HTMLElement;
    videoWidth?: number;
    videoHeight?: number;
    header?: string;
    resampling?: 'video_width' | 'video_height' | 'script_width' | 'script_height';
}
export declare const defaultStyle: {
    Name: string;
    Fontname: string;
    Fontsize: string;
    PrimaryColour: string;
    SecondaryColour: string;
    OutlineColour: string;
    BackColour: string;
    Bold: string;
    Italic: string;
    Underline: string;
    StrikeOut: string;
    ScaleX: string;
    ScaleY: string;
    Spacing: string;
    Angle: string;
    BorderStyle: string;
    Outline: string;
    Shadow: string;
    Alignment: string;
    MarginL: string;
    MarginR: string;
    MarginV: string;
    Encoding: string;
};
export default class AssRender {
    private store;
    private resampling_;
    private resize_;
    private options;
    constructor(dom: HTMLElement, options?: AssRenderOptions);
    private framing;
    updateHeader(header: string): void;
    updateVideoResolution(videoWidth: number, videoHeight: number): void;
    render(event: AssEvent): void;
    clear(pts: int64): void;
    clearAll(): void;
    resize(): void;
    destroy(): this;
    show(): this;
    hide(): this;
    get resampling(): string;
    set resampling(r: string);
}
