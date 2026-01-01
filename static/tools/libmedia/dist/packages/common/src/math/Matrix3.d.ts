export default class Matrix3 {
    element: Float32Array;
    static RowMajor(matrix: number[]): Matrix3;
    static ColMajor(matrix: number[]): Matrix3;
    constructor(matrix?: number[]);
    rc(r: number, c: number): number;
    setRC(r: number, c: number, value: number): void;
    getValue(index: number): number;
    setValue(index: number, value: number): void;
    /**
     * 设置成单位矩阵
     */
    setIdentity(): Matrix3;
    /**
     * 设置矩阵值
     * @param matrix
     */
    set(matrix: number[]): Matrix3;
    invert(): Matrix3;
    toArray(): number[];
    copy(): Matrix3;
}
