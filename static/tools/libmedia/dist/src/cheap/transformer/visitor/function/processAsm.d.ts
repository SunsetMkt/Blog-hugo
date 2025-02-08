import ts from 'typescript';
export default function processAsm(template: ts.TemplateExpression | ts.NoSubstitutionTemplateLiteral, node: ts.TaggedTemplateExpression, wasm64: boolean): ts.StringLiteral;
