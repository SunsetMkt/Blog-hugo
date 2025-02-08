declare const terminal: {
    log(...objs: any[]): void;
    info(...objs: any[]): void;
    warn(...objs: any[]): void;
    error(...objs: any[]): void;
    group(): void;
    groupCollapsed(): void;
    groupEnd(): void;
    clear(): void;
    trace(...args: any[]): void;
    profile(...args: any[]): void;
    profileEnd(...args: any[]): void;
};
export { terminal };
