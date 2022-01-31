function main() {

    function solution(matrix) {
        const dimension = matrix.length;
        const result = new Array(dimension);

        for (let j = 0; j < dimension; j++) {
            result[j] = new Array(dimension);

            for (let i = 0; i < dimension; i++) {
                result[j][dimension - 1 - i] = matrix[i][j];
            }
        }

        return result;
    }

    const testValue = helper.getTestValue([
        ['a', '', ''],
        ['', 'b', ''],
        ['', '', 'c'],
    ]);

    helper(function () {
        return JSON.stringify(solution(testValue));
    });
}
