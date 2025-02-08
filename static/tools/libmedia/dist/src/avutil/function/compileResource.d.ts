import { WebAssemblyResource } from 'cheap/webassembly/compiler';
export default function compileResource(wasmUrl: string | ArrayBuffer | WebAssemblyResource, thread?: boolean): Promise<WebAssemblyResource>;
