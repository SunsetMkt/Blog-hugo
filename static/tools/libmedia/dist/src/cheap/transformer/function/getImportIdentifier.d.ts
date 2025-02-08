export default function getImportIdentifier(map: Map<string, string>, name: string, defaultExport?: boolean): import("typescript").Identifier | import("typescript").PropertyAccessExpression;
