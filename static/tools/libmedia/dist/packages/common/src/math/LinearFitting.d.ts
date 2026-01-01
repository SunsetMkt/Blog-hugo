/**
 * 使用最小二乘法做线性拟合
 */
export default class LinearFitting {
    private x;
    private y;
    private max;
    private slope;
    private intercept;
    constructor(max?: number);
    push(x: number, y: number): void;
    canTransform(): boolean;
    y2x(y: number): number;
    x2y(x: number): number;
}
