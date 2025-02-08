import { Vector3, Vector4 } from './Vector3';
export default class Matrix4 {
    /**
     * 全局单例
     */
    static shared(): Matrix4;
    static RowMajor(matrix: number[]): Matrix4;
    static ColMajor(matrix: number[]): Matrix4;
    element: Float32Array;
    constructor(matrix?: number[]);
    rc(r: number, c: number): number;
    setRC(r: number, c: number, value: number): void;
    getValue(index: number): number;
    setValue(index: number, value: number): void;
    /**
     * 设置成单位矩阵
     */
    setIdentity(): Matrix4;
    /**
     * 设置矩阵值
     * @param matrix
     */
    set(matrix: number[]): Matrix4;
    /**
     * 矩阵乘法
     * @param matrix
     */
    multiply(matrix: Matrix4): Matrix4;
    /**
     * 矩阵乘以 3 维向量
     * @param vector3
     */
    multiplyVector3(vector3: Vector3): Vector3;
    /**
     * 矩阵乘以 4 维向量
     * @param vector4
     */
    multiplyVector4(vector4: Vector4): Vector4;
    /**
     * 矩阵转置
     */
    transpose(): Matrix4;
    /**
     * 求特定矩阵的逆矩阵，并设置成当前矩阵
     * @param matrix
     */
    setInverseOf(matrix: Matrix4): Matrix4;
    /**
     * 求自身的逆矩阵
     */
    invert(): Matrix4;
    /**
     * 设置成正射投影矩阵
     * @param left
     * @param right
     * @param bottom
     * @param top
     * @param near
     * @param far
     */
    setOrtho(left: number, right: number, bottom: number, top: number, near: number, far: number): Matrix4;
    /**
     * 右乘正射投影矩阵
     * @param left
     * @param right
     * @param bottom
     * @param top
     * @param near
     * @param far
     */
    ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): Matrix4;
    /**
     * 设置成透视投影矩阵
     * @param left
     * @param right
     * @param bottom
     * @param top
     * @param near
     * @param far
     */
    setFrustum(left: number, right: number, bottom: number, top: number, near: number, far: number): Matrix4;
    /**
     * 右乘透视投影矩阵
     * @param left
     * @param right
     * @param bottom
     * @param top
     * @param near
     * @param far
     */
    frustum(left: number, right: number, bottom: number, top: number, near: number, far: number): Matrix4;
    /**
     * 设置成透视投影矩阵
     * @param left
     * @param right
     * @param bottom
     * @param top
     * @param near
     * @param far
     */
    setPerspective(fovy: number, aspect: number, near: number, far: number): Matrix4;
    /**
     * 右乘透视投影矩阵
     * @param left
     * @param right
     * @param bottom
     * @param top
     * @param near
     * @param far
     */
    perspective(fovy: number, aspect: number, near: number, far: number): Matrix4;
    /**
     * 将 Matrix4 实例设置为缩放变换矩阵
     * @param vector3 缩放因子
     */
    setScale(vector3: Vector3): Matrix4;
    /**
     * 右乘缩放变换矩阵
     * @param vector3 缩放因子
     */
    scale(vector3: Vector3): Matrix4;
    /**
     * 将 Matrix4 实例设置为平移变换矩阵
     * @param vector3 平移因子
     */
    setTranslate(vector3: Vector3): Matrix4;
    /**
     * 右乘平移变换矩阵
     * @param vector3 平移因子
     */
    preTranslate(vector3: Vector3): Matrix4;
    /**
     * 右乘平移变换矩阵
     * @param vector3 平移因子
     */
    postTranslate(vector3: Vector3): Matrix4;
    /**
     * 将 Matrix4  实例设置为旋转变换矩阵
     * @param angle 旋转角度（角度制 0-360）
     * @param vector3 旋转轴
     */
    setRotate(angle: number, vector3: Vector3): Matrix4;
    /**
     * 右乘旋转矩阵
     * @param angle 旋转角度（角度制 0-360）
     * @param vector3 旋转轴
     */
    rotate(angle: number, vector3: Vector3): Matrix4;
    /**
     * 设置成一个观察矩阵
     * @param eye 视点
     * @param center 目标
     * @param up 上方向
     */
    setLookAt(eye: Vector3, center: Vector3, up: Vector3): Matrix4;
    /**
     * 右乘视图矩阵
     * @param eye 视点
     * @param center 目标
     * @param up 上方向
     */
    lookAt(eye: Vector3, center: Vector3, up: Vector3): Matrix4;
    toArray(): number[];
    copy(): Matrix4;
}
