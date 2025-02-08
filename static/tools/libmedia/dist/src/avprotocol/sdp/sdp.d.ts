/**
 * from https://github.com/clux/sdp-transform
 */
import { SessionDescription } from './type';
/**
 * 解析 sdp
 *
 * @param sdp
 * @returns
 */
export declare function parse(sdp: string): SessionDescription;
/**
 * 序列化 sdp
 *
 * @param session
 * @param options
 * @returns
 */
export declare function stringify(session: SessionDescription, options?: {
    outerOrder: string[];
    innerOrder: string[];
}): string;
