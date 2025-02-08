import ts from 'typescript';
export default function parseImports(file: ts.SourceFile, program: ts.Program, typeChecker: ts.TypeChecker, locals: Map<string, ts.Symbol>): Map<string, Map<string, string>>;
