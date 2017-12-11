function main() {
    function solution(X, Y, D) {
        return Math.ceil((Y-X)/D);
    }

    // +20% perf
    function optimizedSolution(X, Y, D) {
        var distance = Y-X;

        return ((distance/D) | 0) + (distance % D ? 1 : 0);
    }

    var testNumbers = helper.getTestValue([10,85,30]),
        X = testNumbers[0],
        Y = testNumbers[1],
        D = testNumbers[2];


    helper(function () {
        return solution(X,Y,D);
    }, 'frog jump');

    helper(function () {
        return optimizedSolution(X,Y,D);
    }, 'frog jump optimized');
}
