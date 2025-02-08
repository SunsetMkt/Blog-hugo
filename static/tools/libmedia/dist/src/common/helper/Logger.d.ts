type Options = {
    uploadLevel?: number;
    onUpload?: (log: string, level: number) => void;
};
type defined<T extends string> = `defined(${T})`;
export default class Logger {
    private options;
    private canUpload;
    TRACE: number;
    DEBUG: number;
    INFO: number;
    WARN: number;
    ERROR: number;
    FATAL: number;
    constructor(options?: Options);
    enableUploadLog(): void;
    disableUploadLog(): void;
    setUploadLevel(level: number): void;
    fatal(msg: string, upload: boolean, file: string, line: number): void;
    fatal<args = [defined<'__FILE__'>, defined<'__LINE__'>]>(msg: string, upload?: boolean): void;
    error(msg: string, upload: boolean, file: string, line: number): void;
    error<args = [defined<'__FILE__'>, defined<'__LINE__'>]>(msg: string, upload?: boolean): void;
    warn(msg: string, upload: boolean, file: string, line: number): void;
    warn<args = [defined<'__FILE__'>, defined<'__LINE__'>]>(msg: string, upload?: boolean): void;
    info(msg: string, upload: boolean, file: string, line: number): void;
    info<args = [defined<'__FILE__'>, defined<'__LINE__'>]>(msg: string, upload?: boolean): void;
    debug(msg: string, upload: boolean, file: string, line: number): void;
    debug<args = [defined<'__FILE__'>, defined<'__LINE__'>]>(msg: string, upload?: boolean): void;
    trace(msg: string, upload: boolean, file: string, line: number): void;
    trace<args = [defined<'__FILE__'>, defined<'__LINE__'>]>(msg: string, upload?: boolean): void;
    log(log: string, level: number, upload: boolean, file: string, line: number): void;
    log<args = [defined<'__FILE__'>, defined<'__LINE__'>]>(log: string, level: number, upload?: boolean): void;
}
export {};
