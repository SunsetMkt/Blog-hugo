/**
 * 获取字符串长度，不包括字符串末尾的空字符（\0）
 *
 * @param pointer
 */
export declare function strlen(pointer: pointer<char>): number;
/**
 * 将一个字符串复制到另一个字符串
 *
 * @param destination
 * @param source
 */
export declare function strcpy(destination: pointer<char>, source: pointer<char>): void;
/**
 * 将一个字符串追加到另一个字符串的末尾
 *
 * @param destination
 * @param source
 */
export declare function strcat(destination: pointer<char>, source: pointer<char>): void;
/**
 * 比较两个字符串的大小
 */
export declare function strcmp(str1: pointer<char>, str2: pointer<char>): 0 | 1 | -1;
