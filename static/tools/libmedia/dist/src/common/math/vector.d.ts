import Matrix3 from './Matrix3';
import { Vector3 } from './Vector3';
/**
 * 向量加法
 */
export declare function add(a: Vector3, b: Vector3): Vector3;
/**
 * 向量减法
 */
export declare function minus(a: Vector3, b: Vector3): Vector3;
/**
 * 向量乘以标量
 */
export declare function scalarProduct(vector: Vector3, scalar: number): Vector3;
/**
 * 向量点乘
 */
export declare function dotProduct(a: Vector3, b: Vector3): number;
/**
 * 向量叉乘
 */
export declare function crossProduct(a: Vector3, b: Vector3): Vector3;
/**
 * 向量旋转
 */
export declare function rotate(vector: Vector3, angle: number, axis: Vector3): Vector3;
/**
 * 求两个向量的单位法向量
 */
export declare function vertical(a: Vector3, b: Vector3): Vector3;
/**
 * 求两个向量的夹角余弦值
 */
export declare function angleCos(a: Vector3, b: Vector3): number;
/**
 * 求两个向量的夹角
 */
export declare function angle(a: Vector3, b: Vector3): number;
/**
 * 求两个向量的线段拓展向量
 */
export declare function extendPoint(a: Vector3, b: Vector3): Vector3;
/**
 * 矩阵向量相乘
 */
export declare function mvMul(m: Matrix3, v: Vector3): Vector3;
