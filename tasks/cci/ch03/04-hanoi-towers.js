function main() {
    const first = [];
    const second = [];
    const third = [];

    function replace(from, to, buffer, count) {
        if (count === 0) {
            return;
        }

        replace(from, buffer, to, count - 1);
        to.push(from.pop());
        replace(buffer, to, from, count - 1);
    }

    function solution(first, second, third, count) {
        return replace(first, third, second, count);

    }

    const testValue = helper.getTestValue(3);
    for (let i = testValue; i > 0; i--) {
        first.push(i);
    }

    helper(function () {
        solution(first, second, third, testValue);
        return JSON.stringify([first, second, third]);
    });
}
