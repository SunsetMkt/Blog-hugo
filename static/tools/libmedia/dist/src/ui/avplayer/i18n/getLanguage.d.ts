import * as chinese from './chinese';
import * as english from './english';
export declare const enum Language {
    CHINESE = "chinese",
    CHINESE_TRADITIONAL = "chinese_traditional",
    ENGLISH = "english"
}
export default function getLanguage(): typeof chinese | typeof english;
