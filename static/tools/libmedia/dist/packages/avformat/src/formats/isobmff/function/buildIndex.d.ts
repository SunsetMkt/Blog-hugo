import type { IsobmffContext } from '../type';
import { type AVStream } from '@libmedia/avutil';
export declare function buildIndex(stream: AVStream, isobmffContext: IsobmffContext): void;
