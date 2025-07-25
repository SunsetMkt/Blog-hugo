import { Uint8ArrayInterface } from 'common/io/interface';
import AVBSPipe from '../AVBSPipe';
import { AesMode } from 'common/crypto/aes/aes';
export default class AESDecryptPipe extends AVBSPipe {
    private buffer;
    private aesSoftDecryptor;
    private aesWebDecryptor;
    private aesTargetDecryptor;
    private pointer;
    private endPointer;
    private size;
    private ended;
    private iv;
    private key;
    private mode;
    private pos;
    constructor(mode?: AesMode, size?: number);
    remainingLength(): number;
    expandKey(key: ArrayBuffer, iv: ArrayBuffer): Promise<void>;
    private flush_;
    private flush;
    private removePadding;
    private decryptCBC;
    private getCTRIv;
    private decryptCTR;
    read(buffer: Uint8ArrayInterface): Promise<number>;
}
