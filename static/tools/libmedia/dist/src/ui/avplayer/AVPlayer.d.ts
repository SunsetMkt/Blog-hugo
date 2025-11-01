import type { AVPlayerOptions } from 'avplayer/AVPlayer';
import AVPlayer from 'avplayer/AVPlayer';
import type { Component } from 'yox';
export declare const enum MenuAction {
    STATS = 0
}
export interface AVPlayerUIOptions extends AVPlayerOptions {
    container: HTMLDivElement;
    indicatorUrl?: string;
    pauseStateUrl?: string;
    errorStateUrl?: string;
    fullscreenDom?: HTMLElement;
    ui?: {
        hasFolder?: boolean;
        folderFolded?: boolean;
        hasHeader?: boolean;
        hasFooter?: boolean;
    };
}
export default class AVPlayerUI extends AVPlayer {
    ui: Component;
    private keyboard;
    constructor(options: AVPlayerUIOptions);
    foldFolder(): void;
    unfoldFolder(): void;
    toggleFolder(): void;
    addUrl(url: string, isLive: boolean, playAfterAdded: boolean): void;
    destroy(): Promise<void>;
}
