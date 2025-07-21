import { Uint8ArrayInterface } from 'common/io/interface';
import { EncryptionInfo, EncryptionInitInfo } from '../struct/encryption';
export declare function encryptionSideData2Info(buffer: Uint8ArrayInterface): EncryptionInfo;
export declare function encryptionInfo2SideData(info: EncryptionInfo): Uint8Array;
export declare function encryptionSideData2InitInfo(buffer: Uint8ArrayInterface): EncryptionInitInfo[];
export declare function encryptionInitInfo2SideData(infos: EncryptionInitInfo[]): Uint8Array;
