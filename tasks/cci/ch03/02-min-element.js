class StackWithMin {
    stack = [];
    minStack = [];

    pop() {
        if (!this.stack.length) {
            return null;
        }

        const value = this.stack.pop();

        if (value === this.min()) {
            this.minStack.pop();
        }

        return value;
    }

    push(value) {
        if (value <= this.min()) {
            this.minStack.push(value);
        }
        this.stack.push(value);
    }

    min() {
        return this.minStack.length ? this.minStack[this.minStack.length - 1] : Infinity;
    }

    toArray() {
        return [this.stack, this.minStack];
    }
}

function main() {
    const arr = [];

    function solution(arr) {
        const stack = new StackWithMin();
        arr.forEach((item) => {
            stack.push(item);
        })

        stack.pop();
        stack.pop();

        return stack.toArray();

    }

    const testValue = helper.getTestValue([9,8,5,3,1,2,1,8,6]);

    helper(function () {
        return JSON.stringify(solution(testValue));
    });
}
