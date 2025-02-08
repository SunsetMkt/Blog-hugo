export declare const enum AssStylesFormat {
    Name = "Name",
    FontName = "Fontname",
    FontSize = "Fontsize",
    PrimaryColour = "PrimaryColour",
    SecondaryColour = "SecondaryColour",
    OutlineColour = "OutlineColour",
    BackColour = "BackColour",
    Bold = "Bold",
    Italic = "Italic",
    Underline = "Underline",
    StrikeOut = "StrikeOut",
    ScaleX = "ScaleX",
    ScaleY = "ScaleY",
    Spacing = "Spacing",
    Angle = "Angle",
    BorderStyle = "BorderStyle",
    Outline = "Outline",
    Shadow = "Shadow",
    Alignment = "Alignment",
    MarginL = "MarginL",
    MarginR = "MarginR",
    MarginV = "MarginV",
    Encoding = "Encoding"
}
export declare const enum AssEventsFormat {
    ReadOrder = "ReadOrder",
    Layer = "Layer",
    Start = "Start",
    End = "End",
    Style = "Style",
    Name = "Name",
    MarginL = "MarginL",
    MarginR = "MarginR",
    MarginV = "MarginV",
    Effect = "Effect",
    Text = "Text"
}
export declare const AssStylesFormatList: AssStylesFormat[];
export declare const AssEventsFormatList: AssEventsFormat[];
export declare const enum AssEventType {
    NONE = 0,
    Dialogue = 1,
    Comment = 2,
    Picture = 3,
    Sound = 4,
    Movie = 5,
    Command = 6
}
export interface AssEffect {
    name: string;
}
export interface AssEffectBanner extends AssEffect {
    delay: number;
    fadeAwayWidth: number;
    leftToRight: number;
}
export interface AssEffectScroll extends AssEffect {
    delay: number;
    fadeAwayHeight: number;
    y1: number;
    y2: number;
}
export interface AssEventTextParsed {
    tags: AssTag[];
    text: string;
    drawing: string[][];
}
export interface AssEventText {
    raw: string;
    combined: string;
    parsed: AssEventTextParsed[];
}
export interface AssEvent {
    type: AssEventType;
    ReadOrder: number;
    Layer: number;
    Start: int64;
    End: int64;
    Style: string;
    Name: string;
    MarginL: number;
    MarginR: number;
    MarginV: number;
    Effect?: AssEffect;
    Text: AssEventText;
}
export interface AssTag {
    a?: 0 | 1 | 2 | 3 | 5 | 6 | 7 | 9 | 10 | 11;
    a1?: string;
    a2?: string;
    a3?: string;
    a4?: string;
    alpha?: string;
    an?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    b?: 0 | 1;
    be?: number;
    blur?: number;
    bord?: number;
    c1?: string;
    c2?: string;
    c3?: string;
    c4?: string;
    clip?: {
        inverse: boolean;
        scale: number;
        drawing?: string[][];
        dots?: [number, number, number, number];
    };
    fad?: [number, number];
    fade?: [number, number, number, number, number, number];
    fax?: number;
    fay?: number;
    fe?: number;
    fn?: string;
    fr?: number;
    frx?: number;
    fry?: number;
    frz?: number;
    fs?: string;
    fscx?: number;
    fscy?: number;
    fsp?: number;
    i?: 0 | 1;
    k?: number;
    kf?: number;
    ko?: number;
    kt?: number;
    K?: number;
    move?: [number, number, number, number] | [number, number, number, number, number, number];
    org?: [number, number];
    p?: number;
    pbo?: number;
    pos?: [number, number];
    q?: 0 | 1 | 2 | 3;
    r?: string;
    s?: 0 | 1;
    shad?: number;
    t?: {
        t1: number;
        t2: number;
        accel: number;
        tags: AssTag[];
    };
    u?: 0 | 1;
    xbord?: number;
    xshad?: number;
    ybord?: number;
    yshad?: number;
}
