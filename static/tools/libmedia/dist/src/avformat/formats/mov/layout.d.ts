import { BoxType } from './boxType';
import { MOVContext } from './type';
export interface BoxLayout {
    type: BoxType;
    children?: BoxLayout[];
}
export declare const FragmentTrackBoxLayoutMap: Record<number, (context: MOVContext) => BoxLayout[]>;
export declare const TrackBoxLayoutMap: Record<number, (context: MOVContext) => BoxLayout[]>;
export declare const MoofTrafBoxLayout: BoxLayout[];
