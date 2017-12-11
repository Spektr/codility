function main() {

    // + performance in long array
    function solution(A, K) {
        var len = A.length,
            result;

        // extremly importannt correct K before it match
        if (K > len) {
            K %= len;
        }

        if (K <= 0 || K === len) {
            return A;
        }

        result        = A.slice(-K).concat(A);
        result.length = len; // hack (if -K === 0 then result = A + A) for forgot array length

        return result;
    }

    // + performance in short array
    function reduceSolution(A, K) {
        var n = A.length;

        return A.reduce(function (resultArray, value, i) {
            var newIndex          = (i + K) % n;
            resultArray[newIndex] = value;
            return resultArray;
        }, new Array(n));

    }

    var testValue = helper.getTestValue([[1, 2, 3, 4, 5, 6, 7], 3]),
        testArray = testValue[0],
        testShift = testValue[1];

    helper(function () {
        return solution(testArray, testShift);
    }, 'Ciclic rotation');

    helper(function () {
        return reduceSolution(testArray, testShift);
    }, 'Ciclic rotation with reduce');
}
