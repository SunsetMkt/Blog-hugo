/**
 * Base16384
 *
 * A unicode-based encoding scheme that presents binary data (sequence of 8-bit bytes)
 * in sequences of 14-bit printable Chinese characters. It saves 17% space compared to base64.
 *
 * https://github.com/shigma/base16384.js/blob/master/src/index.ts
 */

type TypedArray = Uint8Array | Uint16Array;

function align(
    input: TypedArray,
    output: TypedArray,
    sWidth: number,
    tWidth: number,
    sOffset: number,
    tOffset: number,
) {
    let offset = 0;
    let rest = 0;
    let i = 0,
        j = 0;
    const mask = (1 << tWidth) - 1;
    while (i < input.length) {
        const char = input[i] - sOffset;
        offset += sWidth;
        while (offset >= tWidth) {
            offset -= tWidth;
            output[j++] = rest + (char >> offset) + tOffset;
            if (j === output.length) return;
            rest = 0;
        }
        rest += (char << (tWidth - offset)) & mask;
        i++;
    }
    if (offset) {
        output[j++] = rest + tOffset;
    }
}

export function toUint8Array(source: string) {
    return new TextEncoder().encode(source);
}

/**
 * @param input `string | Uint8Array` original binary data
 * @returns `Uint16Array` base16384-encoded data
 */
export function encode(input: string | Uint8Array) {
    if (typeof input === "string") {
        input = toUint8Array(input);
    }

    const output = new Uint16Array(Math.ceil((input.length * 4) / 7) + 1);
    align(input, output, 8, 14, 0, 0x4e00);
    output[output.length - 1] = (input.length % 7) + 0x3d00;
    return output;
}

export function encodeToString(input: string | Uint8Array) {
    const buffer = encode(input);
    return new TextDecoder("utf-16").decode(buffer);
}

export function toUint16Array(source: string) {
    const input = new Uint16Array(source.length);
    for (let i = 0; i < source.length; i++) {
        input[i] = source.charCodeAt(i);
    }
    return input;
}

/**
 * @param input `string | Uint16Array` base16384-encoded data
 * @returns `Uint8Array` original binary data
 */
export function decode(input: string | Uint16Array) {
    if (typeof input === "string") {
        input = toUint16Array(input);
    }

    const length = input.length - 1;
    const residue = input[length] - 0x3d00 || 7;
    const output = new Uint8Array(Math.floor((length - 1) / 4) * 7 + residue);
    align(input, output, 14, 8, 0x4e00, 0);
    return output;
}

export function decodeToString(input: string | Uint16Array) {
    const buffer = decode(input);
    return new TextDecoder("utf-8").decode(buffer);
}
