class Stack {
    _stack = [];

    push(value) {
        this._stack.push(value);
    }

    pop() {
        return this._stack.pop();
    }

    peek() {
        return this._stack[this._stack.length - 1];
    }

    isEmpty() {
        return this._stack.length === 0;
    }
}
