/**
 * 将某个文件的代码变成字符串（Webpack 使用）
 */
export default function (moduleId: string, options: {
    varName: string;
    exportName?: string;
    pointName?: string;
    exportIsClass?: boolean;
}): string;
