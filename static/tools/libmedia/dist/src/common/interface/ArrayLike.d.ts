export default abstract class ArrayLike {
    protected proxy: ArrayLike;
    constructor();
    protected abstract getIndexValue(index: number): any;
    protected abstract setIndexValue(index: number, value: any): void;
    [n: number]: number;
}
