function main() {
    function solution(X, Y, D) {
        return Math.ceil((Y-X)/D);
    }

    // +20% perf
    function optimizedSolution(X, Y, D) {
        var distance = Y-X;

        return ((distance/D) | 0) + (distance % D ? 1 : 0);
    }

    var testNumbers = +helper.getTestValue(),
        X = testNumbers[0] | 10,
        Y = testNumbers[0] | 85,
        D = testNumbers[0] | 30;


    helper(function () {
        return solution(X,Y,D);
    }, 'frog jump');

    helper(function () {
        return optimizedSolution(X,Y,D);
    }, 'frog jump optimized');
}
