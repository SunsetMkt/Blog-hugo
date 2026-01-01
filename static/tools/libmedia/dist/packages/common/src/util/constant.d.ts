/**
 * @file 为了压缩，定义的常量
 */
export declare const TRUE = true;
export declare const FALSE = false;
export declare const NULL: any;
export declare const UNDEFINED: any;
export declare const MINUS_ONE = -1;
export declare const RAW_TRUE = "true";
export declare const RAW_FALSE = "false";
export declare const RAW_NULL = "null";
export declare const RAW_UNDEFINED = "undefined";
export declare const RAW_THIS = "this";
export declare const RAW_VALUE = "value";
export declare const RAW_LENGTH = "length";
export declare const RAW_FUNCTION = "function";
export declare const RAW_WILDCARD = "*";
export declare const RAW_DOT = ".";
export declare const RAW_SLASH = "/";
export declare const RAW_TAG = "tag";
export declare const KEYPATH_PARENT = "..";
export declare const KEYPATH_CURRENT = "this";
/**
 * Single instance for window in browser
 */
export declare const WINDOW: Window;
/**
 * Single instance for document in browser
 */
export declare const DOCUMENT: any;
/**
 * Single instance for global in nodejs or browser
 */
export declare const GLOBAL: Window & NodeJS.Global;
/**
 * Single instance for self in nodejs or browser
 */
export declare const SELF: Window & NodeJS.Global;
/**
 * Single instance for noop function
 */
export declare const EMPTY_FUNCTION: () => void;
/**
 * 空对象，很多地方会用到，比如 `a || EMPTY_OBJECT` 确保是个对象
 */
export declare const EMPTY_OBJECT: Readonly<{}>;
/**
 * 空数组
 */
export declare const EMPTY_ARRAY: readonly any[];
/**
 * 空字符串
 */
export declare const EMPTY_STRING = "";
