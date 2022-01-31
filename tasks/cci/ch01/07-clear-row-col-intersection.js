function main() {

    function solution(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        const nullableRows = new Set();
        const nullableCols = new Set();

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if(matrix[i][j]===0){
                    nullableRows.add(i);
                    nullableCols.add(j);
                }
            }
        }

        for (let i = 0; i < rows; i++) {
            if(nullableRows.has(i)){
                matrix[i] = new Array(cols).fill(0);
                continue;
            }

            for (let j = 0; j < cols; j++) {
                if(nullableCols.has(j)){
                    matrix[i][j]=0;
                }
            }
        }

        return matrix;
    }

    const testValue = helper.getTestValue([
        ['a', '', '', 'd'],
        ['', 'b', '', 0],
        ['', '', 'c', 'e'],
    ]);

    helper(function () {
        return JSON.stringify(solution(testValue));
    });
}
