class SetOfStacks {
    stacks = [];
    cursor = -1;

    get stack() {
        return this.stacks[this.cursor];
    }

    constructor(limit = 3) {
        this.limit = limit;
    }

    pop() {
        if (!this.stack) {
            return null;
        }

        if (!this.stack.length) {
            this.stacks.splice(this.cursor, 1);
            this.cursor--;
        }

        return this.stack ? this.stack.pop() : null;
    }

    push(value) {
        if (!this.stack || this.stack.length >= this.limit) {
            this.stacks.push([]);
            this.cursor++;
        }
        this.stack.push(value);
    }

    popAt(index) {
        let stack = this.stacks[index];
        if(!stack || !stack.length){
            return null;
        }

        const value = stack.pop();

        while (stack = this.stacks[++index]){
            this.stacks[index-1].push(stack.shift());
        }

        return value;
    }

    toArray() {
        return this.stacks;
    }
}

function main() {

    function solution(arr) {
        const stack = new SetOfStacks();
        arr.forEach((item) => {
            stack.push(item);
        })

        stack.pop();
        stack.popAt(1);
        stack.pop();

        return stack.toArray();

    }

    const testValue = helper.getTestValue([1, 1, 1, 2, 2, 2, 5, 5, 5]);

    helper(function () {
        return JSON.stringify(solution(testValue));
    });
}
