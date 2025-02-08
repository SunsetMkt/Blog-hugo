type ListNodeDepth = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
declare class ListNode<T = void, D extends ListNodeDepth[number] = 9> {
    prev: [D] extends [never] ? never : pointer<ListNode<T, ListNodeDepth[D]>>;
    next: [D] extends [never] ? never : pointer<ListNode<T, ListNodeDepth[D]>>;
    data: pointer<T>;
}
export default class List<T> {
    length: uint32;
    head: pointer<ListNode<T>>;
    tail: pointer<ListNode<T>>;
    private createNode;
    private getItem;
    push<args = [T]>(item: T): void;
    push<args = [T, true]>(item: pointer<T>): void;
    pop<args = [T]>(): T;
    shift<args = [T]>(): T;
    unshift<args = [T]>(item: T): void;
    unshift<args = [T, true]>(item: pointer<T>): void;
    forEach<args = [T]>(callback: (item: T, index?: uint32) => boolean | void): void;
    find<args = [T]>(callback: (item: T, index?: uint32) => boolean): T;
    indexOf<args = [T]>(index: uint32): T;
    clear<args = [T]>(callback?: (item: T) => void): void;
}
export {};
