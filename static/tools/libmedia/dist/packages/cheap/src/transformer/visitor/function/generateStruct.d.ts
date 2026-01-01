import ts from 'typescript';
import type { Struct } from '../../struct';
export default function generateStruct(struct: Struct): ts.Statement[];
