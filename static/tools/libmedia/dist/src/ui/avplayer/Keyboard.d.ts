import { AVPlayerStatus } from 'avplayer/AVPlayer';
import AVPlayerUI from './AVPlayer';
export declare const enum KeyboardPlayerActionKey {
    PLAY_OR_PAUSE = 1,
    SEEK_BACK = 2,
    SEEK_FORWARD = 3,
    UPPER_PLAYRATE = 4,
    STOP_UPPER_PLAYRATE = 5,
    NEXT_FILE = 6,
    PREV_FILE = 7,
    NEXT_FRAME = 8,
    SNAPSHOT = 9,
    STOP = 10,
    VOLUME_UP = 11,
    VOLUME_DOWN = 12,
    EXIT_FULLSCREEN = 13,
    FOLD_FOLDER = 14,
    UNFOLD_FOLDER = 15,
    SUBTITLE_DELAY_ADD = 16,
    SUBTITLE_DELAY_SUB = 17
}
type ActionType = 'up' | 'down' | 'longDown';
export interface KeyboardPlayerAction {
    keyCode: number;
    with: number[];
    action: ActionType;
    playerStatus?: AVPlayerStatus[];
    longDownBefore?: boolean;
}
export default class Keyboard {
    private onKeyDown_;
    private onKeyUp_;
    private player;
    private seekQueue;
    private lastPlayrate;
    private longDownTimer;
    private longDownRunning;
    constructor(player: AVPlayerUI);
    private actionPlayOrPause;
    private actionSeekForward;
    private actionSeekBack;
    private actionUpperPlayrate;
    private actionStopUpperPlayrate;
    private actionNextFile;
    private actionPrevFile;
    private actionNextFrame;
    private actionSnapshot;
    private actionStop;
    private actionVolumeUp;
    private actionVolumeDown;
    private actionExitFullscreen;
    private actionFoldFolder;
    private actionUnFoldFolder;
    private actionSubtitleDelayAdd;
    private actionSubtitleDelaySub;
    private runAction;
    private longDownAction;
    private getActionKeys;
    private onKeyDown;
    private onKeyUp;
    destroy(): void;
}
export {};
