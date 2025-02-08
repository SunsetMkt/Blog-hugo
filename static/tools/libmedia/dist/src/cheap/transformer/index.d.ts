import ts from 'typescript';
import { TransformerOptions } from './type';
export declare function before(program: ts.Program, options?: TransformerOptions): ts.TransformerFactory<ts.SourceFile>;
export declare function after(program: ts.Program, options?: TransformerOptions): ts.TransformerFactory<ts.SourceFile>;
export declare function afterDeclarations(program: ts.Program, options?: TransformerOptions): ts.TransformerFactory<ts.SourceFile>;
