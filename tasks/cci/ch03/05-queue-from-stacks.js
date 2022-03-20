class MyQueue {
    constructor(firstStack, secondStack) {
        this.original = firstStack || [];
        this.buffer = secondStack || [];
    }

    enqueue(value) {
        this.original.push(value);
    }

    dequeue() {
        if(!this.original.length){
            return null;
        }

        let poppedValue = this.original.pop();

        while (this.original.length){
            this.buffer.push(poppedValue);
            poppedValue = this.original.pop();
        }

        while (this.buffer.length){
            this.original.push(this.buffer.pop());
        }

        return poppedValue;
    }
}

function main() {

    function solution(values) {
        const queue = new MyQueue();
        values.forEach((value) => {
            queue.enqueue(value);
        })

        let i = values.length / 2;
        while(i-- > 0){
            queue.dequeue();
        }

        return queue.original;
    }

    const testValues = helper.getTestValue([1, 2, 3, 4, 5, 6, 7]);

    helper(function () {
        return solution(testValues);
    });
}
