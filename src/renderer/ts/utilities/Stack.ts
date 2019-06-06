export default class Stack<T> {
    private stack: T[];
    constructor(arr=[]) {
        this.stack = arr;
    }

    push(...el: T[]) {
        this.stack.unshift(...el);
    }
    pop(): T {
        if(this.isEmpty()) throw new Error("Cannot call .pop() on empty stack.");
        return this.stack.shift()!;
    }
    peek() {
        return this.stack[0];
    }

    isEmpty() {
        return this.size == 0;
    }
    get size() {
        return this.stack.length;
    }
}