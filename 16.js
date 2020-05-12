/**
 * The stack containing the find-min function
 */

class stack {
    constructor() {
        this.entity = [];
        this.minStack = [];
        this.tempValue = 0;
    }
    _push(node) {
        if (node < this.tempValue) this.tempValue = node;
        this.entity.push(node);
        this.minStack.push(this.tempValue);
    }
    _pop() {
        this.entity.pop();
    }
    min() {
        return this.minStack[this.minStack.length - 1];
    }
}
const aStack = new stack();
aStack._push(1)
aStack._push(3)
aStack._push(2)
aStack._push(0)
aStack._push(5)
aStack._push(7)
aStack._push(1)
console.log(aStack.min());
