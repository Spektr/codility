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

function main() {

    function solution(stack) {
        let min;
        let max;
        const minStack = new Stack();
        const maxStack = new Stack();
        const bufferStack = new Stack();

        while (!stack.isEmpty()) {
            min = stack.peek();
            max = stack.peek();

            // find min and max values
            while (!stack.isEmpty()) {
                if (stack.peek() < min) {
                    min = stack.peek();
                } else if (stack.peek() > max) {
                    max = stack.peek();
                }
                bufferStack.push(stack.pop());
            }

            // collect min and max values
            while (!bufferStack.isEmpty()) {
                if (bufferStack.peek() === min) {
                    minStack.push(bufferStack.pop());
                } else if (bufferStack.peek() === max) {
                    maxStack.push(bufferStack.pop());
                } else {
                    stack.push(bufferStack.pop());
                }
            }
        }

        // join to max buffer
        while (!minStack.isEmpty()) {
            maxStack.push(minStack.pop());
        }

        // return to initial stack
        while (!maxStack.isEmpty()) {
            stack.push(maxStack.pop());
        }
    }

    const testValues = helper.getTestValue([1, 6, 7, 4, 8, 5, 2, 3]);
    const stack = testValues.reduce((acc, value) => {
        acc.push(value);
        return acc;
    }, new Stack());

    helper(function () {
        solution(stack);
        return JSON.stringify(stack._stack);
    });
}
