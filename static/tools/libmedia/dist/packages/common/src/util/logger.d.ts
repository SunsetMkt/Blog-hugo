/**
 * @file 日志
 */
export declare const TRACE = 0;
export declare const DEBUG = 1;
export declare const INFO = 2;
export declare const WARN = 3;
export declare const ERROR = 4;
export declare const FATAL = 5;
type defined<T extends string> = `defined(${T})`;
/**
 * 设置日志输出级别
 *
 * @param level 日志输出级别
 */
export declare function setLevel(level: number): void;
/**
 * 打印 trace 日志
 *
 * @param msg
 */
export declare function trace(msg: string, file: string, line: number): void;
export declare function trace<args = [defined<'__FILE__'>, defined<'__LINE__'>], enableArgs = defined<'ENABLE_LOG_PATH'>>(msg: string): void;
/**
 * 打印 debug 日志
 *
 * @param msg
 */
export declare function debug(msg: string, file: string, line: number): void;
export declare function debug<args = [defined<'__FILE__'>, defined<'__LINE__'>], enableArgs = defined<'ENABLE_LOG_PATH'>>(msg: string): void;
/**
 * 打印 info 日志
 *
 * @param msg
 */
export declare function info(msg: string, file: string, line: number): void;
export declare function info<args = [defined<'__FILE__'>, defined<'__LINE__'>], enableArgs = defined<'ENABLE_LOG_PATH'>>(msg: string): void;
/**
 * 打印 warn 日志
 *
 * @param msg
 */
export declare function warn(msg: string, file: string, line: number): void;
export declare function warn<args = [defined<'__FILE__'>, defined<'__LINE__'>], enableArgs = defined<'ENABLE_LOG_PATH'>>(msg: string): void;
/**
 * 打印 error 日志
 *
 * @param msg
 */
export declare function error(msg: string, file: string, line: number): void;
export declare function error<args = [defined<'__FILE__'>, defined<'__LINE__'>], enableArgs = defined<'ENABLE_LOG_PATH'>>(msg: string): void;
/**
 * 致命错误，中断程序
 *
 * @param msg
 */
export declare function fatal(msg: string, file: string, line: number): void;
export declare function fatal<args = [defined<'__FILE__'>, defined<'__LINE__'>], enableArgs = defined<'ENABLE_LOG_PATH'>>(msg: string): void;
/**
 * 根据日志等级打印
 *
 * @param level
 * @param msg
 * @param tag
 */
export declare function log(level: number, msg: string, file: string, line: number): void;
export declare function log<args = [defined<'__FILE__'>, defined<'__LINE__'>], enableArgs = defined<'ENABLE_LOG_PATH'>>(level: number, msg: string): void;
/**
 * 打开日志上传
 *
 */
export declare function enableUploadLog(): void;
/**
 * 关闭日志上传
 */
export declare function disableUploadLog(): void;
/**
 * 是否可以上传日志
 */
export declare function canUploadLog(): boolean;
/**
 * 设置日志上传等级
 */
export declare function setUploadLevel(level: number): void;
/**
 * 获取日志上传等级
 */
export declare function getUploadLevel(): number;
export {};
