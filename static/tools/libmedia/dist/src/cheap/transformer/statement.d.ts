import ts from 'typescript';
import { DeclarationData, ImportData, RequireData, TransformerOptions } from './type';
export declare enum StageStatus {
    NONE = 0,
    CALL = 1,
    EqualLeft = 2,
    EqualRight = 3,
    SingleArrowRight = 4,
    PointerPlusMinusIgnore = 5,
    AddressOf = 6,
    Parameter = 7,
    VariableDeclaration = 8
}
export declare enum BlockType {
    UNKNOWN = 0,
    FUNCTION = 1,
    IF = 2,
    LOOP = 3
}
interface StageBase {
}
export interface CallStage extends StageBase {
    name: string;
}
declare class Stage<T> {
    stage: StageStatus;
    data: T;
}
type StageMap<T> = T extends StageStatus.CALL ? CallStage : StageBase;
declare class BlockStack {
    type: BlockType;
    topDeclaration: DeclarationData[];
    definedStruct: string[];
    stages: Stage<StageBase>[];
    locals: Map<string, ts.Symbol>;
    funcs: Map<string, ts.Node>;
    synchronize: boolean;
    constructor(type?: BlockType);
    pushStage(stage: StageStatus, data: StageBase): void;
    popStage(): void;
    lookupStage<T extends StageStatus>(stage: T): StageMap<T>;
    getCurrentStage(): Stage<StageBase>;
    hasStruct(name: string): boolean;
    getDeclaration(name: string): DeclarationData;
}
declare class Statement {
    options: TransformerOptions;
    compilerOptions: ts.CompilerOptions;
    cheapCompilerOptions: {
        defined: Record<string, any>;
    };
    program: ts.Program;
    context: ts.TransformationContext;
    typeChecker: ts.TypeChecker;
    visitor: ts.Visitor;
    currentFile: ts.SourceFile;
    currentFilePath: string;
    imports: Map<string, Map<string, string>>;
    memoryImports: ImportData[];
    symbolImports: ImportData[];
    stdImports: ImportData[];
    identifierImports: ImportData[];
    requires: RequireData[];
    stacks: BlockStack[];
    identifierIndex: number;
    moduleType: ts.ModuleKind;
    esModuleInterop: boolean;
    start(file: ts.SourceFile): void;
    isOutputCJS(): boolean;
    end(newFile: ts.SourceFile): ts.SourceFile;
    pushStack(type?: BlockType): void;
    popStack(): void;
    getCurrentStack(): BlockStack;
    pushStage(status: StageStatus, data?: StageBase): void;
    popStage(): void;
    getCurrentStage(): Stage<StageBase>;
    lookupStage<T extends StageStatus>(stage: T): StageMap<T>;
    hasStruct(name: string): boolean;
    addStruct(name: string): void;
    getDeclaration(name: string): DeclarationData;
    addDeclaration(name: string, initializer?: ts.Expression): DeclarationData;
    addModuleDeclaration(name: string, initializer?: ts.Expression): DeclarationData;
    addMemoryImport(name: string): ts.Identifier | ts.PropertyAccessExpression;
    addSymbolImport(name: string): ts.Identifier | ts.PropertyAccessExpression;
    addIdentifierImport(name: string, modulePath: string, defaultExport: boolean, esModule?: boolean): ts.Identifier | ts.PropertyAccessExpression;
    isIdentifier(name: ts.Identifier | ts.PropertyAccessExpression, identifier: string, path: string): boolean;
    addLocal(name: string, symbol: ts.Symbol): void;
    addFunc(name: string, node: ts.Node): void;
    lookupLocal(name: string): ts.Symbol;
    lookupFunc(name: string): ts.Node;
    lookupSynchronized(): boolean;
}
declare const statement: Statement;
export default statement;
