import { AesMode } from './aes';
export default class AESSoftDecryptor {
    private subtle;
    private key;
    private mode;
    private keyBuffer;
    constructor(mode?: AesMode);
    private getSubtleAlgoName;
    expandKey(key: ArrayBuffer): Promise<void>;
    encryptPadding(padding: Uint8Array, iv: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
    decrypt(input: Uint8Array, iv: ArrayBuffer): Promise<ArrayBuffer>;
    static isSupport(): boolean;
}
