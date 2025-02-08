import { type Project } from '@stackblitz/sdk';
import { IFiles } from 'codesandbox-import-utils/lib/api/define';
export declare function modifyStackBlitzData(memo: Project, props: any): Project | {
    files: IFiles;
};
export declare function modifyCodeSandboxData(memo: {
    files: IFiles;
}, props: any): Project | {
    files: IFiles;
};
