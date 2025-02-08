import AVPlayer, { AVPlayerOptions } from 'avplayer/AVPlayer';
import { Component } from 'yox';
export declare const enum MenuAction {
    STATS = 0
}
export interface AVPlayerUIOptions extends AVPlayerOptions {
    indicatorUrl?: string;
    pauseStateUrl?: string;
    errorStateUrl?: string;
    fullscreenDom?: HTMLElement;
    ui?: {
        hasFolder?: boolean;
        hasHeader?: boolean;
    };
}
export default class AVPlayerUI extends AVPlayer {
    ui: Component;
    private keyboard;
    constructor(options: AVPlayerUIOptions);
    foldFolder(): void;
    unfoldFolder(): void;
    destroy(): Promise<void>;
}
