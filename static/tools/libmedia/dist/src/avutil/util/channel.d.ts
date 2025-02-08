import { AVChannelLayout } from '../struct/audiosample';
export declare function getChannelLayoutNBChannels(layout: uint64): number;
export declare function unInitChannelLayout(channelLayout: pointer<AVChannelLayout>): void;
export declare function setChannelLayoutFromMask(channelLayout: pointer<AVChannelLayout>, mask: int32): 0 | -3;
