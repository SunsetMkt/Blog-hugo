export default class ASMRunner {
    private runner;
    private wasm;
    constructor(asmBase64: string);
    invoke(name: string, ...args: (number | bigint)[]): any;
    destroy(): void;
    get exports(): WebAssembly.Exports;
}
