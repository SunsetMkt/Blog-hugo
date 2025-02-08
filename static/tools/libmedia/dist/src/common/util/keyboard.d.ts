/**
 * 会触发字符改变的键
 */
export declare const charKey: {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    g: number;
    h: number;
    i: number;
    j: number;
    k: number;
    l: number;
    m: number;
    n: number;
    o: number;
    p: number;
    q: number;
    r: number;
    s: number;
    t: number;
    u: number;
    v: number;
    w: number;
    x: number;
    y: number;
    z: number;
    '0': number;
    '1': number;
    '2': number;
    '3': number;
    '4': number;
    '5': number;
    '6': number;
    '7': number;
    '8': number;
    '9': number;
    '`': number;
    '+': number;
    '-': number;
    '=': number;
    '[': number;
    ']': number;
    '\\': number;
    ';': number;
    '\'': number;
    ',': number;
    '.': number;
    '/': number;
    $0: number;
    $1: number;
    $2: number;
    $3: number;
    $4: number;
    $5: number;
    $6: number;
    $7: number;
    $8: number;
    $9: number;
    '$.': number;
    '$+': number;
    '$-': number;
    '$*': number;
    '$/': number;
    space: number;
    tab: number;
};
/**
* 删除键
*/
export declare const deleteKey: {
    backspace: number;
    delete: number;
};
/**
* 功能键
*/
export declare const functionKey: {
    f1: number;
    f2: number;
    f3: number;
    f4: number;
    f5: number;
    f6: number;
    f7: number;
    f8: number;
    f9: number;
    f10: number;
    f11: number;
    f12: number;
    enter: number;
    esc: number;
    capslock: number;
    insert: number;
    home: number;
    end: number;
    pageup: number;
    pagedown: number;
    left: number;
    right: number;
    up: number;
    down: number;
};
/**
* 常用的组合按键
*/
export declare const combinationKey: {
    shift: number;
    ctrl: number;
    meta: number;
    alt: number;
};
export declare const keyChar: Record<number, string>;
export declare const keyDelete: Record<number, string>;
export declare const keyFunction: Record<number, string>;
export declare const keyCombination: Record<number, string>;
export declare function isCharKey(keyCode: number): boolean;
export declare function isDeleteKey(keyCode: number): boolean;
export declare function isFunctionKey(keyCode: number): boolean;
export declare function isCombinationKey(keyCode: number): boolean;
