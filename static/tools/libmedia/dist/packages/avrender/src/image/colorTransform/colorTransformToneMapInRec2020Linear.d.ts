import type ColorSpace from '../colorSpace/ColorSpace';
import type { ColorTransformOptions } from './options';
export declare function computeTonemapAB(src: ColorSpace, options: ColorTransformOptions): void;
export default function colorTransformToneMapInRec2020Linear(options: ColorTransformOptions): string;
