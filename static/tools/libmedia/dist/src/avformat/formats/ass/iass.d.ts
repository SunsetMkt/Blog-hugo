import { AssEvent } from './ass';
export declare function parseFormat(fields: string[], format: string): string[];
export declare function parseStyleFormat(format: string): string[];
export declare function parseEventFormat(format: string): string[];
export declare function parseEventLine(formats: string[], text: string): string[];
export declare function getEventLineTime(formats: string[], event: string, startIndex: number, endIndex: number): {
    start: bigint;
    end: bigint;
};
export declare function parseDrawing(text: string): string[][];
export declare function parseStyle(styleFormat: string[], style: string): Record<string, string>;
export declare function parseEvent(formats: string[], event: string): AssEvent;
