import { BoxType } from './boxType';
import type { FragmentTrack, IsobmffContext } from './type';
import { type AVStream } from '@libmedia/avutil';
export interface BoxLayout {
    type: BoxType;
    children?: BoxLayout[];
}
export declare const FragmentTrackBoxLayoutMap: Record<number, (context: IsobmffContext, stream: AVStream) => BoxLayout[]>;
export declare const TrackBoxLayoutMap: Record<number, (context: IsobmffContext, stream: AVStream) => BoxLayout[]>;
export declare const MoofTrafBoxLayout: (track: FragmentTrack) => {
    type: BoxType;
}[];
