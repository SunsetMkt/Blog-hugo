import type { ColorTransformOptions } from '../options';
import { AVColorTransferCharacteristic } from '@libmedia/avutil';
export default function toLinear(transferId: AVColorTransferCharacteristic, options: ColorTransformOptions): string;
