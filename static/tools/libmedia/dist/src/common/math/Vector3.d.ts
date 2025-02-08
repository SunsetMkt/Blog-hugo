export declare class Vector3 {
    element: Float32Array;
    constructor(vector?: number[]);
    /**
     * 归一化
     */
    normalize(): Vector3;
    toArray(): number[];
    get magnitude(): number;
    get sqrMagnitude(): number;
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get z(): number;
    set z(value: number);
}
export declare class Vector4 {
    element: Float32Array;
    constructor(vector?: number[]);
}
