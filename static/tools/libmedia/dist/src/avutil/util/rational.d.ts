import { Rational } from '../struct/rational';
/**
 * 将一个时间戳由一个时间基转换到另一个时间基
 *
 * @param a 待转换时间戳
 * @param bp 待转换时间戳的时间基
 * @param cq 目标时间基
 */
export declare function avRescaleQ(a: int64, bq: Rational, cq: Rational): bigint;
/**
 * 将一个时间戳由一个时间基转换到另一个时间基
 *
 * @param a 待转换时间戳
 * @param bp 待转换时间戳的时间基
 * @param cq 目标时间基
 */
export declare function avRescaleQ2(a: int64, bq: pointer<Rational>, cq: Rational): bigint;
/**
 * 将一个时间戳由一个时间基转换到另一个时间基
 *
 * @param a 待转换时间戳
 * @param bp 待转换时间戳的时间基
 * @param cq 目标时间基
 */
export declare function avRescaleQ3(a: int64, bq: Rational, cq: pointer<Rational>): bigint;
/**
 * 将一个时间戳由一个时间基转换到另一个时间基
 *
 * @param a 待转换时间戳
 * @param bp 待转换时间戳的时间基
 * @param cq 目标时间基
 */
export declare function avRescaleQ4(a: int64, bq: pointer<Rational>, cq: pointer<Rational>): bigint;
/**
 * 将一个时间基转换成 double
 *
 * @param a
 */
export declare function avQ2D(a: Rational): number;
/**
 * 将一个时间基转换成 double
 *
 * @param a
 */
export declare function avQ2D2(a: pointer<Rational>): number;
export declare function avD2Q(d: double, max: int32): Rational;
/**
 * 化简 Rational
 *
 * @param a
 */
export declare function avReduce(a: Rational): void;
/**
 * 化简 Rational
 *
 * @param a
 */
export declare function avReduce2(a: pointer<Rational>): void;
