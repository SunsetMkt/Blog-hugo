import { AesMode } from './aes';
export default class AESSoftDecryptor {
    private rcon;
    private subMix;
    private invSubMix;
    private sBox;
    private invSBox;
    private key;
    private ksRows;
    private keySize;
    private keySchedule;
    private invKeySchedule;
    constructor(mode?: AesMode);
    private uint8ArrayToUint32Array_;
    private initTable;
    expandKey(keyBuffer: ArrayBuffer): Promise<void>;
    private networkToHostOrderSwap;
    decrypt(inputArrayBuffer: Uint8Array, aesIV: ArrayBuffer): Promise<ArrayBuffer>;
}
