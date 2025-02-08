import type { IDemoData, IRouteMeta } from 'dumi/dist/client/theme-api/types';
type ReactPromise<T> = Promise<T> & {
    status?: 'pending' | 'fulfilled' | 'rejected';
    value?: T;
    reason?: any;
};
/**
 * @private Internal usage. Safe to remove
 */
export declare function use<T>(promise: ReactPromise<T>): T;
/**
 * use demo data by id
 */
export declare function useDemo(id: string): IDemoData | undefined;
/**
 * get all demos
 */
export declare function getFullDemos(): Promise<Record<string, IDemoData>>;
/**
 * get route meta by id
 */
export declare function getRouteMetaById<T extends {
    syncOnly?: boolean;
}>(id: string, opts?: T): T extends {
    syncOnly: true;
} ? IRouteMeta | undefined : Promise<IRouteMeta> | undefined;
/**
 * get all routes meta
 */
export declare function getFullRoutesMeta(): Promise<Record<string, IRouteMeta>>;
export {};
