function main() {
    function solution(A) {
        for (let i = 0; i < A.length; i++) {
            for (let j = i + 1; j < A.length; j++) {
                if (A[j] === A[i]) {
                    return 'is not unique';
                }
            }
        }

        return 'is unique';
    }

    function solutionUseSet(A) {
        const uniqueChars = Array.from(new Set(A));
        return A.length === uniqueChars.length ? 'is unique' : 'is not unique';
    }

    const operationString = helper.getTestValue('abcdef');

    helper(function () {
        return solution(operationString);
    });

    helper(function () {
        return solutionUseSet(operationString);
    });
}
