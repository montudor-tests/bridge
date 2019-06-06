export default class Stack {
    constructor(arr = []) {
        this.stack = arr;
    }
    push(...el) {
        this.stack.unshift(...el);
    }
    pop() {
        return this.stack.shift();
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
//# sourceMappingURL=Stack.js.map