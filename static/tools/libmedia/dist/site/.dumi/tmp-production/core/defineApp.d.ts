interface IDefaultRuntimeConfig {
    onRouteChange?: (props: {
        routes: any;
        clientRoutes: any;
        location: any;
        action: any;
        isFirst: boolean;
    }) => void;
    patchRoutes?: (props: {
        routes: any;
    }) => void;
    patchClientRoutes?: (props: {
        routes: any;
    }) => void;
    render?: (oldRender: () => void) => void;
    rootContainer?: (lastRootContainer: JSX.Element, args?: any) => void;
    [key: string]: any;
}
export type RuntimeConfig = IDefaultRuntimeConfig;
export declare function defineApp(config: RuntimeConfig): RuntimeConfig;
export {};
