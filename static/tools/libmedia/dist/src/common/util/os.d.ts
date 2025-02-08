/**
 * UA 检测操作系统
 *
 * 返回结果如下：
 *
 * {
 *    name: 'mac',     // 判断多个浏览器时，便于用 name 去 switch
 *    mac: true,       // 判断某一个浏览器时，便于 if (mac) { ... }
 *    version: '8.0'   // 版本号，string 类型
 * }
 *
 */
import { OS } from '../types/type';
declare const os: OS;
export default os;
