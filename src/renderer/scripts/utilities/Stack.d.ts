export default class Stack<T> {
    private stack;
    constructor(arr?: never[]);
    push(...el: T[]): void;
    pop(): T | undefined;
    peek(): T;
    isEmpty(): boolean;
    readonly size: number;
}
