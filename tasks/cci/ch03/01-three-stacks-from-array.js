class StackFromArray {
    constructor(arr, shift) {
        this.arr = arr;

        // detect slot
        this.slot = 0;
        while (this.arr[this.slot] !== undefined) {
            this.slot++;
        }

        this.shift = shift;
        this.length = 0;

        if (this.slot > this.shift) {
            throw new Error('Array already filled');
        }
    }

    pop() {
        if (this.length === 0) {
            return null;
        }

        const valueIndex = this.slot + this.shift * (this.length - 1);
        const value = this.arr[valueIndex];
        delete this.arr[valueIndex];
        this.length--;
        return value;
    }

    push(value) {
        const valueIndex = this.slot + this.shift * this.length;
        this.arr[valueIndex] = value;
        this.length++;
    }

    toArray() {
        if (this.length === 0) {
            return [];
        }
        const arr = [];

        for(let i = this.length; i >0; i--){
            const valueIndex = this.slot + this.shift * (i - 1);
            arr.push(this.arr[valueIndex]);
        }

        return arr.reverse();
    }
}

function main() {
    const arr = [];

    function solution(stacksNum) {
        const stacks = [];
        let stack;
        for (let i = 0; i < stacksNum; i++) {
            stack = new StackFromArray(arr, stacksNum);

            // fill by less than ten random value
            for (let j = 0; j < Math.floor(Math.random() * 10); j++) {
                stack.push(i.toString() + Math.floor(Math.random() * 10));
            }

            stacks.push(stack);
        }

        return stacks.map((stack) => stack.toArray());

    }

    const testValue = helper.getTestValue(3);

    helper(function () {
        return JSON.stringify([solution(testValue), arr]);
    });
}
