function main() {

    function solution(A) {
        if (A[A.length - 1] !== ' ') {
            return `[${A}]`;
        }

        let result = ' ';
        for (let i = 0; i < A.length - 1; i++) {
            result += A[i];
        }

        return `[${result}]`;
    }

    function solutionHandleAsArray(A) {
        if (A[A.length - 1] !== ' ') {
            return `[${A}]`;
        }

        const result = Array.from(A);
        result.unshift(result.pop());
        return `[${result.join('')}]`;
    }

    function solutionSplit(A) {
        if (A[A.length - 1] !== ' ') {
            return `[${A}]`;
        }

        let result = A.split(' ');
        result = ' ' + result[0];
        return `[${result}]`;
    }

    const operationString = helper.getTestValue('abcdef ');

    helper(function () {
        return solution(operationString);
    });

    helper(function () {
        return solutionHandleAsArray(operationString);
    });

    helper(function () {
        return solutionSplit(operationString);
    });
}
