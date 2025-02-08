import { ImportData, RequireData } from '../type';
export declare function pushImport(keys: ImportData[], name: string, path: string, formatName: string, defaultExport: boolean): ImportData;
export declare function pushRequire(keys: RequireData[], formatName: string, path: string, defaultExport: boolean, esModule: boolean): RequireData;
