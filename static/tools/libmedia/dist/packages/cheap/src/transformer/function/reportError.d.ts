import ts from 'typescript';
export default function reportError(file: ts.SourceFile, node: ts.Node, message: string, code?: number, startPos?: number, endPos?: number): void;
