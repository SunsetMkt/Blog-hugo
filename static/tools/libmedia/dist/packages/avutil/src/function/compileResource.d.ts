import { type WebAssemblyResource } from '@libmedia/cheap';
export default function compileResource(wasmUrl: string | ArrayBuffer | WebAssemblyResource, thread?: boolean): Promise<WebAssemblyResource>;
