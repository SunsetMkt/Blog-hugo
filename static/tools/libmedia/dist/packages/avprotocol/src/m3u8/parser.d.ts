/**
 * from https://github.com/kuu/hls-parser/blob/master/parse.ts
 * MIT license
 *
 */
import { MasterPlaylist, MediaPlaylist } from './types';
export default function parse(text: string): MasterPlaylist | MediaPlaylist;
