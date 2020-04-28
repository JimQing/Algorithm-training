/**
 * Build a queue by two stack
 * 通过两个堆栈实现一个队列
 */
class Queue {
    constructor() {
        this._inStack = [];
        this._outStack = [];
    }
    push(val) {
        this._inStack.push(val);
        console.log(this._inStack);
    }
    pop() {
        if (this._outStack.length === 0) {
            while(this._inStack.length) {
                this._outStack.push(this._inStack.pop())
            }
        }
        return this._outStack.pop();
    }
}
const q = new Queue();
q.push(1);
q.push(2);
q.push(3);
q.push(4);
q.push(5);
q.pop();



