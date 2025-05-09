import { AVChannelLayout } from '../struct/audiosample';
export declare function getChannelLayoutNBChannels(layout: uint64): number;
export declare function unInitChannelLayout(channelLayout: pointer<AVChannelLayout>): void;
export declare function setChannelLayoutFromMask(channelLayout: pointer<AVChannelLayout>, mask: uint64): 0 | -3;
export declare function initCustomChannelLayout(channelLayout: pointer<AVChannelLayout>, channels: int32): void;
